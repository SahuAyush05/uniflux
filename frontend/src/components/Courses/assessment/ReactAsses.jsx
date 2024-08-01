import React from 'react';
import {Link} from 'react-router-dom';
// Inline styles for simplicity
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor:'#ededed',
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

const ReactAsses = () => {
  return (
    <div style={styles.container} className="overflow-y-scroll h-full scrollbar-hide">
      <h1 className='text-6xl' style={styles.heading}>Assessment for React</h1>

      <h2 className='text-2xl' style={styles.subheading}>Mini Assessment: React Fundamentals</h2>

      <h3 style={styles.subheading}>Problem Statement</h3>
      <p style={styles.paragraph}>
        You are tasked with building a simple “To-Do List” application using React. The application should allow users to add tasks, mark them as completed, and remove them. Additionally, the application should display the total number of tasks and highlight completed tasks.
      </p>

      <h3 style={styles.subheading}>Assessment Criteria</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>Component Structure</strong>:
          <ul style={styles.list}>
            <li>Create the following components:
              <ul style={styles.list}>
                <li><strong>TaskList</strong>: Displays the list of tasks.</li>
                <li><strong>TaskItem</strong>: Represents an individual task.</li>
                <li><strong>TaskForm</strong>: Allows users to add new tasks.</li>
              </ul>
            </li>
            <li>Properly organize these components within your project.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>State Management</strong>:
          <ul style={styles.list}>
            <li>Use React state to manage the list of tasks.</li>
            <li>When a task is added or marked as completed, update the state accordingly.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Handling User Events</strong>:
          <ul style={styles.list}>
            <li>Implement the following user interactions:
              <ul style={styles.list}>
                <li>Adding a new task.</li>
                <li>Marking a task as completed.</li>
                <li>Removing a task.</li>
              </ul>
            </li>
            <li>Use appropriate event handlers (e.g., <span style={styles.code}>onClick</span>, <span style={styles.code}>onChange</span>).</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Lifecycle Events</strong>:
          <ul style={styles.list}>
            <li>Use lifecycle events (if necessary) to handle any side effects (e.g., fetching initial data, saving tasks to local storage).</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Styling</strong>:
          <ul style={styles.list}>
            <li>Apply basic styling to make the application visually appealing.</li>
            <li>You can use inline styles, CSS modules, or a CSS-in-JS library.</li>
          </ul>
        </li>
      </ol>

      <h3 className='text-2xl' style={styles.subheading}>Solution Approach</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>Set up a new React project using <span style={styles.code}>create-react-app</span> or any other preferred method.</li>
        <li style={styles.listItem}>Create the necessary components (<span style={styles.code}>TaskList</span>, <span style={styles.code}>TaskItem</span>, <span style={styles.code}>TaskForm</span>) and organize them in your project structure.</li>
        <li style={styles.listItem}>In the <span style={styles.code}>TaskList</span> component:
          <ul style={styles.list}>
            <li>Maintain an array of tasks in the component state.</li>
            <li>Render each task using the <span style={styles.code}>TaskItem</span> component.</li>
            <li>Display the total number of tasks.</li>
          </ul>
        </li>
        <li style={styles.listItem}>In the <span style={styles.code}>TaskItem</span> component:
          <ul style={styles.list}>
            <li>Display the task text.</li>
            <li>Provide buttons/icons for marking a task as completed and removing it.</li>
          </ul>
        </li>
        <li style={styles.listItem}>Implement event handlers:
          <ul style={styles.list}>
            <li>When the user adds a new task, update the state with the new task.</li>
            <li>When a task is marked as completed, update its status in the state.</li>
            <li>When a task is removed, remove it from the state.</li>
          </ul>
        </li>
        <li style={styles.listItem}>Use lifecycle events (if needed):
          <ul style={styles.list}>
            <li>For example, you can use <span style={styles.code}>componentDidMount</span> to fetch initial data (if tasks are loaded from an API) or <span style={styles.code}>componentDidUpdate</span> to save tasks to local storage.</li>
          </ul>
        </li>
        <li style={styles.listItem}>Style your application:
          <ul style={styles.list}>
            <li>Apply basic CSS or use a styling library like Tailwind CSS or Styled Components.</li>
          </ul>
        </li>
      </ol>

      <p style={styles.paragraph}>
      <Link className='text-2xl text-emerald-600' to='/home/Labs/VirtualCode' >Code Here</Link>
        <div>Remember to keep your code clean, follow best practices, and consider error handling (e.g., what happens if local storage is not available). Test your application thoroughly.</div>
      </p>
    </div>
  );
};

export default ReactAsses;
