import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React tutorials</h1>
      <h1>By CodeHacks</h1>
      <h1>Hi I am Kapil Dev Sharma</h1>
      <p>Thank you for visiting my portfolio...</p>
      <p>I am a passionate and self-motivated software developer with a B.Tech in Computer Science and Engineering from GL Bajaj Institute of Technology and Management, Noida. As a self-taught programmer, I have honed my skills in various programming languages and technologies through personal projects and continuous learning.</p>
      <p>Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Operating Systems, Software Engineering, Design Principles and Migration work</p>
      <p>- **Programming Languages**: Python, Java, JavaScript, C++
    - **Web Development**: HTML, CSS, React, Node.js
    - **Databases**: MySQL, MongoDB
    - **Tools**: Git, GitHub, Docker, Jenkins
    - **Other**: Problem-solving, Debugging, Version Control</p>
      <p></p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
