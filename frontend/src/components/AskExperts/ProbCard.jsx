import React from "react";
import Prob1 from "../poblemstatement/Prob1"
import Prob2 from "../poblemstatement/Prob2"
import Prob3 from "../poblemstatement/Prob3"
import Prob4 from "../poblemstatement/Prob4"
import Prob5 from "../poblemstatement/Prob5"
import ChatBox from "./ChatBox";
import VirtualCode from "../labs/VirtualCode";
function ProbCard({ subtopic, probTitle }) {
    const renderProblemDetails = (title) => {
        switch (title) {
          case 'Summarize YouTube Videos with LlamaIndex':
            return <Prob1 />;
          case 'Set up a CI/CD pipeline using GitHub Actions for a React and Node.js app, including automated testing, building, and deployment.':
            return <Prob2 />;
          case 'Create a real-time chat app using React.js and WebSocket with Node.js. Ensure scalability using Docker and Kubernetes.':
            return <Prob3 />;
          case 'Implement SSR for a React.js app using Next.js and Node.js. Deploy with Docker and set up monitoring with Prometheus and Grafana.':
            return <Prob4 />;
          case 'Build a secure authentication system using React.js, Node.js, and JWT. Implement role-based access control and continuous deployment.':
            return <Prob5 />;
          default:
            return <p>No details available for this problem.</p>;
        }
      };
  const renderStatusMessage = (subtopic) => {
    switch (subtopic) {
      case 'Problem Statement':
        return renderProblemDetails(probTitle);
      case 'Solve Here':
        return <VirtualCode />;
      case 'Get Suggestions form the Expert':
        return <ChatBox />;
      default:
        return <p>Not found.</p>;
    }
  };
  return renderStatusMessage(subtopic);
}

export default ProbCard;
