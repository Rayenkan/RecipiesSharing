import './homePage.css';
import Nav from '../components/nav.js';
import PopularRecipies from '../components/popularRecipies.js';
import PopularCategories from '../components/popularCatagories.js';
import WhatToCockToday from '../components/whatToCockToday.js';
import AboutUs from '../components/AboutUs.js';
import OurCommunity from '../components/ReadyToCock.js'
import Footer from '../components/footer.js';

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
