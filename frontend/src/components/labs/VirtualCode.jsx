import React from "react";
import CodeEditor from "./CodeEditor";
import CodeTerminal from "./Terminal";

const VirtualCode = () => {
  return (
    <div className="flex flex-col w-full overflow-y-scroll h-full1` scrollbar-hide">
      <header className="text-white text-2xl font-bold text-center p-2 mt-6">
        Interactive Code Lab
      </header>
      <main className="flex-grow p-4 flex flex-col gap-4">
        <div className="flex-1 bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Code Editor</h2>
          <CodeEditor />
        </div>
        <div className="flex-1 bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Terminal</h2>
          <CodeTerminal />
        </div>
      </main>
    </div>
  );
};

export default VirtualCode;
