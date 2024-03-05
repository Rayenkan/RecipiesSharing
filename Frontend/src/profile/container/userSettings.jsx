import React, { useEffect, useState } from "react";
import ChangePassword from "../components/ChangePassword";
import Nav from '../../homePage/components/nav';
import EditProfile from "../components/EditProfile";
import LikedRecipies from "../components/LikedRecipies";
import axios from "axios";
import { useParams } from "react-router-dom";


const UserSettings = () => {
    const [pick, setPick] = useState("Profile");
    const user = useParams()
    const [userData, setUserData] = useState([])
    const [imgUrl, setImgUrl] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg")
    const [password , setPassword] = useState("")
    useEffect(() => {
        axios.get('http://localhost:8081/userDetails', {
            params: {
                name: user.name
            }
        }).then(res => {
            setUserData(res.data.userData)
            setPassword(res.data.userData.password)
            console.log(res.data.userData)
            if (res.data.userData.img) {
                setImgUrl(res.data.userData.img);
            }
        }).then(err => console.log(err))
    }, [user.name]);

    return (
        <div>
            <Nav />
            <div class='grid grid-flow-col h-[60vh] mt-8'>
                <div class="ml-10 mr-[-10%]  w-[50%] bg-gray-50 flex flex-col text-2xl shadow-2xl border-gray-300 border-[0.1px] ">
                    <div class=" text-center w-full  text-white">
                        <div className="pfp" class=" flex h-[100%] w-[100%] mt-4 border-white rounded-lg ">
                            <img src={imgUrl} alt="" class="h-[60%] w-[30%]" /> <p className="name" class="w-full m-auto text-4xl font-mono font-meduim text-black "> {userData.username}</p>
                        </div>
                    </div>
                    <div>
                        <ul class="my-4 pt-5 list-disc  pl-14 w-full ">
                            <li class="cursor-pointer" onClick={() => setPick("ChangePassword")}>ChangePassword</li>
                            <li class='py-4 cursor-pointer' onClick={() => setPick("EditProfile")}>EditProfile</li>
                            <li class="cursor-pointer">Liked Recipes</li>
                        </ul>
                    </div>
                </div>
                <div class="w-[100%] shadow-2xl border-gray-300 border-[0.1px] ml-[-25%]">
                    {console.log(password)}
                    {pick === "EditProfile" ? (<EditProfile />) : pick === "ChangePassword" ? (<ChangePassword name={user.name} password={password} />) : <LikedRecipies />}

                </div>
            </div>
        </div>
    )
}
export default UserSettings