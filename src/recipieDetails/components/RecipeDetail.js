import React, { useState, useEffect } from "react";

const RecipeDetail = (props) => {
  const id = props.data;
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const getAllMealCategories = async () => {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const fetchedMeal = await response.json();
        setMeal(fetchedMeal.meals[0]); // Assuming the API response has a "meals" array

      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    getAllMealCategories();
  }, [id]);

  if (!meal) {
    return <div>Loading...</div>; // Add a loading state or UI while waiting for data
  }

  return (
    <div>
      <div>
        <img src={meal.strMealThumb} className="rounded w-[95%] h-full" alt={meal.strMeal} />
      </div>
      <div>
        {/* Render other details using `meal` */}
      </div>
    </div>
  );
};

export default RecipeDetail;
