import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const UserDetails = (userdata) => {
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-row gap-2 items-start w-[100%]">
                <div>
                    <img src="" alt="userprofile" className="w-[50px] h-[50px] rounded-[50%] object-center" />
                </div>
                <div>
                    <h1>{userdata.name || "UserName"}</h1>
                    <p>{userdata.role || "Agricultural expert | Enviromental expert"}</p>
                </div>
            </div>

            <div className="w-[100%] text-center">
                <button className="text-[18px] w-[100%] font-medium py-2 px-3 rounded-[25px] bg-transparent border-[2px] hover:border-none text-center border-green-500 text-green-500 hover:bg-green-500 hover:text-white">view profile</button>
            </div>
        </div>
    )
}


const Setting = (userdata) => {
    const [userData, setUserData] = useState(false);
    const handleUserData = () => {
        userData && setUserData(prev => !prev);
    }
    handleUserData();
    return (
        <div className="absolute w-[300px] h-auto p-2 rounded-[10px] border border-gray-400 top-[130%] right-[15%] bg-white pl-[2%]">
            <div>
                {userData && UserDetails(userdata)}
            </div>

            <div className="text-[15px] text-gray-400 flex flex-col gap-2 my-[3%]">
                <h1 className="text-black text-[16px] font-medium">Account</h1>
                <p className=" cursor-pointer">Settings</p>
                <p className=" cursor-pointer">Help</p>
                <p className=" cursor-pointer">Language</p>
            </div>

            <div className="text-[15px] text-gray-400 flex flex-col gap-2 my-[3%]">
                <h1 className="text-black text-[16px] font-medium">Manage</h1>
                <p className=" cursor-pointer">Posts & Activity</p>
            </div>
            <hr className="bg-gray-400 h-[1px] w-[90%]" />
            <p className=" cursor-pointer text-gray-400 text-[15px] my-[2%]">Signout</p>

            <div className="flex flex-row gap-2 items-center text-[15px] text-gray-400">
                <p>Create new account : </p>
                <Link to={"/AuthSignUp"} className="text-green-500">
                Register
                </Link>
            </div>
        </div>
    )
}

export default Setting;