import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recipes = (props) => {
    const [Meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(10);
    const [disable, setDisable] = useState(true);
    const categorie = props.data;

    useEffect(() => {
        const getMeals = async () => {
            try {
                const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}&limit=${limit}`;

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                const limitedMeals = data.meals.slice(0, limit);
                setMeals(limitedMeals);
                setLoading(false)
                if (Meals.length <= limit) {
                    setDisable(false);
                }

            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setLoading(false);
            }
        };

        getMeals();
    }, [categorie, limit]);
    const loadMore = () => {
        setLimit(limit + 10);
    };

    return (
        <>
            {loading ? (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
                    <div className="text-black text-2xl font-bold">Loading...</div>
                </div>
            ) : (
                <div className="w-[90vw] h-fit ml-[5vw]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {Meals.map((Meal) => (
                            <div
                                key={Meal.idMeal}
                                className="flex flex-col items-center justify-center mt-4 hover:scale-105 transform transition duration-500"
                            >
                                <div className="h-64 w-full">
                                    <img
                                        src={Meal.strMealThumb}
                                        className="rounded w-full h-full object-cover"
                                        alt={Meal.strMeal}
                                    />
                                </div>
                                <div className="mx-2 my-2 w-full">
                                    <p className="text-left text-md truncate font-mediumbold">{Meal.strMeal}</p>
                                    <p className="text-left text-xs">{Meal.strArea}</p>
                                    <div className="grid grid-flow-col ">
                                        <Link to={`/Recipe/${Meal.idMeal}`}>
                                            <button
                                                className="my-2 border w-full h-8 shadow-orange-100 cursor-pointer transition-all hover:bg-[#E1611F] bg-orange-50 text-orange-600 font-extrabold hover:text-white px-6 py-2 rounded-md border-orange-600 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center"
                                            >
                                                <p className="text-xs">Recipe</p>
                                            </button>
                                        </Link>
                                        <button
                                            className="my-2 border w-full h-8 shadow-orange-100 cursor-pointer transition-all hover:bg-[#E1611F] bg-orange-50 text-orange-600 font-extrabold hover:text-white px-6 py-2 rounded-md border-orange-600 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center"
                                        >
                                            <p className="text-xs">Order</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="flex justify-center">
                <button
                    className={`my-2 border w-[20%] h-10 shadow-orange-100 cursor-pointer transition-all bg-[#E1611F] text-white px-6 py-2 rounded-lg border-orange-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center`}
                    onClick={loadMore}
                    disabled={disable}>
                    Load More
                </button>

            </div>

        </>
    );
};

export default Recipes;
