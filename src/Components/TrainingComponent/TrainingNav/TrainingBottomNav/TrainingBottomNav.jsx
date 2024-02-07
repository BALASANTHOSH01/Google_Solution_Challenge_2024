import { useCallback, useEffect, useState } from "react";
import { BsCalendar2Event as Event } from "react-icons/bs";
import { RiComputerFill as Computer } from "react-icons/ri";
import { MdOutlineVideoLibrary as Video } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

const TrainingBottomNav = () => {
    const [bottomnav, setBottomNav] = useState(()=>{
        return localStorage.getItem("bottomnav") || "events";
    });
    const location = useLocation();
    const navigate = useNavigate();

    // const BottomNavCallBack = useCallback(()=>{
    //     switch(location.pathname){
    //         case "/training/event":
    //             setBottomNav("events");
    //             break;
    //         case "/training/training":
    //             setBottomNav("training");
    //             break;
    //     }

    // },[location.pathname]);

    useEffect(() => {
        // Update localStorage with the current bottomnav value
        localStorage.setItem("bottomnav", bottomnav);
    }, [bottomnav]);

    useEffect(() => {
        // Set bottomnav based on current URL
        switch(location.pathname) {
            case "/training/event":
                setBottomNav("events");
                break;
            case "/training/training":
                setBottomNav("training");
                break;
            case "/training/videos":
                setBottomNav("videos");
                break;
            default:
                setBottomNav("events"); // Default to "Events" if URL doesn't match
                break;
        }
    }, [location.pathname]);

    return (
        <div>
            <div className="hidden sm:flex flex-row justify-around p-3 mx-auto fixed bottom-0 w-[100%] z-50 bg-white">

                <Link to={"/training/event"} className={bottomnav === "events" ? `flex flex-col text-center text-black px-7 sm:px-3 items-center cursor-pointer` : `flex flex-col text-center text-gray-500 px-7 sm:px-3 items-center cursor-pointer`} onClick={() => setBottomNav("events")}>
                    <Event className="text-[19px] sm:text-[18px]" />
                    <p className="text-[14px] sm:text-[12px]">Events</p>
                    {bottomnav === "events" && <hr className="h-[2px] w-[70%]  bg-black" />}
                </Link>


                <Link to={"/training/training"} className={bottomnav === "training" ? `flex flex-col text-center text-black px-7 sm:px-3 items-center cursor-pointer` : `flex flex-col text-center text-gray-500 px-7 sm:px-3 items-center cursor-pointer`} onClick={() => setBottomNav("training")}>
                    <Computer className="text-[23px] sm:text-[18px]" />
                    <p className="text-[14px] sm:text-[12px]">Training</p>
                    {bottomnav === "training" && <hr className="h-[2px] w-[70%]  bg-black" />}
                </Link>

                <div className={bottomnav === "videos" ? `flex flex-col text-center text-black px-7 sm:px-3 items-center cursor-pointer` : `flex flex-col text-center text-gray-500 px-7 sm:px-3 items-center cursor-pointer`} onClick={() => setBottomNav("videos")}>
                    <Video className="text-[23px] sm:text-[18px]" />
                    <p className="text-[14px] sm:text-[12px]">Videos</p>
                    {bottomnav === "videos" && <hr className="h-[2px] w-[70%]  bg-black" />}
                </div>

            </div>
        </div>
    )
}

export default TrainingBottomNav;