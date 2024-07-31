import React from "react";

function ArticleCard({ subtopic, onNext, onBack }) {
  // Sample article content based on subtopic
  const articles = {
    "What React is and why it's so popular": {
      content: "React is a JavaScript library that aims to simplify the development of visual interfaces. Developed at Facebook and released to the world in 2013, it drives some of the most widely used apps, powering Facebook and Instagram among countless other applications. Its primary goal is to make it easy to reason about an interface and its state at any point in time. It does this by dividing the UI into a collection of components. You might experience some initial difficulties when learning React. But once it 'clicks', I guarantee it's going to be one of the best experiences you ever have. React makes many things easier, and its ecosystem is filled with great libraries and tools. React in itself has a very small API, and you basically need to understand 4 concepts to get started: Components, JSX, State, Props. We'll explore all of these in this book, and we'll leave the more advanced concepts to other tutorials. I will give you some pointers in the last section about how to move forward.",
      images: [
      ],
    },
    "Role of Financial Intermediaries": {
      content:
        "Financial intermediaries play a crucial role in the global economy, bridging the gap between savers and borrowers. They are institutions that facilitate the flow of funds from individuals and entities with surplus funds to those with a deficit. These intermediaries include banks, insurance companies, pension funds, investment firms, and mutual funds. They provide a range of services that enhance the efficiency of financial markets, ensure liquidity, and manage risks. \n\n1. Facilitation of Funds Transfer: One of the primary functions of financial intermediaries is to facilitate the transfer of funds from savers to borrowers. Banks, for example, accept deposits from individuals and businesses, which they then use to provide loans to other customers. This process helps channel funds from those who want to save and invest their money to those who need capital for various purposes, such as buying a house, starting a business, or financing education. \n\n2. Risk Management: Financial intermediaries help manage risk through diversification and insurance. By pooling resources from many investors, mutual funds can diversify their investment portfolios, thereby reducing the overall risk. Insurance companies, on the other hand, provide policies that protect individuals and businesses against various risks, such as health issues, accidents, and property damage. These companies assess the risk and charge premiums accordingly, spreading the risk across many policyholders. \n\n3. Provision of Liquidity: Liquidity is essential for the functioning of the financial system, and financial intermediaries play a key role in providing it. Banks and other financial institutions offer products like savings accounts, checking accounts, and money market accounts that allow individuals and businesses to access their funds when needed. This availability of liquid assets ensures that consumers and businesses can meet their short-term obligations and financial needs. \n\n4. Reduction of Transaction Costs: Intermediaries reduce transaction costs by providing expertise and economies of scale. For instance, investment firms and mutual funds employ financial analysts and fund managers who can conduct extensive research and manage large portfolios more efficiently than individual investors. This expertise lowers the cost of trading and managing investments, making it more affordable for individuals to participate in the financial markets. \n\n5. Information Asymmetry Reduction: Financial intermediaries also help reduce information asymmetry between borrowers and lenders. They conduct due diligence, assess creditworthiness, and monitor the performance of borrowers. This process helps ensure that funds are allocated to creditworthy projects and businesses, reducing the likelihood of defaults and financial losses. \n\n6. Economic Stability and Growth: By efficiently allocating resources and managing risks, financial intermediaries contribute to economic stability and growth. They enable businesses to obtain the financing needed for expansion and innovation, which leads to job creation and economic development. Furthermore, by providing consumers with access to credit, they help drive consumption and investment, which are key components of economic growth.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwd3nBL-drZHz1mYyUh_cn0JrSwmaypMMUw&s",
        "https://www.slideteam.net/media/catalog/product/cache/1280x720/f/l/flow_of_funds_chart_powerpoint_ppt_template_bundles_slide09.jpg",
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

  // Function to insert images randomly between paragraphs
  const renderContentWithImages = (paragraphs, images) => {
    const contentElements = [];
    let imageIndex = 0;

    paragraphs.forEach((paragraph, index) => {
      contentElements.push(<p key={index}>{paragraph}</p>);
      if (images[imageIndex] && Math.random() > 0.5) {
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

  return (
    <div className="flex flex-col h-full overflow-y-scroll scrollbar-hide justify-between ">
      <div className="flex-grow  justify-self-center">
        <h1 className="text-4xl text-secondary font-bold mb-4">{subtopic}</h1>
        <div className="text-white">{renderContentWithImages(paragraphs, images)}</div>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded mr-2"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ArticleCard;
