import './App.css';
import Nav from './nav.js';
import PopularRecipies from './popularRecipies.js';
import PopularCategories from './popularCatagories.js';
import WhatToCockToday from './whatToCockToday.js';
import AboutUs from './AboutUs.js';

function App() {
  return (
    
    <div className="App  overflow-hidden flex flex-col">
      <Nav />
      <PopularRecipies />
      <PopularCategories/>
      <WhatToCockToday/>
      <AboutUs/>
    </div>

  );
}

export default App;
