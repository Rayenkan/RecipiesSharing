import './App.css';
import Nav from './nav.js';
import PopularRecipies from './popularRecipies.js';
import PopularCategories from './popularCatagories.js';
import WhatToCockToday from './whatToCockToday.js';
import AboutUs from './AboutUs.js';
import OurCommunity from './ReadyToCock.js'
import Footer from './footer.js';

function App() {
  return (
    
    <div className="App  overflow-hidden ">
      <Nav />
      <PopularRecipies />
      <PopularCategories/>
      <WhatToCockToday/>
      <AboutUs/>
      <OurCommunity/>
      <Footer/>
    </div>

  );
}

export default App;
