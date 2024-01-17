import { PiDotOutlineFill } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import userpost from "../../../assets/Images/HomeImage/paddy03.jpg";

const UserContent = ({profile,name,username}) => {
    const userprofile = profile;
    const Name = name;
    const userName = username;
    return (
        <div>
            <div className="my-[4%] sm:my-[8%]">
                {/**
                 * POST CONTAINER 
                 */}
                <div className="my-[4%] ml-[4%]">

                    <div className="block w-[60%] sm:w-[95%] h-full p-2 bg-white rounded-[10px] border border-gray-300 overflow-hidden">

                        {/**User Top Information */}
                        <div className="flex flex-row gap-2 items-start ">

                            {/**User Profile */}
                            <img src={userprofile} alt="user" className="w-[50px] rounded-[50%] h-[50px]" />

                            <div className="w-[90%] flex flex-row mx-[1%] justify-between items-center">

                                {/**User Name */}
                                <div className="flex flex-col items-center">
                                    <h1 className="text-[18px] font-semibold">{Name}</h1>
                                    <h2 className="text-gray-400 text-[12px]">{userName}</h2>
                                </div>

                                {/**Post setting */}
                                <div className="flex flex-col mr-[2%] text-xl cursor-pointer ">
                                    <HiOutlineDotsHorizontal className="text-gray-400 hover:text-green-600" />
                                </div>

                            </div>

                        </div>


                        {/**Post Description */}
                        <div className="flex flex-col mx-[1%] text-[13px]">
                            <p className="text-gray-600 my-[2%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reiciendis molestiae odio blanditiis placeat vero provident necessitatibus repellendus reprehenderit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt obcaecati unde temporibus porro sunt non architecto veritatis debitis maiores ea, id provident aut sed magni repellendus reiciendis vero. Ratione, accusantium? </p>
                        </div>


                        {/**User Image */}
                        <img src={userpost} alt="posting" className="p-1 rounded-[10px] h-[400px] w-[100%] " />


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