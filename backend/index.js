const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const Docker = require("dockerode");
const docker = new Docker();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Create and start a Docker container with a React app
const createContainer = async (
  image = "react-app",
  cmd = ["npm", "run", "dev"]
) => {
  try {
    console.log("trying to run container");
    const container = await docker.createContainer({
      Image: image,
      Cmd: cmd,
      Tty: true,
      ExposedPorts: { "5173/tcp": {} }, // Change port here if necessary
      HostConfig: {
        PortBindings: { "5173/tcp": [{ HostPort: "5174" }] }, // Map container's port to host's port
      },
    });
    await container.start();
    return container;
  } catch (error) {
    console.error("Error creating container:", error);
    throw error;
  }
};

// WebSocket connection
wss.on("connection", async (ws) => {
  console.log("Client connected");

  let container;
  try {
    // Notify client that loading has started
    ws.send(
      JSON.stringify({ type: "loading", message: "Setting up environment..." })
    );

    // Create a Docker container
    container = await createContainer();

    // Check if container is running
    const data = await container.inspect();
    if (!data.State.Running) {
      console.error("Container is not running");
      ws.send(
        JSON.stringify({ type: "error", message: "Container failed to start." })
      );
      return;
    }

    // Notify client that the setup is complete
    ws.send(JSON.stringify({ type: "success", message: "Environment ready." }));
    console.log("success mauj");

    // Attach to container's stdin, stdout, and stderr
    const containerStream = await container.attach({
      stream: true,
      stdin: true,
      stdout: true,
      stderr: true,
    });

    // Relay container output to WebSocket
    containerStream.on("data", (data) => {
      ws.send(data.toString());
    });

    // Relay WebSocket input to container
    ws.on("message", (message) => {
      containerStream.write(message);
    });

    ws.on("close", () => {
      console.log("Client disconnected");
      container.stop().then(() => container.remove());
    });
  } catch (error) {
    console.error("Error in WebSocket connection:", error);
    if (container) {
      container.stop().then(() => container.remove());
    }
    ws.send(JSON.stringify({ type: "error", message: "An error occurred." }));
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
