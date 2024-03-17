import React, { useEffect, useState } from "react";
import ChangePassword from "../components/ChangePassword";
import Nav from "../../homePage/components/nav";
import LikedRecipies from "../components/LikedRecipies";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserSettings = () => {
  const [pick, setPick] = useState("LikedRecipies");
  const user = useParams();
  const [userData, setUserData] = useState([]);
  const [imgUrl, setImgUrl] = useState(
    "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
  );
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    axios
      .get("http://localhost:8081/userDetails", {
        params: {
          name: user.name,
        },
      })
      .then((res) => {
        setUserData(res.data.userData);
        setPassword(res.data.userData.password);
        if (typeof res.data.userData.img === String) {
          setImgUrl(res.data.userData.img);
        }
      })
      .catch((err) => console.log(err));
  }, [user.name]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="container mx-auto py-8 px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-white p-4 rounded-lg shadow">
            <div className="text-center mb-4">
              <img src={imgUrl} alt="Profile Picture" className="w-32 h-32 rounded-full mx-auto" />
              <p className="text-lg font-bold mt-4">{userData.username}</p>
            </div>
            <ul className="text-gray-700">
              <li className="cursor-pointer py-2 border-b border-gray-200" onClick={() => setPick("ChangePassword")}>Change Password</li>
              <li className="cursor-pointer py-2 border-b border-gray-200" onClick={() => setPick("LikedRecipies")}>Liked Recipes</li>
            </ul>
          </div>
          <div className="md:col-span-2 bg-white p-4 rounded-lg shadow">
            {pick === "ChangePassword" ? (
              <ChangePassword name={user.name} password={password} />
            ) : pick === "LikedRecipies" ? (
              <LikedRecipies userData={userData} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
