import './homePage.css';
import Nav from '../components/nav.js';
import PopularRecipies from '../components/popularRecipies.js';
import PopularCategories from '../components/popularCatagories.js';
import WhatToCockToday from '../components/whatToCockToday.js';
import AboutUs from '../components/AboutUs.js';
import OurCommunity from '../components/ReadyToCock.js'
import Footer from '../components/footer.js';
import { useEffect , useRef } from 'react';

function App() {
  const aboutUsRef = useRef(null);
  const contactsRef = useRef(null)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const onScrollAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onScrollContact =()=>{
    contactsRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    
    <div className="App  overflow-hidden ">
      <Nav onScrollAboutUs={onScrollAboutUs } onScrollContact={onScrollContact}   />
      <PopularRecipies />
      <PopularCategories/>
      <WhatToCockToday/>
      <AboutUs ref={aboutUsRef}/>
      <OurCommunity/>
      <Footer ref={contactsRef} />
    </div>

  );
}

export default App;
