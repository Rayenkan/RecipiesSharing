import React, { useState } from "react";
import Profile from "../components/profile";
import Nav from '../../homePage/components/nav';

const UserSettings = () => {
    const [pick, setPick] = useState("Profile");
    return (
        <div>
            <Nav />
            <div class='grid grid-flow-col h-[80vh] mt-8'>
                <div class="ml-5  w-full bg-gray-50 flex justify-center items-start ">
                    <ul class="my-4 pt-5 list-disc  pl-14 w-full ">
                        <li class="cursor-pointer" onClick={() => setPick("Profile")}>Profile</li>
                        <li class='py-4 cursor-pointer' onClick={() => setPick("changePassword")}>Change Password</li>
                        <li class="cursor-pointer">Liked Recipes</li>
                    </ul>
                </div>
                <div class="w-full">
                    {pick === "Profile" ? (<Profile />) : pick === "changePassword" ? (<ChangePassword />) : <LikedRecipies />}

                </div>
            </div>
        </div>
    )
}
export default UserSettings