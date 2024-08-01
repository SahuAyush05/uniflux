import React from 'react';

// Inline styles for simplicity
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ededed',
    height: '650px',
    overflowY: 'auto',
    border: '1px solid #000000',
  },
  heading: {
    color: '#000000',
  },
  subheading: {
    color: '#555',
    borderBottom: '2px solid #ccc',
    paddingBottom: '5px',
    marginBottom: '10px',
  },
  list: {
    marginLeft: '20px',
  },
  listItem: {
    marginBottom: '10px',
  },
  code: {
    backgroundColor: '#f4f4f4',
    borderRadius: '4px',
    padding: '2px 4px',
    fontSize: '90%',
  },
  paragraph: {
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};

const Prob3 = () => {
  return (
    <div style={styles.container}>
      <h1 className="text-6xl" style={styles.heading}>Real-Time Chat App with React, WebSocket, Node.js, Docker, and Kubernetes</h1>

      <h2 className="text-2xl" style={styles.subheading}>Problem Statement</h2>
      <p style={styles.paragraph}>
        Develop a real-time chat application using React.js for the front end and WebSocket with Node.js for the back end. The application should handle real-time message delivery efficiently and be scalable to accommodate increasing numbers of users. Utilize Docker and Kubernetes to ensure the app's scalability and reliability in production environments.
      </p>

      <h3 style={styles.subheading}>Objective</h3>
      <p style={styles.paragraph}>
        Implement a full-stack chat application that supports real-time communication, handles concurrent users efficiently, and scales seamlessly across multiple nodes using containerization and orchestration technologies.
      </p>

      <h3 style={styles.subheading}>Key Challenges</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>Real-Time Communication</strong>:
          <ul style={styles.list}>
            <li>Set up a WebSocket server using Node.js to handle bidirectional communication between the client and server.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Front-End Integration</strong>:
          <ul style={styles.list}>
            <li>Use React.js to create a dynamic and responsive user interface for sending and receiving messages.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Scalability</strong>:
          <ul style={styles.list}>
            <li>Deploy the application using Docker containers and orchestrate them with Kubernetes to ensure horizontal scaling and load balancing.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Data Persistence</strong>:
          <ul style={styles.list}>
            <li>Implement a strategy for storing chat messages and user data using a database solution that supports high availability.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Security</strong>:
          <ul style={styles.list}>
            <li>Ensure secure communication channels and implement authentication mechanisms to protect user data and privacy.</li>
          </ul>
        </li>
      </ol>

      <p style={styles.paragraph}>
        By leveraging Docker and Kubernetes, the chat application will be capable of scaling dynamically, ensuring consistent performance even with high traffic loads. This architecture enables efficient resource utilization and robust deployment strategies.
      </p>
    </div>
  );
};

export default Prob3;
