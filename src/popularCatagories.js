import React, { useState, useEffect } from "react";

const PopularCategories = () => {
  const [categories, setCategories] = useState([]);
  const apiKey = '1';
  
    useEffect(() => {
            const getAllMealCategories = async () => {
            const apiUrl = `https://www.themealdb.com/api/json/v1/${apiKey}/categories.php`;

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

  return (
    
    <div class=" md:h-[50vh] h-[35%] md:mt-12 mt-8 md:my-12 bg-orange-50 w-[90%] ml-[5%]">        
        <h2 class="text-center mt-10">Popular Categories</h2>
        <div class=" grid grid-flow-col">
            {categories.map((category) => (
                <div key={category.idCategory} class="mt-8">
                    <img src={category.strCategoryThumb} class="w-36 h-36 rounded-full" /> 
                    <p>{category.strCategory}</p>
                </div>
            ))};
        </div>
    </div>
  );
};

export default PopularCategories;
