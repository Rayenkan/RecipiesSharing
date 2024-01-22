import React from "react";
import './index.css';
import food1 from './imgs/food1.avif';
import food2 from './imgs/food2.avif';




const popularRecipies=() =>{
    return (
        <div class="flex flex-col-2 h-[60vh] my-16 bg-opacity-20 bg-[url('./imgs/bgPopularRecipies.jpg')] bg-no-repeat bg-cover ">
            <div class="w-[50%] my-16 pl-8">
                <p class="text-black text-lg w-full h-fit my-2 text-left">let's start cooking with </p>
                <p class="text-black uppercase text-2xl w-full text-left">Popular Recipies</p>
                <p class="text-black-500 text-sm w-full h-fit my-2 text-left">Welcome to Delicious Bites, your ultimate destination for culinary inspiration and mouthwatering recipes! Whether you're a seasoned chef or a kitchen novice, our food haven is designed to spark creativity.</p>
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
                                active:translate-y-[2px]">
                                    Discover Recipies   
                    </button>
            </div>
            <div class="w-[50%] ml-[10%]  ">
                <img src={food2} alt="Food 2" class="w-36 h-36 rounded-full float-[60vw] ml-36 mt-5" />
                <img src={food1} alt="Food 1" class="w-48 h-48 rounded-full flozt-[50%] ml-14"/>
            </div>  

        </div>
    )
};
export default popularRecipies ;