import React from "react";
import plate2 from './imgs/plate2.svg'

const ReadyToCock =() =>{
    return (
        <div class="md:h-[40vh] lg:h-fit h-[30%] mt-20 w-[100%]  grid grid-flow-col bg-orange-50">
            <div clas="w-[40vh]">
                <img src={plate2} class="hidden md:block w-[30vw] ml-[20%] mt-[10%] h-[80%]" alt="img"></img>
            </div>
            <div clas="w-[60vw] ">
                <div class="w-[90%] bg-white mt-[10%] md:mt-[20%] mb-[5%] h-fit py-6">
                    <p class="text-lg">Ready To Cock ?</p>
                    <p class="my-2 text-sm pb-2">Get our latest Recipies and our expert tips right in your inbox</p>
                    <div clas="mb-8">
                        <input type="text" placeholder="Enter your Email" class="bg-gray-100 shadow-lg h-8 rounded w-[75%]"  /><button class="rounded-md bg-orange-600 h-8 w-fit  text-white">sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReadyToCock;