import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recipes = (props) => {
    const temp = props.data || 'Beef';
    const [category, setCategory] = useState(temp)
    const [area , setArea] = useState("")
    const [ingredient , setIngredient] = useState("")
    const [limit, setLimit] = useState(10);
    const [apiUrl, setApiUrl] = useState(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}&limit=${limit}`)
    const [Meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [areas, setAreas] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const getMeals = async () => {
            try {
                console.log(apiUrl)
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                const limitedMeals = responseData.meals.slice(0, limit);
                setMeals(limitedMeals);
                console.log(Meals)
                console.log(Meals)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setLoading(false);
            }
        };


        getMeals();
    }, [category, area, ingredient, limit , apiUrl , Meals]);
    useEffect(() => {
        const getFilters = async () => {
            try {
                setLoading(false)
                const urlCategories = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
                const urlAreas = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
                const urlIngredients = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

                const responseCategories = await fetch(urlCategories);
                const categories = await responseCategories.json();
                setCategories(categories.meals);

                const responseArea = await fetch(urlAreas);
                const areas = await responseArea.json();
                setAreas(areas.meals)

                const responseIngredients = await fetch(urlIngredients);
                const ingredients = await responseIngredients.json();
                setIngredients(ingredients.meals);
                setLoading(true)
            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setLoading(false);
            }
        };


        getFilters();
    }, []);
    const loadMore = () => {
        setLimit(limit + 10);
        setLoading(true);
    };
    const handleCategoryChange = (selectedCategory) => {
        const newApiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}&limit=${limit}`;
        setApiUrl(newApiUrl);
        setCategory(selectedCategory);
        setLoading(true);
    }
    const handleAreaChange=(selectedArea) =>{
        const newApiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}&limit=${limit}`;
        setApiUrl(newApiUrl)
        setArea(selectedArea)
        setLoading(true)
    }
    const handleIngredientChange=(selectedIngredient) =>{
        const newApiUrl =  `https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredient}&limit=${limit}`;
        setApiUrl(newApiUrl)
        setIngredient(selectedIngredient)
        setLoading(true)
    }


    return (
        <>
            {loading ? (
                <div class='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50'>
                    <span class='text-4xl mr-2 font-extrabold  '>Loading</span>
                    <div class='h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.3s] mr-2'></div>
                    <div class='h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.15s] mr-2'></div>
                    <div class='h-6 w-6 bg-black rounded-full animate-bounce mr-2'></div>
                </div>
            ) : (
                <div className="w-[90vw] h-fit ml-[5vw] my-2">
                    <p class="text-center text-4xl font-mediumbold py-5 text-orange-600">Browse Our Recipe Collection</p>
                    <p class="text-center text-xl font-mediumbold mb-5">We know the deal. We feel your pain. Here are our superstar workhorse recipes, designed and tested to help you cook a great family meal.</p>

                    <div>
                        <div class="border-2 my-2 py-4 text-center">
                            <span class="text-orange-700 font-semibold" >By Categorie : </span>
                            {categories && (
                                <select onChange={(e) => handleCategoryChange(e.target.value)} value={category} class="w-fit">
                                    {categories.map((c) => (
                                        <option key={c.strCategory} value={c.strCategory}>
                                            {c.strCategory}
                                        </option>
                                    ))}
                                </select>
                            )}
                            <span class="ml-8 text-orange-700 font-semibold">By Main ingredient : </span>
                            {ingredients && (
                                <select onChange={(e) => handleIngredientChange(e.target.value)} value={ingredient} class="w-fit mr-8" >
                                    {ingredients.map((i) => (
                                        <option key={i.strIngredient} value={i.strIngredient}>
                                            {i.strIngredient}
                                        </option>
                                    ))}
                                </select>
                            )}
                            <span class="text-orange-700 font-semibold">By Area : </span>
                            {areas && (
                                <select onChange={(e) => handleAreaChange(e.target.value)} value={area} class="w-fit" >
                                    {areas.map((a) => (
                                        <option key={a.strArea} value={a.strArea}>
                                            {a.strArea}
                                        </option>
                                    ))}
                                </select>
                            )}
                                
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {Meals.map((Meal) => (
                            <div
                                key={Meal.idMeal}
                                className="flex flex-col items-center justify-center mt-4 hover:cursor-pointer hover:scale-105 transform transition duration-500"
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
                    onClick={loadMore}>
                    Load More
                </button>

            </div>

        </>
    );
};

export default Recipes;
