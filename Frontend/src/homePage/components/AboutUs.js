import React from "react";
import img from '../imgs/plateimg.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const AboutUs =React.forwardRef((props, ref) =>{
    return (
        <div class="md:h-[40vh] lg:h-[70vh] h-[30%] mt-12 bg-orange-50 w-[96%] ml-[2%] pt-10 text-center " ref={ref}>
            <div class="">
                <p class='font-semibold text-2xl' >About Us</p>
            </div>
            <div class="grid grid-flow-col my-[2vh]">
                <div class="lg:w-[45vw] w-[90vw] h-fit lg:h-[70%]  bg-white lg:ml-[5%] mx-4 mt-[2vh]  shadow-lg rounded ">
                    <p class="font-normal text-left mx-3 pt-2">
                    Welcome to <hn class="text-orange-700" >FlavZ</hn> the ultimate destination for culinary enthusiasts and home cooks!
                    </p>
                    <div class="ml-6 text-left mt-[2vh] mb-4">
                        <p> <FontAwesomeIcon icon={faCheckCircle} className="text-green-700 text-left my-2" /> Implement a recommendation engine that suggests personalized recipes to users based on their past preferences</p>
                        <p><FontAwesomeIcon icon={faCheckCircle} className="text-green-700 text-left my-2" />Enhance the recipe pages with interactive cooking tutorials, step-by-step guides, and helpful cooking tips</p>
                        <p><FontAwesomeIcon icon={faCheckCircle} className="text-green-700 text-left my-2" />Offer exclusive discounts, promotions, or loyalty rewards to users who regularly engage with your platform.</p>
                    </div>
                </div>
                <div class=" ">
                    <img src={img} alt="image1" class="w-full h-[90%] hidden lg:block  pr-20"></img>
                </div>
            </div>
        </div>
    )
});
export default AboutUs ;