import React from "react";

const ReactDocs = () => {
  return (
    <>
      <div className="w-full flex justify-center pb-4">
        <h1 className="text-white text-[2.2em]">
          React.JS for Front End Developers
        </h1>
      </div>
      <p className="text-white text-[1.2em] pb-2">
        React is one of the most popular JavaScript frameworks ever created, and
        I believe that it's one of the best tools out there.
      </p>
      <p className="text-white text-[1.2em]">
        At the end of this module, you'll have a basic understanding of :
      </p>
      <ul className="text-white text-[1.1em] list-disc list-inside pl-5">
        <li className="pb-1">
          <a href="#">What React is and why it's so popular</a>
        </li>
        <li className="pb-1">
          <a href="#">How to install React</a>
        </li>
        <li className="pb-1">
          <a href="#">React Components</a>
        </li>
        <li className="pb-1">
          <a href="#">React State</a>
        </li>
        <li className="pb-1">
          <a href="#">React Props</a>
        </li>
        <li className="pb-1">
          <a href="#">Handling user events in React</a>
        </li>
        <li className="pb-1">
          <a href="#">Lifecycle events in a React component</a>
        </li>
      </ul>
      <p className="text-white text-[1.2em] pb-2">These topics will be the base upon which you will build in other more advanced React modules.</p>
    </>
  );
};

export default ReactDocs;
