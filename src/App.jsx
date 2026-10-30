import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="page">
    <header className="site-header">
      <span className="logo">AE</span>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <section id="about" className="bio container">
      <h1>Hi, I'm kara</h1>
      <p className="tagline">frontend developer in training . port Harcourt</p>
      <p>
        I started with HTML and CSS, learned javascrit, and now i'm learning React to build faster, cleaner interfaces.
      </p>
      <ul id="skills" className="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React (learning) </li>
      </ul>
    </section>

    {/* TODO 3: move this <footer> into a </footer> into a footer component */}
    <footer id="contact" className="site-footer">
      <p>say hello: kara@example.com</p>
      <p>@ 2026 kara</p>
    </footer>
   </div>
   
  )
}


export default App
