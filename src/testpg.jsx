import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown";
import {Link} from "react-scroll";
import remarkGfm from "remark-gfm";

import "./App.css"
//import { Link } from "react-router-dom";

function Testpg() {
  const [markdown, setMarkdown] = useState('')
  const [headings, setHeadings] = useState([])

  useEffect(() => {
    //fetch("./pages/test.md") // Adjust the path to your markdown file
      
    fetch("/pages/test.md") // Adjust the path to your markdown file
    .then(response => response.text())
      .then(text => 
      {
        setMarkdown(text)
        extractHeadings(text)
      })
      .catch(error => console.error("Error fetching markdown:", error));
  }, []);



const extractHeadings = (markdownText) => {
  const headingRegex = /^(#{1,6})\s+(.*)/gm;
  const headingsArray = [];
  let match;


  while ((match = headingRegex.exec(markdownText)) !== null) {
    const level = match[1].length; // Number of "#" characters
    const text = match[2];
    const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") ; //generate an id
    headingsArray.push({ level, text, id });
  }
  setHeadings(headingsArray)
}

  return (
    <div className="page-container">
      {/* left section*/}
      <div className="left-section">
        {/* add content for left section*/}
      </div>


    <div className="middle-section">

    <ReactMarkdown
    remarkPLugins={[remarkGfm]}
    components={{
      h1: ({node, ...props}) => <h1 id={props.children.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")}{...props}/>,
      h2: ({node, ...props}) => <h2 id={props.children.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")}{...props} />,
      h3: ({node, ...props}) => <h3 id={props.children.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")}{...props} />,
    

    }}  
    
    
    
    >{markdown}</ReactMarkdown>

    </div>
  
 
  {/* Right section*/}

    <div className="right-section">
      <ul className="toc">
        {headings.map((heading, index) => (

          <li 
          key={index}
          className={`toc-item toc-level-${heading.level}`} 
          >
          <Link
          to={heading.id}
          smooth={true}
          duration={500}
          offset={-50}
          activeClass="active-toc-item" 
          >
            {heading.text}
          </Link>


          </li>

        ))}
      </ul>
        
    </div>            
          

            </div>
    
  );
}

export default Testpg
