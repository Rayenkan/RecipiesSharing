import './recipieDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../../homePage/components/nav.js';
import Footer from '../../homePage/components/footer.js';
import RecipeDetail from '../components/RecipeDetail.js';
import Ingredients from '../components/ingrediants.js';
import Instructions from '../components/instructions.js';
import WhatToCockToday from '../../homePage/components/whatToCockToday.js';

function RecipieDetails() {
  const {id } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])
  return (
    
    <div className="App  overflow-hidden no-scrollbar bg-gray-200 ">
      <Nav />
      <RecipeDetail data={id}/>
      <div class="flex flex-row ">
        <Ingredients data={id}/>
        <Instructions data={id}/>
      </div>
      <WhatToCockToday/>
      <Footer/>
    </div>

  );
}

export default RecipieDetails;
