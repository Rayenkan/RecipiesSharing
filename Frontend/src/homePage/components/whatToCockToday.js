// WhatToCockToday.js
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const WhatToCockToday = () => {
  const [Meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMeals = async () => {
      const m = [];
      try {
        for (let i = 0; i < 10; i++) {
          const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          m.push(data.meals[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setMeals(m);
        setLoading(false);
      }
    };

    getMeals();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <div class="md:h-[40vh] lg:h-[85vh] h-[30%] mt-5  bg-white w-[96%] ml-[2%] pt-10">
      <div>
        <p class="text-2xl font-extrabold">What To Cook Today </p>
        <p class="text-sm text-gray-600">Fast, Fresh, and FoolProof</p>
      </div>

      {loading ? (
        <div class='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50'>
          <span class='text-4xl mr-2 font-extrabold  '>Loading</span>
          <div class='h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.3s] mr-2'></div>
          <div class='h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.15s] mr-2'></div>
          <div class='h-6 w-6 bg-black rounded-full animate-bounce mr-2'></div>
        </div>
      ) : (
        <Slider {...settings}>
          {Meals.map((Meal) => (
            <div
              key={Meal.idMeal}
              class="flex flex-row items-center justify-center mt-4 hover:scale-105 transform transition duration-500 mb-2"
            >
              <div class="h-[50%] flex items-center justify-center">
                <img src={Meal.strMealThumb} class="rounded w-[95%] h-full" alt={Meal.strMeal} />
              </div>
              <div class="mx-2 h-[50%]">
                <p class="text-left text-md truncate font-mediumbold">{Meal.strMeal}</p>
                <p class="text-left text-xs">{Meal.strArea}</p>
                <div class="grid grid-flow-col">
                  <Link to={`/Recipe/${Meal.idMeal}`}>
                    <button
                      class="my-2 border w-full h-8 shadow-orange-100 cursor-pointer transition-all hover:bg-[#E1611F] bg-orange-50 text-orange-600 font-extrabold hover:text-white px-6 py-2 rounded-full border-orange-600 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center"
                    >
                      <p class="text-xs">Recipe</p>
                    </button>
                  </Link>
                  <button
                    class="my-2 border w-full h-8 shadow-orange-100 cursor-pointer transition-all hover:bg-[#E1611F] bg-orange-50 text-orange-600 font-extrabold hover:text-white px-6 py-2 rounded-full border-orange-600 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center"
                  >
                    <p class="text-xs">Order</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default WhatToCockToday;
