import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdownText = `
  # Hello, World!
  
  This is a paragraph with **bold text** and *italic text*.
  
  - List item 1
  - List item 2
`;

function MarkdownRenderer() {
  return (
    <ReactMarkdown>{markdownText}</ReactMarkdown>
  );
}

export default MarkdownRenderer;