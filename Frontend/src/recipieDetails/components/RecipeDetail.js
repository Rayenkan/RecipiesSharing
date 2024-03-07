import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { name } from "../../homePage/components/nav";

const RecipeDetail = (props) => {
  const id = props.data;
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.error("Error fetching data:", error.message);
      }
    };
    setLoading(false);

    getAllMealCategories();
  }, [id]);
  const handleLike = () => {
    axios
      .get("http://localhost:8081/userDetails", {
        params: {
          name: name,
        },
      })
      .then((res) => {
        console.log(res.data.userData)
        res.data.userData.likedRecipies =res.data.userData.likedRecipies+ id +" ";
        axios.put("http://localhost:8081/api/addRecipe" ,{
          name : name ,
          likeRecipie :res.data.userData.likedRecipies 
        })
        .then((res) =>{
          console.log(res)
        })
      });
  };

  return (
    <div>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="text-black text-2xl font-bold">Loading...</div>
        </div>
      ) : (
        <div className="flex flex-col-2 md:h-[40vh] lg:h-[80vh] h-[35%] m-5 bg-white ">
          <div className="w-[50%] p-5">
            {meal && (
              <img
                src={meal.strMealThumb}
                className="rounded w-[95%] h-full"
                alt={meal.strMeal}
              />
            )}
          </div>
          <div className="w-[50%] px-5 pt-10 text-left">
            <p className="text-5xl font-extrabold text-orange-600 truncate z-50 py-2">
              {meal.strMeal}
            </p>
            <ul className="list-disc">
              <li>
                <p className="text-sm pt-2 pl-2">
                  <span className="text-xl">Region : </span> {meal.strArea}
                </p>
              </li>
              <li>
                <p className="text-sm pt-5 pl-2">
                  <span className="text-xl">Tags : </span> {meal.strTags}
                </p>
              </li>
            </ul>
            {meal.strYoutube && (
              <iframe
                className="w-[80%] h-[48%] my-5"
                src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                  -11
                )}`}
                title="YouTube video"
                allowFullScreen
              ></iframe>
            )}
            {name === "" ? (
              <Link to="http://localhost:3000/Login">
              <button className="my-2  
                border 
                w-[40%]
                h-10                                 
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
                Login to Like
              </button>
            </Link>
            ) : (
              <button
                className="my-2  
                          border 
                          w-[40%]
                          h-10                                 
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
                onClick={handleLike}
              >
                Like
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
