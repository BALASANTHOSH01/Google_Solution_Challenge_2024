import { HiHome } from "react-icons/hi2"; //Home Icon
import { MdOutlineOndemandVideo } from "react-icons/md"; //video icon
import { IoIosPeople } from "react-icons/io"; //People icon
import { FaCartArrowDown } from "react-icons/fa6"; //Buy icon
import user from "../../assets/Images/man.png"; //user Image
import { CiSearch } from "react-icons/ci"; //Seach icon
import { RiMessage2Fill } from "react-icons/ri";//Message icon
import { FaRobot } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";

// import botIcon from "../../assets/Images/Chatbot/botIcon.jpg"; //bot icon
const Nav = () => {

    const location = useLocation();
    const {messageid,peopleid,mobilemessageid}=useParams();

    useEffect(()=>{
        const Path = location.pathname;
        switch (Path){
            case "/":
                setNav("home");
                break;
            case "/message":
            case `/message/${messageid}`:
            case `/message/mobile/${mobilemessageid}`:
                setNav("message");
                break;
            case `/people/${peopleid}`:
            case "/people":
                setNav("people");
                break;
            case "/market":
            case `/market/additem`:
            case `/market/cart`:
            case `/market/buy`:
                setNav("market");
                break;
            case "/training":
            case `/training/event`:
                setNav("training");
                break;
            case "menu":
                setNav("menu");
                break;
        }

    },[location.pathname])

    const [nav, setNav] = useState("home");
    const handleNav = (element) => {
        setNav(element);
    }

    return (
        <div >
            <div className="flex flex-row items-center justify-around sm:justify-between bg-white p-2 fixed top-0 w-[100%] z-50 shadow-md">

                <div className=" sm:hidden flex flex-row justify-around w-[30%]">
                    <div className="  flex flex-row  items-center box-border  border overflow-hidden border-gray-400 rounded-[10px] ">
                        <CiSearch className=" text-gray-500 text-[20px] ml-[2%] mx-auto" />
                        <input type="search" id="search" placeholder="search" className=" p-2 px-3 w-[90%] ml-[2%] focus:outline-none focus:border-green-500 focus:border-[1px] rounded-[10px]" />

                    </div>
                </div>

                <div className="flex flex-row sm:gap-7 w-[40%] sm:w-[100%] md:w-[70%] items-center justify-evenly sm:justify-between sm:ml-[2%]">

                    <Link to={"/"}>
                        {
                            nav === "home" ?
                                <div>
                                    <div className="flex flex-col text-center items-center text-black cursor-pointer"  onClick={() => handleNav("home")}>
                                        <HiHome className=" text-[21px]" />
                                        <p className=" text-[13px]">Home</p>
                                    </div>
                                    <hr className="w-[100%] h-[2.5px] bg-black " />
                                </div>
                                : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("home")}>
                                    <HiHome className="text-gray-500 text-[22px]" />
                                    <p className="text-gray-500 text-[13px]">Home</p>
                                </div>

                        }
                    </Link>

                    <Link to={"/training"}>
                    {
                        nav === "training" ? <div className="flex flex-col text-center items-center text-black cursor-pointer" onClick={() => handleNav("training")}>
                            <MdOutlineOndemandVideo className=" text-[23px]" />
                            <p className=" text-[13px] md:text-[11px]">Training</p>
                            <hr className="w-[100%] h-[2.5px] bg-black " />
                        </div>
                            : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("training")}>
                                <MdOutlineOndemandVideo className="text-gray-500 text-[23px]" />
                                <p className="text-gray-500 text-[13px] md:text-[11px]">Training</p>
                            </div>
                    }
                    </Link>

                    <Link to={"/market"}>
                    {
                        nav === "market" ? <div className="flex flex-col text-center items-center text-black cursor-pointer" onClick={() => handleNav("market")}>
                            <FaCartArrowDown className=" text-[23px]" />
                            <p className=" text-[13px] md:text-[11px]">Market</p>
                            <hr className="w-[100%] h-[2.5px] bg-black " />
                        </div> : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("market")}>
                            <FaCartArrowDown className="text-gray-500 text-[23px]" />
                            <p className="text-gray-500 text-[13px] md:text-[11px]">Market</p>
                        </div>
                    }
                    </Link>

                    <Link to={"/people"}>
                    {
                        nav === "people" ?
                            <div className="flex flex-col text-center items-center text-black" onClick={() => handleNav("people")}>
                                <IoIosPeople className=" text-[23px]" />
                                <p className=" text-[13px] md:text-[11px]">People</p>
                                <hr className="w-[100%] h-[2.5px] bg-black " />
                            </div> : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("people")}>
                                <IoIosPeople className="text-gray-500 text-[23px]" />
                                <p className="text-gray-500 text-[13px] md:text-[11px]">People</p>
                            </div>
                    }
                    </Link>

                    <Link to={"/message"}>
                    {
                        nav === "message" ? <div className="flex flex-col text-center items-center text-black cursor-pointer" onClick={() => handleNav("message")}>
                            <RiMessage2Fill className=" text-[20px]" />
                            <p className=" text-[13px] md:text-[11px] mt-[2px]">Message</p>
                            <hr className="w-[100%] h-[2.5px] bg-black " />
                        </div> : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("message")}>
                            <RiMessage2Fill className="text-gray-500 text-[20px]" />
                            <p className="text-gray-500 text-[13px] md:text-[11px] mt-[2px]">Message</p>
                        </div>
                    }
                    </Link>

                    <div className="sm:hidden">
                        {
                            nav === "user" ? <div className="flex flex-col text-center items-center text-black cursor-pointer" onClick={() => handleNav("user")}>
                                <img src={user} alt="user" className="w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] cursor-pointer relative" />
                                <p className=" text-[13px] md:text-[11px] ">Profile</p>
                                <hr className="w-[100%] h-[2.5px] bg-black " />
                            </div> : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("user")}>
                                <img src={user} alt="user" className="w-[26px] h-[26px] sm:w-[25px] sm:h-[25px] cursor-pointer relative" />
                                <p className=" text-gray-500 text-[13px] md:text-[11px] ">Profile</p>
                            </div>
                        }
                    </div>

                    {
                        nav === "usermenu" ? <div className="sm:block hidden items-center relative cursor-pointer" onClick={() => handleNav("usermenu")}>
                            <CiMenuFries className=" text-[22px] text-black" />
                            <p className=" text-gray-500 text-[13px] md:text-[11px]">Menu</p>
                            <hr className="w-[100%] h-[2.5px] bg-black " />

                            <div className="flex flex-col p-2 bg-white rounded-[10px] absolute top-[60px] right-[5%] border">

                               <Link to={"/userprofile"}>
                               <p className="text-[17px] text-gray-600 py-3 px-10 my-[4px] hover:bg-gray-200 rounded-[10px]">User</p>
                               </Link>
                                
                                <Link to={"/bot"}>
                                <p className="text-[17px] text-gray-600 py-3 px-10 my-[4px] hover:bg-gray-200 rounded-[10px]">Bot</p>
                                </Link>

                                <Link to={"/AuthSignUp"}>
                                <p className="text-[17px] text-gray-600 py-3 px-10 my-[4px] hover:bg-gray-200 rounded-[10px]">Signup</p>
                                </Link>

                                <Link to={"/about"}>
                                <p className="text-[17px] text-gray-600 py-3 px-10 my-[4px] hover:bg-gray-200 rounded-[10px]">About</p>
                                </Link>
                            </div>
                        </div> : <div className="sm:block hidden items-center relative cursor-pointer" onClick={() => handleNav("usermenu")}>
                            <CiMenuFries className=" text-[22px] text-gray-500" />
                            <p className=" text-gray-500 text-[13px] md:text-[11px]">Menu</p>
                        </div>
                    }

                </div>
                <Link to={'/bot'} className="sm:w-[20%]  sm:hidden">

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