import { HiHome } from "react-icons/hi2"; //Home Icon
import { MdOutlineOndemandVideo } from "react-icons/md"; //video icon
import { IoIosPeople } from "react-icons/io"; //People icon
import { FaCartArrowDown } from "react-icons/fa6"; //Buy icon
import user from "../../assets/Images/man.png"; //user Image
import { CiSearch } from "react-icons/ci"; //Seach icon
import { RiMessage2Fill } from "react-icons/ri";//Message icon
import { FaRobot } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { SiAlwaysdata as News } from "react-icons/si";
import MarketSideNav from "../MarketComponents/MarketSideNav/MarketSideNav";
import TrainingNav from "../TrainingComponent/TrainingNav/TrainingNav";
import { IoSettingsSharp as SettingIcon } from "react-icons/io5";
import { MdOutlineArrowDropDown as DropdownIcon } from "react-icons/md";
import Setting from "../NavSetting/Setting";
import { RxCross2 as CrossIcon } from "react-icons/rx";


const Nav = () => {

    const location = useLocation();
    const Navigate = useNavigate();
    const { messageid, peopleid, mobilemessageid } = useParams();

    {/** handle the Main Nav elements */ }
    const [nav, setNav] = useState("home");
    const handleNav = (element) => {
        setNav(element);
    }

    {/** Show the SubNav */ }
    const [subnav, setSubNav] = useState(false);
    const ShowNav = () => {
        setSubNav(!subnav);
    };

    const [profileSetting, setProfileSetting] = useState(false);
    useEffect(() => {
        if (nav !== "user") {
            setProfileSetting(false)
        }
    }, [nav]);
    const handleProfileSetting = () => {
        setProfileSetting((prev) => !prev);

    };

    const [mobileMenu, setMobileMenu] = useState(false);



    {/** Avoid too many re-rendering & Page reload */ }
    const NavToFun = () => {
        location.pathname === `/training/event` ? null : `/training/event`;
        location.pathname === `/market/buy` ? null : `/market/buy`;
    }

    {/** Show SubNav depends upon the active NavItem */ }
    const showSubNav = () => {
        switch (nav) {
            case "market":
                return subnav && <MarketSideNav />;
            case "training":
                return subnav && <TrainingNav />;
        }
    }

    {/** Set NavItem active depends upon the pathname of the application */ }
    useEffect(() => {
        const Path = location.pathname;
        switch (Path) {
            case "/":
                setNav("home");
                break;
            case `/news`:
                setNav("news");
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
            case "/training/training":
            case `/training/event`:
                setNav("training");
                break;
            case "menu":
                setNav("menu");
                break;
        }

    }, [location.pathname, messageid, mobilemessageid, peopleid]);

    {/** Navigate to the page that which NavItem is selected */ }
    useEffect(() => {
        setSubNav(false);
        switch (nav) {
            case "market":
                Navigate("/market/buy");
                break;
            case "training":
                Navigate("/training");
                break;

        }
    }, [nav]);


    return (
        <div className=" bg-white p-2 fixed top-0 w-[100%] z-50 shadow-md">
            <div className="flex flex-row items-center justify-around sm:justify-between">

                <div className=" sm:hidden justify-evenly flex flex-row w-[30%]">

                    {/** News */}
                    <Link to={"/news"}>
                        {
                            nav === "news" ?
                                <div>
                                    <div className="flex flex-col text-center items-center text-black cursor-pointer" onClick={() => handleNav("news")}>
                                        <News className=" text-[21px]" />
                                        <p className=" text-[13px]">News</p>
                                    </div>
                                    <hr className="w-[100%] h-[2.5px] bg-black " />
                                </div>
                                : <div className="flex flex-col text-center items-center cursor-pointer" onClick={() => handleNav("news")}>
                                    <News className="text-green-600 text-[22px]" />
                                    <p className="text-green-600 text-[13px]">News</p>
                                </div>
                        }
                    </Link>

                    {/** search bar */}
                    <div className="  flex flex-row  items-center box-border  border overflow-hidden border-gray-400 rounded-[10px] ">
                        <CiSearch className=" text-gray-500 text-[20px] ml-[2%] mx-auto" />
                        <input type="search" id="search" placeholder="search" className=" p-2 px-3 w-[90%] ml-[2%] focus:outline-none focus:border-green-500 focus:border-none rounded-[10px]" />
                    </div>

                </div>

                <div className="flex flex-row sm:gap-7 w-[40%] sm:w-[100%] md:w-[70%] items-center justify-evenly sm:justify-between sm:ml-[2%]">

                    {/** Home */}
                    <Link to={"/"} onClick={() => handleNav("home")}>
                        {
                            nav === "home" ?
                                <div>
                                    <div className="flex flex-col text-center items-center text-black cursor-pointer">
                                        <HiHome className=" text-[21px]" />
                                        <p className=" text-[13px]">Home</p>
                                    </div>
                                    <hr className="w-[100%] h-[2.5px] bg-black " />
                                </div>
                                : <div className="flex flex-col text-center items-center cursor-pointer">
                                    <HiHome className="text-gray-500 text-[22px]" />
                                    <p className="text-gray-500 text-[13px]">Home</p>
                                </div>
                        }
                    </Link>

                    {/**Training */}
                    <Link to={NavToFun} onClick={() => handleNav("training")} onDoubleClick={() => ShowNav()}>
                        {
                            nav === "training" ? <div className="flex flex-col text-center items-center text-black cursor-pointer">
                                <MdOutlineOndemandVideo className=" text-[23px]" />
                                <p className=" text-[13px] md:text-[11px]">Training</p>
                                <hr className="w-[100%] h-[2.5px] bg-black " />
                            </div>
                                : <div className="flex flex-col text-center items-center cursor-pointer" >
                                    <MdOutlineOndemandVideo className="text-gray-500 text-[23px]" />
                                    <p className="text-gray-500 text-[13px] md:text-[11px]">Training</p>
                                </div>
                        }
                    </Link>

                    {/** Market */}
                    <Link to={NavToFun} onDoubleClick={() => ShowNav()} onClick={() => handleNav("market")} >
                        {
                            nav === "market" ? <div className="flex flex-col text-center items-center text-black cursor-pointer" >
                                <FaCartArrowDown className=" text-[23px]" />
                                <p className=" text-[13px] md:text-[11px]">Market</p>
                                <hr className="w-[100%] h-[2.5px] bg-black " />
                            </div> : <div className="flex flex-col text-center items-center cursor-pointer" >
                                <FaCartArrowDown className="text-gray-500 text-[23px]" />
                                <p className="text-gray-500 text-[13px] md:text-[11px]">Market</p>
                            </div>
                        }
                    </Link>

                    {/**People */}
                    <Link to={"/people"} onClick={() => handleNav("people")}>
                        {
                            nav === "people" ?
                                <div className="flex flex-col text-center items-center text-black" >
                                    <IoIosPeople className=" text-[23px]" />
                                    <p className=" text-[13px] md:text-[11px]">People</p>
                                    <hr className="w-[100%] h-[2.5px] bg-black " />
                                </div> : <div className="flex flex-col text-center items-center cursor-pointer">
                                    <IoIosPeople className="text-gray-500 text-[23px]" />
                                    <p className="text-gray-500 text-[13px] md:text-[11px]">People</p>
                                </div>
                        }
                    </Link>

                    {/**Message */}
                    <Link to={"/message"} onClick={() => handleNav("message")}>
                        {
                            nav === "message" ? <div className="flex flex-col text-center items-center text-black cursor-pointer" >
                                <RiMessage2Fill className=" text-[20px]" />
                                <p className=" text-[13px] md:text-[11px] mt-[2px]">Message</p>
                                <hr className="w-[100%] h-[2.5px] bg-black " />
                            </div> : <div className="flex flex-col text-center items-center cursor-pointer" >
                                <RiMessage2Fill className="text-gray-500 text-[20px]" />
                                <p className="text-gray-500 text-[13px] md:text-[11px] mt-[2px]">Message</p>
                            </div>
                        }
                    </Link>

                    {/**Setting */}
                    {/* <Link  onClick={() => handleNav("setting")}>
                        {
                            nav === "setting" ? <div className="flex flex-col text-center items-center text-black cursor-pointer" >
                                <SettingIcon className=" text-[20px]" />
                                <p className=" text-[13px] md:text-[11px] mt-[2px]">Setting</p>
                                <hr className="w-[100%] h-[2.5px] bg-black " />
                            </div> : <div className="flex flex-col text-center items-center cursor-pointer" >
                                <SettingIcon className="text-gray-500 text-[20px]" />
                                <p className="text-gray-500 text-[13px] md:text-[11px] mt-[2px]">Setting</p>
                            </div>
                        }
                    </Link> */}

                    {/** userProfile */}
                    <div className="sm:hidden" onClick={() => handleNav("user")}>
                        <div className="flex flex-col text-center items-center text-black cursor-pointer">

                            <Link to={"/userprofile"}>
                                <img src={user} alt="user" className="w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] cursor-pointer relative" />
                            </Link>

                            <div className="flex flex-row  items-center" onClick={() => handleProfileSetting()}>
                                <p className=" text-[13px] md:text-[11px] ">Me</p>
                                <DropdownIcon className="text-gray-500 hover:text-black" />
                            </div>

                        </div>
                    </div>

                    {profileSetting && <Setting />}

                    {/** Mobile Menu */}

                    {
                        nav === "usermenu" ? <div className="sm:block hidden items-center relative cursor-pointer" onClick={() => {
                            handleNav("usermenu");
                            setMobileMenu((prev) => !prev);
                        }}>
                            {
                                mobileMenu===false ? <CiMenuFries className=" text-[22px] text-black" /> : <CrossIcon className=" text-[22px] text-gray-500" />
                            }

                            <p className=" text-black text-[13px] md:text-[11px]">Menu</p>
                            <hr className="w-[100%] h-[2.5px] bg-black " />
                        </div> : <div className="sm:block hidden items-center relative cursor-pointer" onClick={() => {
                            handleNav("usermenu");
                            setMobileMenu((prev) => !prev);
                        }} >
                            {
                                mobileMenu===false ? <CiMenuFries className=" text-[22px] text-gray-500" /> : <CrossIcon className=" text-[22px] text-black" />
                            }
                            
                            
                            <p className=" text-gray-500 text-[13px] md:text-[11px]">Menu</p>
                        </div>
                    }


                    {mobileMenu && 
                    
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
                    
                    }

                </div>

                {/** Bot */}
                <Link to={'/bot'} className="sm:w-[20%]  sm:hidden">

                    <div className="flex flex-col text-center items-center text-green-600  cursor-pointer hover:text-gray-400" onClick={() => handleNav("bot")}>
                        <FaRobot className=" text-[20px]" />
                        <p className=" text-[13px] text-black md:text-[11px] mt-[2px] ">Bot</p>

                    </div>
                </Link>
            </div>

            {/** SubNav for the active NavItem */}
            <div className=" fixed left-[47%]  h-full sm:hidden ">
                <div className="absolute bg-white top-0 mx-auto shadow-md rounded-b-[10px] overflow-hidden">
                    {
                        showSubNav()
                    }
                </div>
            </div>

        </div>
    )
}

export default Nav;