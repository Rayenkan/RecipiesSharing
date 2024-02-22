import React , {useEffect , useState} from "react";

const Ingredients =(props) =>{
        const id = props.data;
        const [ingredientsList ,setIngredientsList] = useState([]);
      
        useEffect(() => {
          const getAllMealingrediants = async () => {
            const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      
            try {
              const response = await fetch(apiUrl);
      
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
      
              const fetchedMeal = await response.json();
              setIngredientsList( Object.keys(fetchedMeal.meals[0])
              .filter(key => key.startsWith('strIngredient') && fetchedMeal.meals[0][key] !== null && fetchedMeal.meals[0][key] !== "")
              .map(key => ({
                  ingredient: fetchedMeal.meals[0][key],
                  measure: fetchedMeal.meals[0][`strMeasure${key.slice(-1)}`]
              }))) 
            } catch (error) {
              console.error('Error fetching data:', error.message);
            }
            
          };
      
          getAllMealingrediants();
        }, [id]);
    return (
         <div class="w-[45%] bg-white h-[75vh] my-5 ml-5 py-5 text-left pl-10 overflow-auto no-scrollbar shadow-sm">
            <p class="text-3xl font-semibold text-orange-600 pb-5">Ingredient :</p>
            {ingredientsList.map((ingredient) => (
                <ul class="list-disc">
                    <li class="py-1">{ingredient.ingredient} ({ingredient.measure})</li>
                </ul>
            ))}
         </div>
    )
    
}
export default Ingredients;