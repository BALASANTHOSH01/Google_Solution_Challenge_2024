import { useState } from "react"

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
    const [userData,setUserData]=useState(false);
    const handleUserData
    return (
        <div className="absolute w-[350px] h-auto p-2 rounded-[10px] border border-gray-400 top-[30%] right-[20%] bg-white">
            <div>
                { userdata && UserDetails(userdata)}
            </div>

            <div className="text-[15px] text-gray-400 flex flex-col gap-2 mt-[3%]">
                <h1 className="text-black text-[18px]">Account</h1>
                <p>Settings</p>
                <p>Help</p>
                <p>Language</p>
            </div>

            <div className=" text-grey-400 text-[15px] flex flex-col gap-2 ">
                <h1 className="text-black text-[18px]">Manage</h1>
                <p>Posts & Activity</p>
            </div>
            <hr className="bg-gray-400 h-[1px] w-[90%]"/>
                <p>Signout</p>
        </div>
    )
}

export default Setting;