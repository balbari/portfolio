import React, { useRef } from 'react'
import './App.css'
import Main from './component/Main'
import Project from './component/Project'
import Footer from './component/Footer'
import Header from './component/Header'

function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (section) => {
    if (section.current) {
      section.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='app'>
      <div className='main' ref={homeRef}>
        <Header scrollToSection={scrollToSection}></Header>
        <Main></Main>
      </div>
      <div className='project' ref={projectRef}>
        <Project />
      </div>

      <Footer ref={footerRef} />
    </div>
  )
}

export default App
