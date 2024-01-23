import './App.css';
import Nav from './nav.js';
import PopularRecipies from './popularRecipies.js';
import PopularCategories from './popularCatagories.js';

function App() {
  return (
    
    <div className="App md:overflow-visible overflow-hidden flex flex-col">
      <Nav />
      <PopularRecipies />
      <PopularCategories/>
    </div>

  );
}

export default App;
