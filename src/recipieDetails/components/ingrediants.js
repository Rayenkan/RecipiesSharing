import React from "react";

const Ingredients =(props) =>{
        const id = props.data;
        const ingredientsList = [];
      
        useEffect(() => {
          const getAllMealingrediants = async () => {
            const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      
            try {
              const response = await fetch(apiUrl);
      
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
      
              const fetchedMeal = await response.json();
              const ingredientsList = Object.keys(fetchedMeal.meals[0])
                .filter(key => key.startsWith('strIngredient') && mealData.meals[0][key] !== null && mealData.meals[0][key] !== "")
                .map(key => ({
                    ingredient: mealData.meals[0][key],
                    measure: mealData.meals[0][`strMeasure${key.slice(-1)}`]
                }));
            } catch (error) {
              console.error('Error fetching data:', error.message);
            }
            
          };
      
          getAllMealCategories();
        }, [id]);
    return (
         <div>
            {ingredientsList.map((ingredient) => (
                <ul>
                    <li>{ingredient.ingredient} ({ingredient.measure})</li>
                </ul>
            ))}
         </div>
    )
    
}