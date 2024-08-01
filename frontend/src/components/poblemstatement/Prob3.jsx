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
    <div style={styles.container} className="overflow-y-scroll h-full scrollbar-hide">
      <h1 className="text-6xl" style={styles.heading}>
        Real-Time Chat App with React, WebSocket, Node.js, Docker, and Kubernetes
      </h1>

      <h2 className="text-2xl" style={styles.subheading}>
        Problem Statement
      </h2>
      <p style={styles.paragraph}>
        Develop a robust real-time chat application using React.js for the front end and WebSocket with Node.js for the back end. 
        This application must efficiently handle real-time message delivery and scale to accommodate a growing number of users. 
        Utilize Docker and Kubernetes to ensure the application's scalability and reliability in production environments.
      </p>

      <h3 style={styles.subheading}>Objective</h3>
      <p style={styles.paragraph}>
        Create a full-stack chat application that supports real-time communication, efficiently handles concurrent users, 
        and scales seamlessly across multiple nodes using containerization and orchestration technologies.
      </p>

      <h3 style={styles.subheading}>Key Challenges</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>Plan Application Architecture</strong>:
          <ul style={styles.list}>
            <li>Design the system to handle at least 5,000 concurrent users.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Implement WebSocket Communication</strong>:
          <ul style={styles.list}>
            <li>Ensure the WebSocket server can manage at least 1,000 concurrent connections.</li>
            <li>Achieve a message delivery time of less than 50 ms.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Develop Chat Features</strong>:
          <ul style={styles.list}>
            <li>Implement chat features with 95% unit test coverage.</li>
            <li>Ensure a message delivery success rate of 99.9%.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Optimize for Performance and Scalability</strong>:
          <ul style={styles.list}>
            <li>Optimize the system to handle at least 500 messages per second.</li>
            <li>Enable horizontal scaling to support up to 10,000 concurrent users.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Test and Secure the Application</strong>:
          <ul style={styles.list}>
            <li>Write tests covering 90% of chat features.</li>
            <li>Ensure end-to-end encryption for all messages.</li>
            <li>Conduct load testing with at least 10,000 concurrent users.</li>
          </ul>
        </li>
      </ol>

      <p style={styles.paragraph}>
        By leveraging Docker and Kubernetes, the chat application will dynamically scale, ensuring consistent performance even under high traffic loads. 
        This architecture enables efficient resource utilization and robust deployment strategies.
      </p>
    </div>
  );
};

export default Prob3;
