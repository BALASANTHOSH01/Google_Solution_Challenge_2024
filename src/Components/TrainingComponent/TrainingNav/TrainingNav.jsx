import { BsCalendar2Event as Event } from "react-icons/bs";
import { RiComputerFill as Computer } from "react-icons/ri";
import { MdOutlineVideoLibrary as Video } from "react-icons/md";
import { useState } from "react";

const TrainingNav = () => {
    const [trainingnav,setTrainigNav] = useState("");

  return (
    <div>
        <div className="fixed left-0 top-[calc(100vh-90vh)] bg-white z-20  flex flex-col justify-around h-[60vh] mt-[2%]">

            <div className={trainingnav==="events"?`flex flex-col text-center text-black px-7 items-center cursor-pointer`:`flex flex-col text-center text-gray-500 px-7 items-center cursor-pointer`} onClick={()=> setTrainigNav("events")}>
                <Event className="text-[19px]"/>
                <p className="text-[14px]">Events</p>
                {trainingnav==="events" && <hr className="h-[2px] w-[70%]  bg-black" />}
            </div>

            <div className={trainingnav==="training"?`flex flex-col text-center text-black px-7 items-center cursor-pointer`:`flex flex-col text-center text-gray-500 px-7 items-center cursor-pointer`} onClick={()=> setTrainigNav("training")}>
                <Computer className="text-[23px]"/>
                <p className="text-[14px]">Training</p>
                {trainingnav==="training" && <hr className="h-[2px] w-[70%]  bg-black" />}
            </div>

            <div className={trainingnav==="videos"?`flex flex-col text-center text-black px-7 items-center cursor-pointer`:`flex flex-col text-center text-gray-500 px-7 items-center cursor-pointer`} onClick={()=> setTrainigNav("videos")}>
                <Video className="text-[23px]"/>
                <p className="text-[14px]">Videos</p>
                {trainingnav==="videos" && <hr className="h-[2px] w-[70%]  bg-black" />}
            </div>

        </div>
    </div>
  )
}

export default TrainingNav;