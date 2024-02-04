import React from "react";


const recipeDetail = () => {
    useEffect(() => {
        const getAllMealCategories = async () => {
          const apiUrl = `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    
          try {
            const response = await fetch(apiUrl);
    
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
    
            setCategories(data.categories);    
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
        
    
        getAllMealCategories();
      }, []);
    
    return(
        <div>
            <div>
                <img></img>
            </div>
            <div>

            </div>
        </div>
    )
};
export default recipeDetail;