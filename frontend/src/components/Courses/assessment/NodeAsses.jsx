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

const NodeAsses = () => {
  return (
    <div style={styles.container} className="overflow-y-scroll h-full scrollbar-hide">
      <h1 className='text-6xl' style={styles.heading}>Assessment for Node.js</h1>

      <h2 className='text-2xl' style={styles.subheading}>Mini Assessment: Node.js Fundamentals</h2>

      <h3 style={styles.subheading}>Problem Statement</h3>
      <p style={styles.paragraph}>
        You are tasked with building a basic “To-Do List” application using Node.js. The application should allow users to add tasks, mark them as completed, and remove them. Additionally, the application should display the total number of tasks and highlight completed tasks.
      </p>

      <h3 style={styles.subheading}>Assessment Criteria</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>JavaScript Basics</strong>:
          <ul style={styles.list}>
            <li>Ensure candidates have a strong foundation in JavaScript concepts:
              <ul style={styles.list}>
                <li>Data types (string, number, boolean, etc.)</li>
                <li>Functions (declaration, arrow functions)</li>
                <li>Loops (for, while)</li>
                <li>Conditionals (if, else)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Node.js Basics</strong>:
          <ul style={styles.list}>
            <li>Candidates should be familiar with Node.js fundamentals:
              <ul style={styles.list}>
                <li>Modules (CommonJS syntax)</li>
                <li>Event-driven programming (using the <span style={styles.code}>events</span> module)</li>
                <li>Callbacks (understanding asynchronous execution)</li>
                <li>Error handling (try-catch blocks)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>HTTP and Web Servers</strong>:
          <ul style={styles.list}>
            <li>Understanding HTTP, web servers, and their protocols is crucial for developing web applications using Node.js.</li>
            <li>Candidates should know how to create a basic HTTP server using the built-in <span style={styles.code}>http</span> module.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Express.js</strong>:
          <ul style={styles.list}>
            <li>Express.js is a popular web application framework for Node.js. Ask questions related to:
              <ul style={styles.list}>
                <li>Routing (defining routes and handling requests)</li>
                <li>Middleware (using built-in and custom middleware)</li>
                <li>Templating engines (e.g., EJS, Handlebars)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Asynchronous Programming</strong>:
          <ul style={styles.list}>
            <li>Node.js excels at asynchronous programming. Assess candidates’ knowledge of:
              <ul style={styles.list}>
                <li>Promises</li>
                <li>Callbacks</li>
                <li><span style={styles.code}>async</span> and <span style={styles.code}>await</span></li>
              </ul>
            </li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>NPM and Package Management</strong>:
          <ul style={styles.list}>
            <li>Candidates should understand how to:
              <ul style={styles.list}>
                <li>Install packages using NPM</li>
                <li>Manage dependencies (including <span style={styles.code}>package.json</span>)</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

      <h3 className='text-2xl' style={styles.subheading}>Solution Approach</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>Set up a new Node.js project (you can use <span style={styles.code}>npm init</span>).</li>
        <li style={styles.listItem}>Create an HTTP server using the <span style={styles.code}>http</span> module.</li>
        <li style={styles.listItem}>Implement the following routes:
          <ul style={styles.list}>
            <li><span style={styles.code}>GET /</span>: Display the list of tasks.</li>
            <li><span style={styles.code}>POST /add</span>: Add a new task.</li>
            <li><span style={styles.code}>POST /complete/:taskId</span>: Mark a task as completed.</li>
            <li><span style={styles.code}>POST /remove/:taskId</span>: Remove a task.</li>
          </ul>
        </li>
        <li style={styles.listItem}>Use Express.js (optional but recommended):
          <ul style={styles.list}>
            <li>Set up an Express app.</li>
            <li>Define routes and middleware.</li>
            <li>Use a templating engine (e.g., EJS) to render views.</li>
          </ul>
        </li>
        <li style={styles.listItem}>Handle asynchronous operations:
          <ul style={styles.list}>
            <li>Use Promises or <span style={styles.code}>async/await</span> for database interactions (simulated or real).</li>
          </ul>
        </li>
        <li style={styles.listItem}>Style your application (CSS or any preferred styling method).</li>
      </ol>

      <p style={styles.paragraph}>
        Remember to encourage clean code, modular design, and error handling. Candidates should demonstrate their ability to build a functional application while adhering to best practices.
      </p>

      <p style={styles.paragraph}>
       <Link className='text-2xl text-emerald-600' to='/home/Labs/VirtualCode' >Code Here</Link>
      </p>
    </div>
  );
};

export default NodeAsses;
