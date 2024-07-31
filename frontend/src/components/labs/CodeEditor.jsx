import React, { useEffect } from "react";
import * as monaco from "monaco-editor";

const CodeEditor = () => {
  useEffect(() => {
    const editor = monaco.editor.create(document.getElementById("editor"), {
      value: `// Welcome to the Interactive Code Lab!
        /*
         * This editor allows you to write and edit code in real-time.
         * Use the terminal on the bottom to execute commands and see output.
         * 
         * Features:
         * 1. Code Editor: Write, edit, and format your code here.
         * 2. Terminal: Run your code and execute shell commands.
         * 3. Live Updates: See immediate feedback and results.
         * 4. File Management: Use the terminal to create, modify, and manage files.
        
         * How to Use:
         * - Write your code in the editor.
         * - Save your work using the appropriate commands in the terminal.
         * - Execute your code or commands in the terminal to see results.
         * 
         * Pro Tip: You can create new files using the terminal and work on them here!
         * 
         * Happy Coding!
         */
        `,
      language: "javascript",
      theme: "vs-dark",
    });

    return () => {
      if (editor) {
        editor.dispose();
      }
    };
  }, []);

  return (
    <div id="editor" className="rounded-lg" style={{ height: "500px" }}></div>
  );
};

export default CodeEditor;
