import React from "react";

function DevArticleCard({ subtopic, onNext, onBack, onTest }) {
  // Sample article content based on subtopic
  const articles = {
    "What is DevOps?": {
      content: `DevOps is a set of practices that combines software development (Dev) and IT operations (Ops)\n\nIt aims to shorten the development lifecycle and provide continuous delivery with high software quality\n\nDevOps promotes a collaborative approach between development and operations teams, emphasizing automation, integration, and communication\n\n

The main goals of DevOps include:\n\n- Faster delivery of features\n\n- More stable operating environments\n\n- Improved communication and collaboration\n\n- Better quality assurance and reliability\n\n

By fostering a culture of collaboration and integrating development and operations, DevOps enables organizations to deliver applications and services more efficiently, ensuring a seamless and consistent user experience.\n\n`,
      images: [
        "https://techvify-software.com/wp-content/uploads/2023/09/what-is-aws-devops-2.jpg"
      ],
    },
    "How Does DevOps Work?": {
      content: `DevOps works by integrating and automating the processes between software development and IT teams\n\nIt focuses on creating a culture of collaboration, continuous integration, continuous delivery, and continuous deployment\n\n`,
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_whEL5F5PzUAPNMeoGW5uHxyTjon3NOL_g&s"],
    },
    "Why Do You Need a DevOps Specialist?": {
      content: `A DevOps specialist plays a crucial role in bridging the gap between development and operations teams\n\nThey ensure smooth and efficient collaboration, automate processes, and implement best practices for continuous integration and delivery\n\nHiring a DevOps specialist helps in achieving faster release cycles, improving system reliability, and enhancing overall productivity\n\n`,
      images: ["https://intellipaat.com/blog/wp-content/uploads/2017/11/DevOps-02.jpg"],
    },
    "DevOps Life Cycle": {
      content: `The DevOps lifecycle consists of several stages, including:\n\n- Planning\n\n- Coding\n\n- Building\n\n- Testing\n\n- Releasing\n\n- Deploying\n\n- Operating\n\n- Monitoring\n\nEach stage is interconnected and emphasizes automation and continuous improvement\n\n`,
      images: ["https://images.spiceworks.com/wp-content/uploads/2021/08/26123909/DevOps-Lifecycle.png"],
    },
    "Myths about DevOps": {
      content: `There are several myths about DevOps, such as:\n\n- DevOps is only about tools\n\n- DevOps means no more operations\n\n- DevOps is only for developers\n\nThese myths can hinder the successful adoption of DevOps practices\n\nDevOps is a cultural shift that involves people, processes, and tools working together to achieve common goals\n\n`,
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2TeYSOeO7EKojU5iEXS7bxiMlxI4wI5I6yQ&s"],
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

export default DevArticleCard;
