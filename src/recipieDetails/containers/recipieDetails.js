import './recipieDetails.css';
import Nav from '../../homePage/components/nav.js';
import Footer from '../../homePage/components/footer.js';
import { useParams } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail.js';
import Ingredients from '../components/ingrediants.js';
import Instructions from '../components/instructions.js';
function RecipieDetails() {
  const {id } = useParams()
  return (
    
    <div className="App  overflow-hidden bg-gray-200 ">
      <Nav />
      <RecipeDetail data={id}/>
      <div class="flex flex-row ">
        <Ingredients data={id}/>
        <Instructions data={id}/>
      </div>
      
      <Footer/>
    </div>

  );
}

export default RecipieDetails;
