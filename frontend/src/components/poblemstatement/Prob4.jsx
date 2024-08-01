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
    <div style={styles.container} className='overflow-y-scroll h-full scrollbar-hide'>
      <h1 className="text-6xl" style={styles.heading}>
        Implementing SSR with Next.js and Node.js
      </h1>

      <h2 className="text-2xl" style={styles.subheading}>
        Problem Statement
      </h2>
      <p style={styles.paragraph}>
        Implement server-side rendering (SSR) for a React.js application using Next.js and Node.js. Deploy the application using Docker for containerization and ensure scalability and reliability. Additionally, set up monitoring with Prometheus and Grafana to observe the application’s performance and metrics.
      </p>

      <h3 style={styles.subheading}>Objective</h3>
      <p style={styles.paragraph}>
        Create a scalable, production-ready React.js application with server-side rendering using Next.js. Utilize Docker for deployment and set up comprehensive monitoring with Prometheus and Grafana to ensure optimal performance and observability.
      </p>

      <h3 style={styles.subheading}>Key Challenges</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>Server-Side Rendering (SSR)</strong>:
          <ul style={styles.list}>
            <li>Set up SSR to improve SEO and initial load performance using Next.js.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Integration with Node.js</strong>:
          <ul style={styles.list}>
            <li>Utilize Node.js to handle server-side logic and API integrations efficiently.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Docker Deployment</strong>:
          <ul style={styles.list}>
            <li>Containerize the application using Docker to ensure consistency across environments and streamline the deployment process.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Monitoring and Observability</strong>:
          <ul style={styles.list}>
            <li>Set up Prometheus to collect metrics and Grafana to visualize and monitor application performance.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Scalability</strong>:
          <ul style={styles.list}>
            <li>Ensure the application can scale horizontally to handle increased loads efficiently.</li>
          </ul>
        </li>
      </ol>


      <p style={styles.paragraph}>
        By implementing SSR with Next.js and deploying with Docker, the application will benefit from improved SEO and performance. The addition of Prometheus and Grafana will provide crucial insights into the application's health, enabling proactive management and optimization.
      </p>
    </div>
  );
};

export default Prob4;
