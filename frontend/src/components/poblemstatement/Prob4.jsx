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

const Prob4 = () => {
  return (
    <div style={styles.container} className="overflow-y-scroll h-full scrollbar-hide">
      <h1 className="text-6xl" style={styles.heading}>
        Implementing a Secure Authentication System for a Web Application
      </h1>

      <h2 className="text-2xl" style={styles.subheading}>
        Problem Statement
      </h2>
      <p style={styles.paragraph}>
        Design and implement a secure authentication system for a web application that supports multiple user roles and ensures high performance and security. The system must efficiently handle concurrent sessions and provide robust protection against security threats.
      </p>

      <h3 style={styles.subheading}>Objective</h3>
      <p style={styles.paragraph}>
        Develop a scalable and secure authentication system that offers fast and reliable login experiences for users while maintaining rigorous security standards to protect user data and privacy.
      </p>

      <h3 style={styles.subheading}>Key Challenges</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>Choose an Authentication Strategy</strong>:
          <ul style={styles.list}>
            <li>Ensure the chosen strategy supports at least 3 different user roles.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Design Authentication Flow</strong>:
          <ul style={styles.list}>
            <li>Plan flows to handle at least 1,000 concurrent sessions effectively.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Develop Authentication Backend</strong>:
          <ul style={styles.list}>
            <li>Implement API endpoints with 95% unit test coverage.</li>
            <li>Achieve a login response time of less than 150 ms.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Secure the Application</strong>:
          <ul style={styles.list}>
            <li>Implement HTTPS with an A+ rating on SSL Labs.</li>
            <li>Prevent more than 99% of brute-force attacks through rate limiting.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Integrate Frontend with Authentication System</strong>:
          <ul style={styles.list}>
            <li>Ensure the frontend handles authentication state changes within 200 ms.</li>
            <li>Achieve a user authentication success rate of 99.5%.</li>
          </ul>
        </li>
      </ol>

      <p style={styles.paragraph}>
        By implementing a comprehensive authentication system, the web application will provide users with secure and efficient access while safeguarding sensitive information. The integration of robust security measures and performance optimizations ensures that the application meets modern standards for reliability and user experience.
      </p>
    </div>
  );
};

export default Prob4;
