import React from "react";

function ArticleCard({ subtopic, onNext, onBack, onTest }) {
  // Sample article content based on subtopic
  const articles = {
    "What React is and why it's so popular": {
      content: `React is a JavaScript library that simplifies the development of visual interfaces. Developed at Facebook and released to the world in 2013, it powers some of the most widely used apps, including Facebook and Instagram.

React's primary goal is to make it easy to reason about an interface and its state at any point in time by dividing the UI into a collection of components.

While you might face initial difficulties learning React, once it 'clicks', it will be one of the best experiences you'll ever have. React makes many things easier, and its ecosystem is filled with great libraries and tools.

React has a very small API, and to get started, you need to understand four main concepts: Components, JSX, State, and Props. We'll explore all of these in this book and leave the more advanced concepts for other tutorials.`,
      images: [
        "https://reactjs.org/logo-og.png"
      ],
    },
    "How to install React": {
      content: `Installing React is straightforward. You can use the Create React App tool, which sets up everything you need. Here's how to do it:

1. Install Node.js and npm: React requires Node.js and npm. Download and install them from [nodejs.org](https://nodejs.org/).
\n\n2. Install Create React App: Open your terminal and run the command \`npx create-react-app my-app\`.
\n\n3. Navigate to your app folder: \`cd my-app\`
\n\n4. Start the development server: \`npm start\`

Your React application will now be running on \`http://localhost:3000\`. You can start building your React app!`,
      images: [
        "https://miro.medium.com/v2/resize:fit:680/1*tAKH8vdwE7xSlSk5LInMGw.png",
        "https://flaviocopes.com/images/react-installation/create-react-app-running.png",
        "https://flaviocopes.com/images/react-installation/create-react-app-finished.png"
      ],
    },
    "React Components": {
      content: `Components are the building blocks of a React application. They let you split the UI into independent, reusable pieces and think about each piece in isolation.

Here's a simple component example:

jsx
\n\n
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Components can be defined as functions or classes. The above example is a functional component. Components can also manage their own state.`,
      images: [
        "https://dotnettrickscloud.blob.core.windows.net/img/react/3720230724010903.webp"
      ],
    },
    "React State": {
      content: `State is a built-in object used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

Here's how you use state in a functional component:

\n\n
jsx
\n\n
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


In the example above, \`useState\` is a Hook that lets you add React state to functional components.`,
      images: [
        "https://webkul.com/blog/wp-content/uploads/2023/04/state-life-cycle.jpg"
      ],
    },
    "React Props": {
      content: `Props (short for properties) are read-only attributes used to pass data from one component to another, usually from a parent to a child component.

Here's an example of using props:

\n\n
jsx
\n\n
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Sara" />;
}

In the example above, the \`App\` component passes the \`name\` prop to the \`Welcome\` component.`,
      images: [
        "https://media.licdn.com/dms/image/D4D12AQGaaK42hF2obA/article-cover_image-shrink_600_2000/0/1680891261039?e=2147483647&v=beta&t=pB1RmDO7pr3R3VbsCmeXKNx4ksku4RTpapg1p6ZesLQ",

      ],
    },
    "Handling user events in React": {
      content: `Handling events with React elements is similar to handling events on DOM elements, with some syntax differences:

1. React events are named using camelCase, rather than lowercase.
2. With JSX, you pass a function as the event handler, rather than a string.

Here's an example:
\n\n
jsx
\n\n
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

In the above example, \`handleClick\` is the event handler function that gets called when the link is clicked.`,
      images: [
        "https://static.javatpoint.com/tutorial/reactjs/images/react-events.png",
        "https://miro.medium.com/v2/resize:fit:542/1*LFM3qo55AbDsmPPLhX9rRA.png"
      ],
    },
    "Lifecycle events in a React component": {
      content: `React components have several lifecycle methods that you can override to run code at particular times in the process.

Here are the most commonly used lifecycle methods:

1. componentDidMount(): Invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here.
\n\n2. componentDidUpdate(prevProps, prevState): Invoked immediately after updating occurs. This method is not called for the initial render.
\n\n3. componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed.

Here's an example of using lifecycle methods in a class component:

\n\n
jsx
\n\n
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
`,
      images: [
        "https://miro.medium.com/v2/resize:fit:1400/1*fdGC22mqWBAQ7jOFPPAvIg.png",
        "https://dotnettrickscloud.blob.core.windows.net/article/react/3720230920232432.webp"
      ],
    },
  };

  // Check if the subtopic exists in articles
  if (!articles[subtopic]) {
    return <p>Subtopic not found.</p>;
  }

  // Extract the content and images from the articles JSON
  const { content, images } = articles[subtopic];

  // Split the content into paragraphs
  const paragraphs = content.split("\n\n");

  // Function to insert images between paragraphs
  const renderContentWithImages = (paragraphs, images) => {
    const contentElements = [];
    let imageIndex = 0;

    paragraphs.forEach((paragraph, index) => {
      contentElements.push(<p key={index} className="mb-4">{paragraph}</p>);
      if (images[imageIndex]) {
        contentElements.push(
          <img
            key={`image-${index}`}
            src={images[imageIndex]}
            alt="Related visual content"
            className="my-4 w-1/2 h-auto mx-auto"
          />
        );
        imageIndex++;
      }
    });

    // Append any remaining images at the end if not used
    while (imageIndex < images.length) {
      contentElements.push(
        <img
          key={`image-${paragraphs.length + imageIndex}`}
          src={images[imageIndex]}
          alt="Related visual content"
          className="my-4 w-full h-auto"
        />
      );
      imageIndex++;
    }

    return contentElements;
  };
  const articleKeys = Object.keys(articles);
  const isLastSubtopic = subtopic === articleKeys[articleKeys.length - 1];

  return (
    <div className="flex flex-col h-full overflow-y-scroll scrollbar-hide justify-between ">
      <div className="flex-grow justify-self-center p-4">
        <h1 className="text-4xl text-secondary font-bold mb-4">{subtopic}</h1>
        <div className="text-white">{renderContentWithImages(paragraphs, images)}</div>
      </div>
      <div className="mt-4 flex justify-between p-4">
        <button
          className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded mr-2"
          onClick={onBack}
        >
          Back
        </button>
        {isLastSubtopic ? <>
          <button
            className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded ml-2"
            onClick={onTest}
          >
            Ready to test your Skill?
          </button>
          </>
          :
          <>
          <button
          className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded"
          onClick={onNext}
        >
          Next
        </button>
          </>}
      </div>
    </div>
  );
}

export default ArticleCard;
