import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";





function Profile() {
    const user = useParams()
    const [userData, setUserData] = useState([])
    const [imgUrl, setImgUrl] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg")
    useEffect(() => {
        axios.get('http://localhost:8081/userDetails', {
            params: {
                name: user.name
            }
        }).then(res => {
            console.log(setUserData(res.data.userData));
        }).then(err => console.log(err))
    }, []);
    return (
        <div class="no-scrollbar overflow-hidden font-sans">
            <div class="bg-orange-50 w-full border-orange-500 rounded-lg flex flex-row ">
                <div class="h-[80vh] text-center w-full flex flex-col bg-orange-500 text-white">
                    <div className="pfp" class=" flex h-[25%] w-full m-2 border-white rounded-lg ">
                        <img src={imgUrl} alt="" srcset="" class="h-[100%] w-[30%]" /> <p className="name" class="w-full m-auto text-4xl font-mono font-semibold "> {userData.username}</p>
                    </div>
                    <hr class="my-2" />
                    <div className="details " class="mb-2  pl-2 flex justify-center items-center">
                        <table class="text-left text-xl ">
                            <tr>
                                <td>Email :</td>
                                <td>{userData.email}</td>
                            </tr>
                            <tr>
                                <td>age :</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>lacation :</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>education :</td>
                                <td></td>
                            </tr>

                        </table>

                    </div>
                    <div>
                        <p className="personality" class="text-xl pt-4">Liked recipies</p>
                        <hr />
                        <div className="personalities">
                            
                        </div>
                    </div>
                    <br /><br />
                    <div className="personality">

                    </div>
                </div>

                <div class="bg-orange-50 text-black">
                    <div className="about me " class=" border-orange-600 "  >
                        <p>

                        </p>
                    </div>
                    <div className="recipies">

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;
