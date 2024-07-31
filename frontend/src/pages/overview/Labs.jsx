import React from "react";

const Labs = () => {
  const problems = [
    {
      title: "E-commerce Platform (React + Node.js + DevOps)",
      description:
        "Create an end-to-end e-commerce platform where users can browse products, add items to their cart, and complete purchases. Use React.js for the frontend to build a responsive and interactive user interface. Implement product listings, search functionality, and user authentication. For the backend, use Node.js to handle product data, user accounts, and order processing. Set up DevOps practices for continuous integration and deployment (CI/CD) using tools like Jenkins, GitLab CI/CD, or GitHub Actions.",
      link: "/e-commerce",
    },
    {
      title: "Social Media Dashboard (React + Node.js)",
      description:
        "Develop a social media dashboard where users can manage their profiles, schedule posts, and analyze engagement metrics. Use React.js to create dynamic components for displaying user data, charts, and graphs. Build a Node.js backend to handle user authentication, data storage, and API integrations with social media platforms. Implement features like real-time notifications and scheduled post publishing.",
      link: "/social-media-dashboard",
    },
    {
      title: "Real-Time Polling System (Node.js + WebSockets)",
      description:
        "Develop a polling system where users can vote in real time. Use Node.js with WebSockets (e.g., Socket.io) to handle live updates and vote counting. Implement features like real-time result display and user authentication. Deploy the system using DevOps practices for scalability and reliability.",
      link: "/real-time-polling",
    },
  ];

  return (
    <div className="w-full overflow-y-scroll h-full  scrollbar-hide justify-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-8 text-white">
          Test your learnings in a Virtual Environment
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h2 className="text-xl text-primary font-bold mb-4">
                  {problem.title}
                </h2>
                <p className="text-gray-700">
                  {problem.description.substring(0, 150)}...
                </p>
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href="/home/Labs/VirtualCode"
                  className="inline-block bg-secondary text-white py-2 px-4 rounded hover:bg-primary"
                >
                  Go to Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Labs;
