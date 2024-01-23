import './App.css';
import Nav from './nav.js';
import PopularRecipies from './popularRecipies.js';
import menuVisible from './nav.js';
console.log(menuVisible)
function App() {
  return (
    
    <div className="App md:overflow-visible overflow-hidden">
      <Nav style={{ zIndex: '999' }} />
      <PopularRecipies />
    </div>

  );
}

export default App;
