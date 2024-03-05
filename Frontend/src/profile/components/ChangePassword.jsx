import axios from "axios";
import React, { useState } from "react";

const ChangePassword = (props) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const handleChange = () => {
        console.log(oldPassword)
        console.log( props.password)
        if (oldPassword !== props.password) {
            setError("Old password is incorrect");
        } else if (!oldPassword || !newPassword || !confirmPassword) {
            setError("Please fill in all fields");
        } else if (newPassword !== confirmPassword) {
            setError("New password and confirm password must match");
        } else {
            // Clear error before making the request
            setError("");

            axios.put('http://localhost:8081/api/changePassword', {
                name: props.name,
                newPassword: newPassword,
                oldPassword: oldPassword
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    console.log(res.data.message);
                    setError(res.data.message)
                    // Handle success, if needed
                })
                .catch(error => {
                    console.error("Error updating password from client side:", error);
                    // Set the error state based on the error received
                    setError("Error updating password");
                })
                .finally(() => {
                    console.log("Password change logic executed!");
                    // Additional logic to execute regardless of success or failure
                });
        }
    };


    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <p className="text-2xl font-bold mb-4">Change Password</p>
            <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-[80%] max-w-md p-2 border rounded-md mb-2"
                placeholder="Your Old Password"
            />
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-[80%] max-w-md p-2 border rounded-md mb-2"
                placeholder="New Password"
            />
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-[80%] max-w-md p-2 border rounded-md mb-2"
                placeholder="Confirm Password"
            />
            <button
                type="button"
                onClick={handleChange}
                className="w-[80%] max-w-md p-2 bg-orange-500 text-white rounded-md cursor-pointer"
            >
                Submit
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default ChangePassword;
