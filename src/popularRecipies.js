import React from "react";
import './index.css';
import food1 from './imgs/food1.avif';
import food2 from './imgs/food2.avif';




const popularRecipies=() =>{
    return (
        <div class="flex flex-col-2 h-[80vh] mt-12 md:my-12 bg-opacity-20   ">
            <div class="w-[60%] pl-8">
                <p class="text-black text-lg md:text-4xl w-full h-fit md:my-5 my-2 text-left ">let's start cooking with </p>
                <p class="uppercase text-2xl md:text-7xl w-full text-left text-[#E1611F] md:my-5 my-2 ">Popular Recipies</p>
                <p class="text-black-500 text-sm w-full h-fit  text-left  md:my-5 my-2 md:max-w-[50%]">Welcome to FlavZ, your ultimate destination for culinary inspiration and mouthwatering recipes! Whether you're a seasoned chef or a kitchen novice, our food haven is designed to spark creativity.</p>
                <button class="my-2  
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
                                ">
                                    Discover Recipies   
                    </button>
            </div>
            <div class="md:w-[50%] w-[30%] md:ml-[5%] relative">
                <img src={food2}  class=" invisible md:visible w-48 h-48 rounded-full ml-52 " />
                <div class= " invisible md:visible absolute w-52 h-52 rounded-full left-52 top-0 bg-transparent ring-2 ring-orange-600"></div>
                
                <img src={food1}  class=" md:w-72 md:h-72 w-32 h-32 rounded-full  ml-4 absolute md:reltative bottom-14 md:top-44 md:bottom-5 " />
                <div class="absolute md:w-80 md:h-80 w-36 h-36 rounded-full  md:top-40 top-24  bg-transparent ring-2 ring-orange-600"></div>
            </div>


        </div>
    )
};
export default popularRecipies ;