import { useState, useEffect } from 'react'

import './App.css'
import ReactMarkdown from "react-markdown";


function Testpg() {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    //fetch('./pages/test.md') // Adjust the path to your markdown file
      
    fetch('./src/pages/test.md') // Adjust the path to your markdown file
    .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error fetching markdown:', error));



    
  }, []);





  return (
    <>
  
  <div>
  <ReactMarkdown>{markdown}</ReactMarkdown>

            
          

            </div>
      
    </>
  )
}

export default Testpg
