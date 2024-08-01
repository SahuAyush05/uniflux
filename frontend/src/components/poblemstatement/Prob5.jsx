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

const Prob5 = () => {
  return (
    <div style={styles.container}>
      <h1 className="text-6xl" style={styles.heading}>
        Secure Authentication System with Role-Based Access Control
      </h1>

      <h2 className="text-2xl" style={styles.subheading}>
        Problem Statement
      </h2>
      <p style={styles.paragraph}>
        Build a secure authentication system using React.js for the front end and Node.js with JWT (JSON Web Tokens) for the back end. Implement role-based access control (RBAC) to manage user permissions and set up a continuous deployment pipeline to automate the deployment process.
      </p>

      <h3 style={styles.subheading}>Objective</h3>
      <p style={styles.paragraph}>
        Develop a robust authentication mechanism that supports different user roles and permissions. Automate the deployment process to ensure the application can be updated efficiently and securely.
      </p>

      <h3 style={styles.subheading}>Key Challenges</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>Authentication and Authorization</strong>:
          <ul style={styles.list}>
            <li>Implement secure user authentication using JWT to manage sessions and permissions.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Role-Based Access Control (RBAC)</strong>:
          <ul style={styles.list}>
            <li>Design a role-based system to control access to different parts of the application based on user roles.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Front-End Integration</strong>:
          <ul style={styles.list}>
            <li>Create a user-friendly interface in React.js for login, registration, and role management.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Continuous Deployment</strong>:
          <ul style={styles.list}>
            <li>Set up a CI/CD pipeline to automate the testing, building, and deployment of the application.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Security</strong>:
          <ul style={styles.list}>
            <li>Ensure data is securely transmitted and stored, protecting against common security threats such as XSS and CSRF.</li>
          </ul>
        </li>
      </ol>

      <p style={styles.paragraph}>
        This solution will ensure a secure and scalable authentication system, leveraging the power of JWT for secure token-based authentication and role-based access control to manage user permissions effectively.
      </p>
    </div>
  );
};

export default Prob5;
