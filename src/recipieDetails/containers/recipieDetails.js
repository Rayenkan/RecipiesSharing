import './recipieDetails.css';
import Nav from '../../homePage/components/nav.js';
import Footer from '../../homePage/components/footer.js';
import { useParams } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail.js';
function RecipieDetails() {
  const {id } = useParams()
  return (
    
    <div className="App  overflow-hidden bg-gray-200 ">
      <Nav />
      {console.log(id)}
      <RecipeDetail data={id}/>
      <Footer/>
    </div>

  );
}

export default RecipieDetails;
