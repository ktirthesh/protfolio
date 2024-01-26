import { useRef } from 'react';

import './App.css';

import MainNavbar from './components/main_navbar';
import Banner from './components/carousel';
import Skills from './components/skilltable/skills';
import About from './components/about/about';
import LinkandDocs from './components/Docs_Links';
import Profile from './components/profile';

function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainNavbar onClick={handleClick}>
      <Profile/>
  {/* <Banner/> */}
  <LinkandDocs/>
        <About />
        <Skills ref={ref}/>
    </MainNavbar>
      );
}

export default App;
