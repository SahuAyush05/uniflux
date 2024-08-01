import React from 'react';

// Inline styles for simplicity
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ededed',
    height: '650px',
    
    border: '1px solid #000000',
  },
  heading: {
    color: '#000000',
  },
  subheading: {
    color: '#555',
    borderBottom: '2px solid #ccc',
    paddingBottom: '5px',
    marginBottom: '10px',
  },
  list: {
    marginLeft: '20px',
  },
  listItem: {
    marginBottom: '10px',
  },
  code: {
    backgroundColor: '#f4f4f4',
    borderRadius: '4px',
    padding: '2px 4px',
    fontSize: '90%',
  },
  paragraph: {
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};

const Prob1 = () => {
  return (
    <div style={styles.container} className='overflow-y-scroll h-full scrollbar-hide'>
      <h1 className="text-6xl" style={styles.heading}>Summarize YouTube Videos with LlamaIndex</h1>

      <h2 className="text-2xl" style={styles.subheading}>Problem Statement</h2>
      <p style={styles.paragraph}>
        The vast amount of video content available on platforms like YouTube poses a challenge for users who seek to quickly extract meaningful insights without investing significant time watching entire videos. Traditional text-based summarization tools are inadequate for processing video content, which includes audio, visual, and textual elements. This creates a need for a solution that can efficiently summarize videos by extracting key points, topics, and themes.
      </p>

      <h3 style={styles.subheading}>Objective</h3>
      <p style={styles.paragraph}>
        Develop a solution using LlamaIndex to summarize YouTube videos effectively. The solution should convert video content into a format that can be processed by LlamaIndex, generate concise summaries that capture the core information, and present the summaries in a user-friendly manner. The system should also accommodate diverse content types, such as lectures, tutorials, vlogs, and news, to ensure broad applicability.
      </p>

      <h3 style={styles.subheading}>Key Challenges</h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <strong>Video Content Conversion</strong>:
          <ul style={styles.list}>
            <li>Efficiently convert audio and visual components of videos into text that can be processed by LlamaIndex.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Information Extraction</strong>:
          <ul style={styles.list}>
            <li>Identify and extract key points, topics, and themes from the converted text while maintaining context and coherence.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Summarization Quality</strong>:
          <ul style={styles.list}>
            <li>Ensure that generated summaries are accurate, concise, and informative, reflecting the essence of the original video content.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Scalability and Performance</strong>:
          <ul style={styles.list}>
            <li>Design a system that can handle a large volume of videos and provide summaries in a timely manner.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>User Experience</strong>:
          <ul style={styles.list}>
            <li>Present the summaries in an accessible and user-friendly format, allowing users to quickly grasp the content of the video without watching it entirely.</li>
          </ul>
        </li>
      </ol>

      <p style={styles.paragraph}>
        By addressing these challenges, the solution will enhance the accessibility of video content on YouTube, enabling users to consume information more efficiently and make informed decisions about which videos to engage with further.
      </p>
    </div>
  );
};

export default Prob1;
