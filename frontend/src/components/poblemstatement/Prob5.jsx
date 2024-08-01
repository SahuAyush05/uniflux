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
    <div style={styles.container} className="overflow-y-scroll h-full scrollbar-hide">
      <h1 className="text-6xl" style={styles.heading}>
        Migrating a Monolithic Application to Microservices Architecture
      </h1>

      <h2 className="text-2xl" style={styles.subheading}>
        Problem Statement
      </h2>
      <p style={styles.paragraph}>
        Transition an existing monolithic application to a microservices architecture to improve scalability, maintainability, and performance. This involves breaking down the application into discrete services with well-defined boundaries and ensuring they can operate independently and efficiently.
      </p>

      <h3 style={styles.subheading}>Objective</h3>
      <p style={styles.paragraph}>
        Develop a microservices-based architecture that enhances the flexibility and scalability of the application, allowing for independent development, deployment, and scaling of services. The new architecture should facilitate easier maintenance and faster delivery of new features.
      </p>

      <h3 style={styles.subheading}>Key Challenges</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>Analyze the Existing Monolithic Application</strong>:
          <ul style={styles.list}>
            <li>Identify and document at least 10 core functionalities and dependencies within the current monolithic application.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Design Microservices Architecture</strong>:
          <ul style={styles.list}>
            <li>Define at least 5 microservices with clear boundaries and responsibilities.</li>
            <li>Ensure each service can handle at least 100 requests per second.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Develop Microservices</strong>:
          <ul style={styles.list}>
            <li>Implement each microservice with 90% unit test coverage to ensure reliability.</li>
            <li>Ensure each service has a response time of less than 200 ms to meet performance requirements.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Setup Infrastructure for Microservices</strong>:
          <ul style={styles.list}>
            <li>Deploy services on a Kubernetes cluster with at least 3 nodes to provide scalability and resilience.</li>
            <li>Set up CI/CD pipelines with automated tests for each microservice to streamline development and deployment processes.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Test and Deploy Microservices</strong>:
          <ul style={styles.list}>
            <li>Achieve 99.9% uptime during testing to ensure high availability.</li>
            <li>Conduct load testing with at least 1,000 concurrent users to validate the performance and scalability of the new architecture.</li>
          </ul>
        </li>
      </ol>

      <p style={styles.paragraph}>
        By migrating to a microservices architecture, the application will gain improved scalability and flexibility, enabling teams to work independently on different services. This transition will also enhance the application's ability to handle increased loads and deliver features more rapidly.
      </p>
    </div>
  );
};

export default Prob5;
