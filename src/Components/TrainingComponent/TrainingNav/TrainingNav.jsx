import { BsCalendar2Event as Event } from "react-icons/bs";
import { RiComputerFill as Computer } from "react-icons/ri";
import { MdOutlineVideoLibrary as Video } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const TrainingNav = () => {
    const [trainingnav, setTrainigNav] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        switch(location.pathname){
            case "/training/event":
                setTrainigNav("events");
                break;
        }
    },[location.pathname])

    return (
        <div>
            <div className="fixed left-0 top-[calc(100vh-90vh)] sm:hidden bg-white z-20 flex flex-col  justify-around h-[60vh]  mt-[2%] p-2">

                <Link to={"/training/event"}>
                    <div className={trainingnav === "events" ? `flex flex-col text-center text-black px-7 sm:px-3 items-center cursor-pointer` : `flex flex-col text-center text-gray-500 px-7 sm:px-3 items-center cursor-pointer`} onClick={() => setTrainigNav("events")}>
                        <Event className="text-[19px] sm:text-[17px]" />
                        <p className="text-[14px] sm:text-[12px]">Events</p>
                        {trainingnav === "events" && <hr className="h-[2px] w-[70%]  bg-black" />}
                    </div>
                </Link>

                <div className={trainingnav === "training" ? `flex flex-col text-center text-black px-7 sm:px-3 items-center cursor-pointer` : `flex flex-col text-center text-gray-500 px-7 sm:px-3 items-center cursor-pointer`} onClick={() => setTrainigNav("training")}>
                    <Computer className="text-[23px] sm:text-[18px]" />
                    <p className="text-[14px] sm:text-[12px]">Training</p>
                    {trainingnav === "training" && <hr className="h-[2px] w-[70%]  bg-black" />}
                </div>

                <div className={trainingnav === "videos" ? `flex flex-col text-center text-black px-7 sm:px-3 items-center cursor-pointer` : `flex flex-col text-center text-gray-500 px-7 sm:px-3 items-center cursor-pointer`} onClick={() => setTrainigNav("videos")}>
                    <Video className="text-[23px] sm:text-[18px]" />
                    <p className="text-[14px] sm:text-[12px]">Videos</p>
                    {trainingnav === "videos" && <hr className="h-[2px] w-[70%]  bg-black" />}
                </div>

            </div>
        </div>
    )
}

export default TrainingNav;