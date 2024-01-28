import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
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
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };

  return (
    <div className="md:h-[25vh] lg:h-[70vh] h-[30%] mt-10 mb-12 bg-orange-50 w-[96%] ml-[2%] pt-10">
      <h2 className="text-center mt-8 md:mb-5 text-2xl font-extrabold">Popular Categories</h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.idCategory} className="w-52 h-36 rounded-full">
            <img src={category.strCategoryThumb} alt={category.strCategory} className="" />
            <p>{category.strCategory}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularCategories;
