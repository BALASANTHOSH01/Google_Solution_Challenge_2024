import { HiHome } from "react-icons/hi2"; //Home Icon
import { MdOutlineOndemandVideo } from "react-icons/md"; //video icon
import { RiMessage2Fill } from "react-icons/ri"; //Message icon
import { FaCartArrowDown } from "react-icons/fa6"; //Buy icon
import user from "../../assets/Images/man.png"; //user Image
import { CiSearch } from "react-icons/ci"; //Seach icon
import { SiAddthis } from "react-icons/si"; //plus icon
import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
// import botIcon from "../../assets/Images/Chatbot/botIcon.jpg"; //bot icon
const Nav = () => {

    const [nav, setNav] = useState("home");

    const handleNav = (element) => {
        setNav(element);
    }
    return (
        <div >
            <div className="flex flex-row items-center justify-around sm:justify-between bg-white p-2 fixed top-0  w-[100%]  shadow-md">
                
                <div className=" sm:hidden flex flex-row justify-around w-[30%]">
                <div className="  flex flex-row gap-0  box-border overflow-hidden ">
                    <input type="search" id="search" placeholder="search" className=" p-2 px-3 border border-gray-400 rounded-l-[10px] w-[80%] focus:outline-none focus:border-green-500 focus:border-[1px]" />

                    <div className="border border-gray-400 px-5 p-2 bg-gray-200 rounded-r-[10px] cursor-pointer w-[20%] block mx-auto left-0  ">
                        <CiSearch className=" text-black text-2xl mx-auto" />
                    </div>

                </div>
                {/* <img src={botIcon} alt="botIcon" className="w-[42px] h-[42px] object-cover cursor-pointer border border-gray-500 rounded-[50%]" /> */}
                </div>

                <div className="flex flex-row sm:gap-7 w-[40%] sm:w-[90%] md:w-[60%] items-center justify-evenly sm:justify-between sm:ml-[2%]">

                    <Link to={"/"}>
                        {
                            nav === "home" ?
                                <div>
                                    <div className="flex flex-col text-center items-center text-black cursor-pointer" onClick={() => handleNav("home")}>
                                        <HiHome className=" text-[21px]" />
                                        <p className=" text-[13px]">Home</p>
                                    </div>
                                    <hr className="w-[100%] h-[2.5px] bg-black " />
                                </div>
                                : <div className="flex flex-col text-center items-center hover:text-green-100 cursor-pointer" onClick={() => handleNav("home")}>
                                    <HiHome className="text-gray-500 text-[22px]" />
                                    <p className="text-gray-500 text-[13px]">Home</p>
                                </div>

                        }
                    </Link>

                    {
                        nav === "training" ?  <div className="flex flex-col text-center items-center text-black cursor-pointer" onClick={() => handleNav("training")}>
                        <MdOutlineOndemandVideo className=" text-[23px]" />
                        <p className=" text-[13px] md:text-[11px]">Training</p>
                        <hr className="w-[100%] h-[2.5px] bg-black " />
                    </div>
                        : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("training")}>
                        <MdOutlineOndemandVideo className="text-gray-500 text-[23px]" />
                        <p className="text-gray-500 text-[13px] md:text-[11px]">Training</p>
                    </div>
                    }

                    {
                        nav==="market" ? <div className="flex flex-col text-center items-center text-black cursor-pointer" onClick={() => handleNav("market")}>
                        <FaCartArrowDown className=" text-[23px]" />
                        <p className=" text-[13px] md:text-[11px]">Market</p>
                        <hr className="w-[100%] h-[2.5px] bg-black " />
                    </div> : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("market")}>
                        <FaCartArrowDown className="text-gray-500 text-[23px]" />
                        <p className="text-gray-500 text-[13px] md:text-[11px]">Market</p>
                    </div>
                    }

                    {
                        nav==="message" ?
                        <div className="flex flex-col text-center items-center text-black" onClick={() => handleNav("message")}>
                        <RiMessage2Fill className=" text-[23px]" />
                        <p className=" text-[13px] md:text-[11px]">Message</p>
                        <hr className="w-[100%] h-[2.5px] bg-black " />
                    </div> : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("message")}>
                        <RiMessage2Fill className="text-gray-500 text-[23px]" />
                        <p className="text-gray-500 text-[13px] md:text-[11px]">Message</p>
                    </div>
                    }

                    {
                        nav==="post" ? <div className="flex flex-col text-center items-center text-black cursor-pointer" onClick={() => handleNav("post")}>
                        <SiAddthis className=" text-[20px]" />
                        <p className=" text-[13px] md:text-[11px] mt-[2px]">Post</p>
                        <hr className="w-[100%] h-[2.5px] bg-black " />
                    </div> : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("post")}>
                        <SiAddthis className="text-gray-500 text-[20px]" />
                        <p className="text-gray-500 text-[13px] md:text-[11px] mt-[2px]">Post</p>
                    </div>
                    }

                    {
                        nav==="user" ? <div className="flex flex-col text-center items-center text-black cursor-pointer" onClick={() => handleNav("user")}>
                        <img src={user} alt="user" className="w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] cursor-pointer relative"  />
                        <p className=" text-[13px] md:text-[11px] ">Profile</p>
                         <hr className="w-[100%] h-[2.5px] bg-black " />
                    </div> : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("user")}>
                        <img src={user} alt="user" className="w-[26px] h-[26px] sm:w-[25px] sm:h-[25px] cursor-pointer relative"  />
                        <p className=" text-gray-500 text-[13px] md:text-[11px] ">Profile</p>
                    </div>
                    }

                    
                    

                </div>
                <Link to={'/bot'} className="w-[20%]">
                   
                         <div className="flex flex-col text-center items-center text-green-600  cursor-pointer hover:text-gray-400" onClick={() => handleNav("bot")}>
                        <FaRobot className=" text-[20px]" />
                        <p className=" text-[13px] text-black md:text-[11px] mt-[2px] ">Bot</p>
                       
                    </div> 
                    </Link>
            </div>
        </div>
    )
}

export default Nav;