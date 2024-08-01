import React from 'react';
import ProblemCard from './ProblemCard';
const problems = [
    {
      companyName: 'FullStack Innovators',
      problemTitle: 'Develop a full-stack app with React.js frontend and Node.js backend. Users can upload images, and the backend should process and store them securely.',
      expertName: 'Aditya Kulshreshtha',
    },
    {
      companyName: 'DevOps Hub',
      problemTitle: 'Set up a CI/CD pipeline using GitHub Actions for a React and Node.js app, including automated testing, building, and deployment.',
      expertName: 'Shivam Verma',
    },
    {
      companyName: 'Tech Synergy',
      problemTitle: 'Create a real-time chat app using React.js and WebSocket with Node.js. Ensure scalability using Docker and Kubernetes.',
      expertName: 'Ayush Sahu',
    },
    {
      companyName: 'CloudTech Solutions',
      problemTitle: 'Implement SSR for a React.js app using Next.js and Node.js. Deploy with Docker and set up monitoring with Prometheus and Grafana.',
      expertName: 'Aditya Verma',
    },
    {
      companyName: 'WebOps Pro',
      problemTitle: 'Build a secure authentication system using React.js, Node.js, and JWT. Implement role-based access control and continuous deployment.',
      expertName: 'Harsh Upadhyay',
    },
    // {
    //   companyName: 'Agile Development',
    //   problemTitle: 'Design a microservices architecture with React.js frontend and multiple Node.js services. Use Docker Compose for local development and Kubernetes for production.',
    //   expertName: 'Kevin Brown',
    // },
    // {
    //   companyName: 'DataStream Corp',
    //   problemTitle: 'Create a data visualization dashboard using React.js and Node.js RESTful APIs. Use CI/CD practices for seamless cloud deployment.',
    //   expertName: 'Laura Green',
    // },
    // {
    //   companyName: 'SecureWeb Inc.',
    //   problemTitle: 'Build a secure e-commerce platform with React.js and Node.js. Implement security best practices and deploy using IaC with Terraform.',
    //   expertName: 'David Thompson',
    // },
  ];
const Problem= () => {
  const handleSolveClick = () => {
    alert('Redirecting to solution page...');
    // Implement your logic here, e.g., redirect to a solution page
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-y-scroll h-full scrollbar-hide gap-6 p-4">
      {problems.map((problem, index) => (
        <ProblemCard
          key={index}
          companyName={problem.companyName}
          problemTitle={problem.problemTitle}
          expertName={problem.expertName}
          onSolveClick={handleSolveClick}
        />
      ))}
    </div>
  );
};

export default Problem;
