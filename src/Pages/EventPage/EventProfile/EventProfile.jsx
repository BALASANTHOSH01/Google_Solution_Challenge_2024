import { useParams } from "react-router-dom";
import OldEvents from "../../../Components/Events/OldEvents/OldEvents.js";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import avatar1 from "../../../assets/Images/Mentor/822.jpg";
import avatar2 from "../../../assets/Images/Mentor/827.jpg";
import avatar3 from "../../../assets/Images/Mentor/8659651.jpg";
import avatar4 from "../../../assets/Images/Mentor/profile1.png";
import RegistrationForm from "../../../Components/RegistrationForm/RegistrationForm.jsx";
import { useState } from "react";

const EventProfile = () => {
  const { eventid } = useParams();
  const clearedEventId = eventid.replace(":", "");
  const selectedEvent = OldEvents.find(
    (event) => Number(event.id) === Number(clearedEventId)
  );
  document.documentElement.scrollTop = 0;

  return (
    <div>
      <div className="flex flex-row sm:flex-col mt-[5%] pb-[10%]">
        <div className="w-[50%] sm:w-[95%] sm:mt-[5%] rounded-[10px] overflow-hidden">
          <div className="flex flex-row sm:flex-col justify-evenly items-center p-2">
            <img src={selectedEvent.thumbnail} alt="thumbnail" className="w-[38%] rounded-[10px] sm:w-[80%]" />

            <div className="w-[55%] sm:w-[95%] mx-auto text-center sm:my-[5%]">
              <h1 className="text-[28px]">{selectedEvent.title}</h1>

              <div className="flex flex-row gap-3 items-center my-[3%] justify-center">

                <div className="flex flex-row text-gray-400 gap-2 text-[14px] items-center">
                  <FaRegCalendarAlt className="text-yellow-500" />
                  <p>{selectedEvent.date}</p>
                </div>

                <div className="flex flex-row text-gray-400 gap-1 text-[14px] items-center">
                  <IoLocationSharp className="text-red-500" />
                  <p>{selectedEvent.location}</p>
                </div>

              </div>

              <div className="flex flex-row text-[15px] justify-center my-[2%] items-center">
                <h1 className="text-gray-400">Creator :&#160;</h1>
                <p className="text-black ">{selectedEvent.creator}</p>
              </div>

              <div className="text-[15px] my-[2%] mx-auto">
                <p>{selectedEvent.description}</p>
              </div>

            </div>

          </div>

          <div className="flex flex-row mx-auto justify-center my-[6%]">
            <div className="relative flex flex-row w-[25%] sm:w-[35%]">
              <img src={avatar4} alt="avatarImg" className="rounded-[50%] w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] top-[5%] absolute left-8" />
              <img src={avatar2} alt="avatarImg" className="rounded-[50%] w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] top-[5%] absolute left-12" />
              <img src={avatar3} alt="avatarImg" className="rounded-[50%] w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] top-[5%] absolute left-16 " />
              <img src={avatar1} alt="avatarImg" className="rounded-[50%] w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] top-[5%] absolute left-20" />
            </div>
            <div className="flex flex-col w-[60%] sm:w-[60%] text-left mt-[2%]">
              <h2 className="text-black sm:text-[15px] text-[18px]">300+ Peoples are already registered</h2>
              <p className="text-gray-400 sm:text-[12px] text-[13px]">Register for the event and enhance your knowledge.</p>
            </div>

          </div>
        </div>

        <div className="w-[35%] sm:w-[90%] sm:mt-[5%] mx-auto">
          <p className="my-[2%] text-[20px] text-center hidden sm:block uppercase">Resgister your slot</p>
          <RegistrationForm />
        </div>
      </div>

    </div>
  );
};

export default EventProfile;
