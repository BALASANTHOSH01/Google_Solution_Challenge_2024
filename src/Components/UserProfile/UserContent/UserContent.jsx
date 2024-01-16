import { useState } from "react";
import user from '../../../assets/Images/man.png';
import { PiDotOutlineFill } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import user01post from '../../../assets/Images/Posts/user01.jpg';

const UserContent = () => {
    const [contentselect, setContentSelect] = useState("posts");
    return (
        <div>
            <div className="my-[8%]">

                {/**Post Menu Items */}
                <div className="flex flex-row text-black font-semibold justify-around w-[100%] sm:text-[15px]">
                    {
                        contentselect === "posts" ?
                            <h1 onClick={() => setContentSelect("posts")} className="cursor-pointer">Posts<hr className="w-[100%] bg-green-500 h-[2px]" /></h1>
                            :
                            <h1 onClick={() => setContentSelect("posts")} className="cursor-pointer text-gray-400">Posts</h1>
                    }

                    {
                        contentselect === "clients" ?
                            <h1 onClick={() => setContentSelect("clients")} className="cursor-pointer" >Clients<hr className="w-[100%] bg-green-500 h-[2px] " /></h1>
                            :
                            <h1 onClick={() => setContentSelect("clients")} className="cursor-pointer text-gray-400">Clients</h1>
                    }

                    {
                        contentselect === "awards" ?
                            <h1 onClick={() => setContentSelect("awards")} className="cursor-pointer">Awards<hr className="w-[100%] bg-green-500 h-[2px] " /></h1>
                            :
                            <h1 onClick={() => setContentSelect("awards")} className="cursor-pointer text-gray-400">Awards</h1>
                    }

                    {
                        contentselect === "completed" ?
                            <h1 onClick={() => setContentSelect("completed")} className="cursor-pointer">Completed<hr className="w-[100%] bg-green-500 h-[2px] " /></h1>
                            :
                            <h1 onClick={() => setContentSelect("completed")} className="cursor-pointer text-gray-400">Completed</h1>
                    }

                </div>


                {/**
                 * POST CONTAINER 
                 */}

                <div className="my-[4%] ml-[4%]">

                    <div className="block mx-auto w-[60%] sm:w-[95%] h-full p-2 bg-white rounded-[10px] border border-gray-300 overflow-hidden">

                        {/**User Top Information */}
                        <div className="flex flex-row gap-3 items-start ">

                            {/**User Profile */}
                            <img src={user} alt="user" className="w-[8%] rounded-[50%]" />

                            <div className="w-[90%] flex flex-row mx-[1%] justify-between items-center">

                                {/**User Name */}
                                <div className="flex flex-col items-center">
                                    <h1 className="text-[18px] font-semibold">User&#160;Name</h1>
                                    <h2 className="text-gray-400 text-[12px]">@username</h2>
                                </div>

                                {/**Post setting */}
                                <div className="flex flex-col mr-[2%] text-xl">
                                    <HiOutlineDotsHorizontal className="text-gray-400" />
                                </div>

                            </div>

                        </div>


                        {/**Post Description */}
                        <div className="flex flex-col mx-[1%] text-[13px]">
                            <p className="text-gray-600 my-[2%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reiciendis molestiae odio blanditiis placeat vero provident necessitatibus repellendus reprehenderit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt obcaecati unde temporibus porro sunt non architecto veritatis debitis maiores ea, id provident aut sed magni repellendus reiciendis vero. Ratione, accusantium? </p>
                        </div> 


                        {/**User Image */}
                        <img src={user01post} alt="postimg" className="p-1 rounded-[10px] " /> 


                         {/**Date & Time */}
                        <div className="flex flex-row my-[1%] float-right mr-[1%]">  
                            <h2 className="text-gray-500 text-[15px]">6.30&#160;Am</h2>
                            <div className="flex flex-row gap-2 items-center">
                                <PiDotOutlineFill className="text-gray-500" />
                                <h2 className="text-gray-500 text-[15px]">Jan 16, 2024</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserContent;