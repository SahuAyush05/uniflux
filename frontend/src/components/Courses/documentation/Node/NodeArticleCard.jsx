import React from 'react';

const NodeArticleCard = ({ subtopic, onNext, onBack, onTest }) => {
  const articles = {
    "What is NodeJS and How to install NodeJS": {
      content: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, outside of a browser. Node.js is known for its non-blocking, event-driven architecture, which makes it suitable for building scalable and efficient web applications.\n\n

To install Node.js, follow these steps:\n\n

1. Download the Node.js installer from [nodejs.org](https://nodejs.org/). Choose the LTS version for stability.\n\n
2. Run the installer and follow the instructions to complete the installation.\n\n
3. Verify the installation by opening a terminal or command prompt and typing \`node -v\` to check the Node.js version and \`npm -v\` to check the npm version.\n\n

Node.js and npm (Node Package Manager) should now be installed on your system.`,
      images: [
        "https://nodejs.org/static/images/logo.svg"
      ],
    },
    "Global Variables and Modules in NodeJS": {
      content: `Node.js provides several global variables that are available in all modules. These include \`__dirname\` (the directory name of the current module), \`__filename\` (the file name of the current module), and \`require\` (to import modules).
      \n\n

Modules in Node.js are a way to organize and encapsulate code. You can create your own modules and use built-in modules. To create a module, simply write your code in a separate file and export the necessary functions or objects using \`module.exports\`. You can then import this module in other files using \`require\`.
\n\n
Example:
\n\n
js
\n\n
// math.js
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
\n\n
\n\n
// app.js
const math = require('./math');
console.log(math.add(2, 3)); // Outputs: 5

`,
      images: [
        "https://d2o2utebsixu4k.cloudfront.net/media/images/blogs/share_image/afd3daba-a7e9-4b9e-b6f4-0e67aaaef303.png",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgl6AYvKAsdRbE8VuagI7_LFiWslCbv_ZcUXV3HaZhxmv_-BuNI_luBdyN_InBiDC_NLFv7sxtblEuGCvAKs4YyysQ4UQu4IL4eIbG37Fx7B-Ziu1M1rrLD8AzRPJonvi2RnBtRlZ7cMc9Q/s1600/global1.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*N6xI4cVxlCn2rVViB4AbPw.jpeg"
      ],
    },
    "Types Of Modules in Node and OS, FS , PATH Modules": {
      content: `Node.js has three types of modules: core modules, local modules, and third-party modules.
      \n\n

1. Core Modules: These are built into Node.js and can be used without any additional installation. Examples include \`fs\` (file system), \`http\` (HTTP server), and \`path\` (file and directory paths).\n\n

2. Local Modules: These are custom modules created by the user and stored locally in the project directory.\n\n

3. Third-Party Modules: These are modules created by the community and published on npm. Examples include Express, Lodash, and Moment.\n\n

The \`os\`, \`fs\`, and \`path\` modules are commonly used core modules:
\n\n
\n\n
- \`os\`: Provides operating system-related utility methods and properties.
- \`fs\`: Provides an API for interacting with the file system.
- \`path\`: Provides utilities for working with file and directory paths.

Example:
\n\n
js
\n\n
const os = require('os');
const fs = require('fs');
const path = require('path');
\n\n
\n\n
// Get OS information
console.log(os.platform());
console.log(os.arch());
\n\n
// Read and write a file
const filePath = path.join(__dirname, 'example.txt');
fs.writeFileSync(filePath, 'Hello, Node.js!');
const data = fs.readFileSync(filePath, 'utf-8');
console.log(data); // Outputs: Hello, Node.js!

`,
      images: [
        "https://intellipaat.com/blog/wp-content/uploads/2023/01/Types-of-Modules-in-NodeJS.png",

      ],
    },
    "Event-Driven Programming": {
      content: `Node.js is designed to be event-driven. This means that Node.js applications are built around an event loop that listens for and responds to events. This is particularly useful for building I/O-intensive applications, such as web servers, where events like incoming requests and file operations can be handled asynchronously.

The \`events\` module in Node.js allows you to create and handle custom events. You can use the \`EventEmitter\` class to create an event emitter, which can then emit and listen for events.
\n\n
\n\n
Example:\n\n
\n\n
// get the reference of EventEmitter class of events module\n\n
var events = require('events');
\n\n
//create an object of EventEmitter class by using above reference\n\n
var em = new events.EventEmitter();
\n\n
//Subscribe for FirstEvent\n\n
em.on('FirstEvent', function (data) {\n\n
    console.log('First subscriber: ' + data);\n\n
});
\n\n
// Raising FirstEvent\n\n
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');
`,
      images: [
        "https://miro.medium.com/v2/resize:fit:600/1*t93hnSa9WyaxPZeMuqXOMw.jpeg"
      ],
    },
    "Components Of Request-Response": {
      content: `In Node.js, the request-response cycle is the fundamental concept behind handling HTTP requests and responses. When a client makes an HTTP request, the server processes the request and sends back an appropriate response. This cycle involves several components:
\n\n
\n\n
1. Request Object: Represents the HTTP request and contains properties such as the request URL, headers, and method.\n\n
2. Response Object: Represents the HTTP response that the server sends back to the client. It contains methods to send data, set headers, and control the response status.\n\n
3. Routing: Determines how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.).\n\n
\n\n
\n\n
Example:
\n\n
js
\n\n
const http = require('http');
\n\n
const server = http.createServer((req, res) => {\n\n
  if (req.url === '/' && req.method === 'GET') {\n\n
    res.writeHead(200, { 'Content-Type': 'text/plain' });\n\n
    res.end('Hello, world!');\n\n
  } else {\n\n
    res.writeHead(404, { 'Content-Type': 'text/plain' });\n\n
    res.end('Not Found');\n\n
  }\n\n
});
\n\n
\n\n
server.listen(3000, () => {\n\n
  console.log('Server is running on http://localhost:3000');\n\n
});\n\n

`,
      images: [
        "https://iq.opengenus.org/content/images/2019/08/Add-a-subheading--2-.png"
      ],
    },
    "What are HTTP Methods and Status codes": {
      content: `HTTP methods are used to specify the desired action to be performed on a given resource. Common HTTP methods include:

1. GET: Retrieve data from the server.\n\n
2. POST: Send data to the server.\n\n
3. PUT: Update data on the server.\n\n
4. DELETE: Remove data from the server.\n\n
\n\n
\n\n
HTTP status codes are issued by a server in response to a client's request. They indicate the outcome of the request. Common HTTP status codes include:
\n\n
\n\n
1. 200 OK: The request was successful.\n\n
2. 201 Created: The request was successful, and a new resource was created.\n\n
3. 400 Bad Request: The server could not understand the request due to invalid syntax.\n\n
4. 404 Not Found: The server could not find the requested resource.\n\n
5. 500 Internal Server Error: The server encountered an error and could not complete the request.\n\n
\n\n
\n\n
Example:
\n\n
\n\n
js
\n\n
\n\n
const http = require('http');
\n\n
const server = http.createServer((req, res) => {\n\n
  if (req.method === 'GET' && req.url === '/') {\n\n
    res.writeHead(200, { 'Content-Type': 'text/plain' });\n\n
    res.end('Welcome to the homepage!');\n\n
  } else {\n\n
    res.writeHead(404, { 'Content-Type': 'text/plain' });\n\n
    res.end('Page not found');\n\n
  }\n\n
});\n\n
\n\n
\n\n
server.listen(3000, () => {\n\n
  console.log('Server is running on http://localhost:3000');\n\n
  \n\n
});\n\n
`,
      images: [
        "https://blog.postman.com/wp-content/uploads/2023/06/What-are-HTTP-methods-V1@2x.jpg",
      ],
    },
    "Let's Create a Server and Serve Something Interesting": {
      content: `Creating a server in Node.js is straightforward. You can use the built-in \`http\` module to create a simple web server that listens for incoming requests and responds with data.
\n\n
Example:
\n\n
js
const http = require('http');\n\n
const fs = require('fs');\n\n
const path = require('path');\n\n
\n\n
\n\n
const server = http.createServer((req, res) => {\n\n
  if (req.method === 'GET' && req.url === '/') {\n\n
    res.writeHead(200, { 'Content-Type': 'text/html' });\n\n
    const filePath = path.join(__dirname, 'index.html');\n\n
    fs.readFile(filePath, 'utf8', (err, data) => {\n\n
      if (err) {\n\n
        res.writeHead(500, { 'Content-Type': 'text/plain' });\n\n
        res.end('Internal Server Error');\n\n
      } else {\n\n
        res.end(data);\n\n
      }\n\n
    });\n\n
  } else {\n\n
    res.writeHead(404, { 'Content-Type': 'text/plain' });\n\n
    res.end('Not Found');\n\n
  }\n\n
});\n\n
\n\n
server.listen(3000, () => {\n\n
  console.log('Server is running on http://localhost:3000');\n\n
});\n\n
\n\n
\n\n
In this example, the server listens for GET requests to the root URL (\`/\`) and responds by serving an HTML file. If the requested URL does not match, it responds with a 404 status code.`,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQX7vIY8MECCVH7zbR_OSFpXWEBrEG1U9oFg&s"
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

export default NodeArticleCard;
