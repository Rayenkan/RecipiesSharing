import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatToCockToday = () => {
  const apiKey = '1';
  const [Meals, setMeals] = useState([]);
  const [category, setCategory] = useState("");
  const [count, setCount] = useState();

  useEffect(() => {
    const GetMeals = async () => {
      const m = [];
      for (let i = 0; i < 10; i++) {
        const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
        try {
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();

          m.push(data.meals[0]);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }
      setMeals(m);
    };

    GetMeals();
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
    <div className="md:h-[40vh] lg:h-[75vh] h-[30%] mt-12 bg-orange-50 w-[96%] ml-[2%] pt-10">
      <div>
        <p className="text-2xl font-extrabold">What To Cook Today </p>
        <p className="text-sm text-gray-600">Fast, Fresh, and FoolProof</p>
      </div>
      <Slider {...settings}>
        {Meals.map((Meal) => (
          <div className="flex flex-row items-center justify-center mt-4">
            <div className="h-[50%] flex items-center justify-center"> {/* Center the image */}
              <img src={Meal.strMealThumb} className="rounded w-full md:w-60 h-full" alt={Meal.strMeal} />
            </div>
            <div className="mx-2 h-[50%]">
              <p className="text-left text-md truncate font-mediumbold">{Meal.strMeal}</p>
              <p className="text-left text-xs">{Meal.strArea}</p>
              <div className="grid grid-flow-col">
                <button className="my-2 border w-full h-8 shadow-orange-100 cursor-pointer transition-all hover:bg-[#E1611F] bg-orange-50 text-orange-600 font-extrabold hover:text-white px-6 py-2 rounded-full border-orange-600 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center">
                  <p className="text-xs">Recipe</p>
                </button>
                <button className="my-2 border w-full h-8 shadow-orange-100 cursor-pointer transition-all hover:bg-[#E1611F] bg-orange-50 text-orange-600 font-extrabold hover:text-white px-6 py-2 rounded-full border-orange-600 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center">
                  <p className="text-xs">Order</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhatToCockToday;
