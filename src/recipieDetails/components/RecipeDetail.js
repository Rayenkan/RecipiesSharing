import React, { useState, useEffect } from "react";

const RecipeDetail = (props) => {
  const id = props.data;
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    const getAllMealCategories = async () => {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const fetchedMeal = await response.json();
        setMeal(fetchedMeal.meals ? fetchedMeal.meals[0] : null); // Check if "meals" array exists
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    getAllMealCategories();
  }, [id]);

  return (
    <div className="flex flex-col-2 md:h-[40vh] lg:h-[80vh] h-[35%] m-5 bg-white ">
      <div className="w-[50%] p-5">
        {meal && (
          <img src={meal.strMealThumb} className="rounded w-[95%] h-full" alt={meal.strMeal} />
        )}
      </div>
      <div class=" w-[50%] py-5 pt-10 text-left">
        <p class="text-5xl  font-extrabold ">{meal.strMeal}</p>
        <p class='text-sm pt-3 pl-2'>{meal.strArea}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
