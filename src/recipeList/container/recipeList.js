import React from "react";
import { useParams } from "react-router-dom";
import Nav from '../../homePage/components/nav.js';
import Footer from '../../homePage/components/footer.js';
import Recipes from '../components/Recipes.js';

function RecipeList() {
    const { categorie } = useParams();
    return (
        <div>
            <Nav />
            <Recipes data={categorie} />
            <Footer />
        </div>
    );
}

export default RecipeList;
