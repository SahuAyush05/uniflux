import React from 'react';
import ProblemCard from './ProblemCard';
const problems = [
    {
      companyName: 'InnovateTech',
      problemTitle: 'Develop a collaborative whiteboard tool with real-time updates using React.js and Node.js. Implement automated testing and deployment with Jenkins.',
      expertName: 'Aditya Kulshrestha',
    },
    {
      companyName: 'CloudOps Hub',
      problemTitle: 'Create a multi-tenant SaaS app with React.js UI and Node.js backend microservices. Use Docker and Kubernetes for container orchestration.',
      expertName: 'Shivam Verma ',
    },
    {
      companyName: 'DataVision',
      problemTitle: 'Build a data analytics dashboard with React.js and Node.js. Implement CI/CD using GitLab CI and deploy on AWS.',
      expertName: 'Ayush Sahu',
    },
    {
      companyName: 'SecureNet Solutions',
      problemTitle: 'Design a secure file-sharing platform with React.js and Node.js. Implement role-based access control and deploy with Terraform and AWS Lambda.',
      expertName: 'Aditya Verma',
    },
    {
      companyName: 'DevOps Edge',
      problemTitle: 'Create an automated monitoring and alerting system using React.js, Node.js, Prometheus, and Grafana. Deploy using Jenkins and Docker.',
      expertName: 'Hasrsh Upadhyay',
    },
    {
      companyName: 'Streamline Apps',
      problemTitle: 'Develop a video conferencing application with React.js and Node.js for real-time communication. Use Kubernetes and Helm for deployment.',
      expertName: 'Karan',
    },
    // {
    //   companyName: 'Agile Enterprises',
    //   problemTitle: 'Implement a workflow automation tool using React.js, Node.js, and Kafka. Set up CI/CD with CircleCI and deploy to Azure.',
    //   expertName: 'Laura Green',
    // },
    // {
    //   companyName: 'E-commerce Experts',
    //   problemTitle: 'Build a scalable e-commerce platform using React.js and Node.js. Integrate payment gateways, ensure security, and deploy using AWS CloudFormation.',
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
