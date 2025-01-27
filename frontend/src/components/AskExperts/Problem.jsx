import React from 'react';
import ProblemCard from './ProblemCard';
import { useNavigate } from 'react-router-dom';
const problems = [
    {
      companyName: 'FullStack Innovators',
      problemTitle: 'Summarize YouTube Videos with LlamaIndex',
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
      problemTitle: 'Implement a Secure Authentication System for a Web Application Subtasks.',
      expertName: 'Aditya Verma',
    },
    {
      companyName: 'WebOps Pro',
      problemTitle: 'Migrating a Monolithic Application to Microservices Architecture.',
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
  const navigate =useNavigate();
  const handleSolveClick = (problemTitle) => {
    navigate(`./ProblemPage?problem=${encodeURIComponent(problemTitle)}`)
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-y-scroll h-full scrollbar-hide gap-6 p-4">
      {problems.map((problem, index) => (
        <ProblemCard
          key={index}
          companyName={problem.companyName}
          problemTitle={problem.problemTitle}
          expertName={problem.expertName}
          onSolveClick={() => handleSolveClick(problem.problemTitle)}
        />
      ))}
    </div>
  );
};

export default Problem;
