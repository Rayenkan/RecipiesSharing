import React, { useEffect, useState } from "react";

const Instructions = (props) => {
  const id = props.data;
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    const getAllMealIngredients = async () => {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const fetchedMeal = await response.json();
        setInstructions((fetchedMeal.meals[0].strInstructions).split("."));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    getAllMealIngredients();
  }, [id]);

  return (
    <div class="w-[50%] bg-white h-[75vh] my-5 mr-5 py-5 text-left ml-[5%] pl-10 overflow-auto">
        <p class="text-xl font-semibold text-orange-600 pb-5">Instructions :</p>
      {instructions.map((instruction) => (
        <ul class="list-disc">
          <li class="py-1">{instruction}</li>
        </ul>
      ))}
    </div>
  );
};

export default Instructions;
