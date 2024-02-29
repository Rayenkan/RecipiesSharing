import React, { useState } from "react";
import Profile from "../components/profile";
import Nav from '../../homePage/components/nav';
import EditProfile from "../components/EditProfile";
import LikedRecipies from "../components/LikedRecipies";

const UserSettings = () => {
    const [pick, setPick] = useState("Profile");
    return (
        <div>
            <Nav />
            <div class='grid grid-flow-col h-[60vh] mt-8'>
                <div class="ml-10 mr-[-10%]  w-[50%] bg-gray-50 flex justify-center items-start text-2xl shadow-2xl border-gray-300 border-[0.1px] ">
                    <ul class="my-4 pt-5 list-disc  pl-14 w-full ">
                        <li class="cursor-pointer" onClick={() => setPick("Profile")}>Profile</li>
                        <li class='py-4 cursor-pointer' onClick={() => setPick("EditProfile")}>EditProfile</li>
                        <li class="cursor-pointer">Liked Recipes</li>
                    </ul>
                </div>
                <div class="w-[100%] shadow-2xl border-gray-300 border-[0.1px] ml-[-25%]">
                    {pick === "Profile" ? (<Profile />) : pick === "EditProfile" ? (<EditProfile />) : <LikedRecipies />}

                </div>
            </div>
        </div>
    )
}
export default UserSettings