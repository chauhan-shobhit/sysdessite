import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'; 

import './App.css'
import ReactMarkdown from "react-markdown";
import remarkMarkdown from 'remark-mermaid-plugin' // Adjust the path to your markdown file
import remarkMermaid from 'remark-mermaid-plugin';

import Testpg from './testpg';
import Home from './home';

function App() {
  
  return (
   
<Router>
  <Routes>


  <Route path="/" element={<Home/>} />
  <Route path="/payment-system" element={<Testpg/>} />
  
  </Routes>
</Router>

   
  )
}

export default App
