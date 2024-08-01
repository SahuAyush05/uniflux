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

const Prob2 = () => {
  return (
    <div style={styles.container}>
      <h1 className="text-6xl" style={styles.heading}>CI/CD Pipeline Setup with GitHub Actions</h1>

      <h2 className="text-2xl" style={styles.subheading}>Problem Statement</h2>
      <p style={styles.paragraph}>
        Setting up a continuous integration and continuous deployment (CI/CD) pipeline is crucial for modern software development. The objective is to establish a CI/CD pipeline using GitHub Actions for a React and Node.js application. This includes automated testing, building, and deployment to ensure a smooth and reliable development process.
      </p>

      <h3 style={styles.subheading}>Objective</h3>
      <p style={styles.paragraph}>
        Implement a CI/CD pipeline that automates the workflow for a React and Node.js application, leveraging GitHub Actions. The pipeline should automatically run tests, build the application, and deploy it to a specified environment upon changes to the codebase.
      </p>

      <h3 style={styles.subheading}>Key Challenges</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>Workflow Automation</strong>:
          <ul style={styles.list}>
            <li>Design a GitHub Actions workflow that triggers on code changes (e.g., pull requests, pushes to the main branch).</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Automated Testing</strong>:
          <ul style={styles.list}>
            <li>Integrate automated testing for both React and Node.js components to ensure code quality and functionality.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Build Process</strong>:
          <ul style={styles.list}>
            <li>Set up a reliable build process to compile React and Node.js code, readying it for deployment.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Deployment Strategy</strong>:
          <ul style={styles.list}>
            <li>Implement a strategy to deploy the application to an environment (e.g., staging, production) efficiently and securely.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Error Handling and Notifications</strong>:
          <ul style={styles.list}>
            <li>Incorporate error handling and notification mechanisms to alert developers of any issues during the CI/CD process.</li>
          </ul>
        </li>
      </ol>


      <p style={styles.paragraph}>
        This setup will streamline the development process, allowing for quicker feedback, reduced manual errors, and consistent deployment practices. The end goal is to enhance productivity and code quality across the development lifecycle.
      </p>
    </div>
  );
};

export default Prob2;
