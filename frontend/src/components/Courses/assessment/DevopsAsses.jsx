import React from 'react';
import {Link} from 'react-router-dom';
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

const DevopsAsses = () => {
  return (
    <div style={styles.container} className="overflow-y-scroll h-full scrollbar-hide">
      <h1 className='text-6xl' style={styles.heading}>Assessment for DevOps</h1>

      <h2 className='text-xl' style={styles.subheading}>DevOps Engineer (Basic) Test</h2>

      <h3 style={styles.subheading}>Problem Statement Example</h3>
      <p style={styles.paragraph}>
        This assessment evaluates fundamental DevOps skills, including Linux system administration, shell scripting, configuration management (e.g., Ansible), version control (Git), containerization (e.g., Docker), infrastructure as code (e.g., Terraform), cloud computing (e.g., AWS, Azure), continuous integration, and monitoring.
      </p>

      <h3 style={styles.subheading}>Assessment Criteria</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>Linux System Administration</strong>:
          <ul style={styles.list}>
            <li>Set up a basic Linux server.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Shell Scripting</strong>:
          <ul style={styles.list}>
            <li>Write a shell script to automate a deployment task (e.g., pulling code from Git, installing dependencies).</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Configuration Management</strong>:
          <ul style={styles.list}>
            <li>Use Ansible to configure a web server (e.g., install Nginx, set up virtual hosts).</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Version Control</strong>:
          <ul style={styles.list}>
            <li>Demonstrate Git usage (commit, push, pull).</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Containerization</strong>:
          <ul style={styles.list}>
            <li>Create a Dockerfile for a simple application.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Infrastructure as Code</strong>:
          <ul style={styles.list}>
            <li>Deploy infrastructure using Terraform.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Monitoring</strong>:
          <ul style={styles.list}>
            <li>Set up basic monitoring (e.g., CPU usage, memory) using a tool like Prometheus.</li>
          </ul>
        </li>
      </ol>

      <h3 className='text-2xl' style={styles.subheading}>Solution Approach</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>Set up a Linux server (use a virtual machine or cloud provider like AWS or Azure).</li>
        <li style={styles.listItem}>Write a shell script to automate deployment tasks:
          <ul style={styles.list}>
            <li>Include steps like pulling code from Git and installing necessary dependencies.</li>
          </ul>
        </li>
        <li style={styles.listItem}>Use Ansible to manage the web server configuration:
          <ul style={styles.list}>
            <li>Create an Ansible playbook to install and configure Nginx, including setting up virtual hosts.</li>
          </ul>
        </li>
        <li style={styles.listItem}>Demonstrate Git operations:
          <ul style={styles.list}>
            <li>Perform Git commit, push, and pull operations.</li>
          </ul>
        </li>
        <li style={styles.listItem}>Create a Dockerfile:
          <ul style={styles.list}>
            <li>Include instructions to build an image for a simple application.</li>
          </ul>
        </li>
        <li style={styles.listItem}>Use Terraform to deploy infrastructure:
          <ul style={styles.list}>
            <li>Write Terraform configuration files to manage infrastructure resources.</li>
          </ul>
        </li>
        <li style={styles.listItem}>Set up monitoring with Prometheus:
          <ul style={styles.list}>
            <li>Configure Prometheus to monitor CPU usage, memory, and other metrics.</li>
          </ul>
        </li>
      </ol>

      <p style={styles.paragraph}>
        Remember to demonstrate your ability to manage various aspects of DevOps operations, focusing on best practices and clean code. You should also highlight your analytical skills and critical thinking throughout the assessment.
      </p>

      <p style={styles.paragraph}>
        For more details on DevOps assessments, visit: <a href="https://testlify.com/test-library/devops-engineerbasic/" target="_blank" rel="noopener noreferrer">DevOps Engineer (Basic) Test</a>
        <div><Link className='text-2xl text-emerald-600' to='/home/Labs/VirtualCode' >Code Here</Link></div>
      </p>
    </div>
  );
};

export default DevopsAsses;
