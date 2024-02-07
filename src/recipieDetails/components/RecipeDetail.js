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
        setMeal(fetchedMeal.meals[0]);
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
      <div class=" w-[50%] px-5 pt-10 text-left">
        <p class="text-5xl  font-extrabold text-orange-600  truncate">{meal.strMeal}</p>
        <ul class="list-disc">
          <li><p class='text-sm pt-5 pl-2'><span class="text-xl">Region : </span> {meal.strArea}</p></li>
          <li><p class='text-sm pt-5 pl-2'><span class="text-xl">Tags : </span> {meal.strTags}</p></li>
        </ul>
        {meal.strYoutube && (
          <iframe
            class="w-[80%] h-[50%] my-5"
            src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}
            title="YouTube video"
            allowFullScreen
          ></iframe>

        )}


        <button class="my-2  
                                border 
                                w-[40%]
                                h-12                                 
                                shadow-orange-100 
                                cursor-pointer 
                                transition-all 
                                bg-[#E1611F]
                                text-white 
                                px-6 
                                py-2 
                                rounded-lg
                                border-orange-600
                                border-b-[4px] 
                                hover:brightness-110 
                                hover:-translate-y-[1px] 
                                hover:border-b-[6px]
                                active:border-b-[2px] 
                                active:brightness-90 
                                active:translate-y-[2px]
                                md:max-w-[70%] 
                                justify-center 
                                flex
                                text-center
                                ">Order the Food</button>
      </div>
    </div>
  );
};

export default RecipeDetail;
