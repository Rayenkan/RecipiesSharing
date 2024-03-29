import React, { useEffect, useState } from "react";
import '../../index.css';
import food1 from '../imgs/food1.avif';
import food2 from '../imgs/food2.avif';
import { Link } from "react-router-dom";

const PopularRecipes = () => {
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const getMeal = async () => {
            try {
                const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setMeal(data.meals[0]);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        getMeal();
    }, []);

    return (
        <div className="flex flex-col-2 md:h-[40vh] lg:h-[80vh] h-[35%] md:mt-12 mt-8 md:mb-6 bg-white">
            <div className="w-[60%] md:pl-8 pl-4">
                <p className="text-black text-lg md:text-4xl w-full h-fit md:my-5 my-2 text-left">let's start cooking with </p>
                <p className="uppercase text-2xl md:text-7xl w-full text-left text-[#E1611F] md:my-5 my-2">Popular Recipes</p>
                <p className="text-black-500 text-sm w-full h-fit text-left md:my-5 my-2 md:max-w-[40%]">Welcome to FlavZ, your ultimate destination for culinary inspiration and mouthwatering recipes! Whether you're a seasoned chef or a kitchen novice, our food haven is designed to spark creativity.</p>
                {meal && (
                    <Link to={`/Recipe/${meal.idMeal}`}>
                        <button className="my-2  
                                border 
                                w-full 
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
                                text-center"
                        >
                            Random Meal
                        </button>
                    </Link>
                )}
            </div>
            <div className="md:w-[40%] w-[30%]  relative">
               <img src={food2} alt="img1"  class=" invisible md:visible w-48 h-48 rounded-full ml-52 " />
                <div class= " invisible md:visible absolute w-52 h-52 rounded-full left-52 top-0 bg-transparent ring-2 ring-orange-600"></div>
                
                <img src={food1} alt="img2" class=" border-4 md:w-72 md:h-72 w-32 h-32 rounded-full  ml-4 absolute md:reltative top-24 md:top-44 md:bottom-5 " />
                <div class="absolute md:w-80 md:h-80 w-36 h-36 rounded-full  md:top-40 top-24  bg-transparent ring-2 bottom-14 ring-orange-600"></div>
            </div>
        </div>
    );
};

export default PopularRecipes;
