import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

const LikedRecipies = (props) => {
  const [Meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const m = [];
      try {
        const Recipes = props.userData.likedRecipies.split(" ");
        for (const id of Recipes) {
          if (id !== "") {
            const response = await fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );

            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            m.push(data.meals[0]);
          }
        }
        console.log(m);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setMeals(m);
        setLoading(false);
      }
    };

    fetchData();
  }, [props.userData.likedRecipies]);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplaySpeed: 3500,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="md:h-[40vh] lg:h-[85vh] h-[30%] mt-5 bg-white w-full max-w-xl ml-[2%] pt-10">
      <div>
        <p className="text-2xl font-extrabold">Recipies you liked : </p>
      </div>

      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <span className="text-4xl mr-2 font-extrabold">Loading</span>
          <div className="h-6 w-6 bg-black rounded-full animate-bounce" style={{animationDelay: "-0.3s", marginRight: "2px"}}></div>
          <div className="h-6 w-6 bg-black rounded-full animate-bounce" style={{animationDelay: "-0.15s", marginRight: "2px"}}></div>
          <div className="h-6 w-6 bg-black rounded-full animate-bounce"></div>
        </div>
      ) : (
        <Slider {...settings} className="text-black ml-5">
          {Meals.map((Meal) => (
            <div
              key={Meal.idMeal}
              className="flex flex-row items-center m-auto justify-center mt-4 hover:scale-105 transform transition duration-500 mb-2"
            >
              <div className="h-[50%] flex items-center justify-center">
                <img
                  src={Meal.strMealThumb}
                  className="rounded w-[95%] h-full"
                  alt={Meal.strMeal}
                />
              </div>
              <div className="mx-2 h-[50%]">
                <p className="text-left text-md truncate font-mediumbold">
                  {Meal.strMeal}
                </p>
                <p className="text-left text-xs">{Meal.strArea}</p>
                <div className="grid grid-flow-col">
                  <Link to={`/Recipe/${Meal.idMeal}`}>
                    <button className="my-2 border w-full h-8 shadow-orange-100 cursor-pointer transition-all hover:bg-[#E1611F] bg-orange-50 text-orange-600 font-extrabold hover:text-white px-6 py-2 rounded-full border-orange-600 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center">
                      <p className="text-xs">Recipe</p>
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default LikedRecipies;
