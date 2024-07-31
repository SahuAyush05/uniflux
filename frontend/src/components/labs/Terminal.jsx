import React, { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

const CodeTerminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    // Initialize terminal
    const terminal = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      editable: true,
    });

    // Open terminal in the div element
    terminal.open(terminalRef.current);

    // Programmatically focus the terminal to enable typing
    terminal.focus();

    terminal.writeln("Welcome to the Interactive Code Terminal");

    // WebSocket connection
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      console.log("WebSocket connection established");
      terminal.write("Connected to server.\r\n");
    };

    socket.onmessage = (event) => {
      console.log("Received from server:", event.data);
      terminal.write(event.data);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
      terminal.write("Connection error.\r\n");
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
      terminal.write("Connection closed.\r\n");
    };

    // Handle terminal input
    terminal.onData((data) => {
      terminal.write(data);
      console.log("Sending to server:", data);
      socket.send(data);
      terminal.focus();
    });

    // Clean up on component unmount
    return () => {
      socket.close();
      terminal.dispose();
    };
  }, []);

  return (
    <div
      ref={terminalRef}
      className="overflow-hidden rounded-lg p-2"
      style={{ height: "300px" }}
    ></div>
  );
};

export default CodeTerminal;
