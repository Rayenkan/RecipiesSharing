import React ,{useState ,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatToCockToday=() =>{
    const apiKey='1';
    const [Meals, setMeals] = useState([]);
    const [apiUrl , setApiUrl]=useState("https://www.themealdb.com/api/json/v1/${apiKey}/latest.php");
    const [category ,setCategory]=useState("");
    
    useEffect(() => {
        console.log(apiUrl)
        const GetMeals = async (category) => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                setMeals(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        GetMeals(category);
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
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
        <div class="md:h-[40vh] lg:h-[80vh] h-[35%] mt-12 bg-orange-50 w-[96%] ml-[2%] pt-14">
            <div>
                <p class="text-2xl">What To Cock Today </p>
                <p class="text-sm text-gray-600">Fast ,Fresh , and FoolProof</p>
            </div>
            
            
        </div>
    )
};
export default WhatToCockToday;