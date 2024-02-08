import { useParams } from "react-router-dom";
import UpComingEvents from "../../../Components/Events/UpComingEvent/UpComingEvents.js";
import LearnerCommand from "../EventProfile/LearnersCommand/LearnersCommand.js";
import { FaFire as FireIcon } from "react-icons/fa";

const NewEventProfile = () => {
    const { eventid } = useParams();
  
    const clearedEventId = eventid.replace(":", "");
    const selectedEvent = UpComingEvents.find(
      (event) => Number(event.id) === Number(clearedEventId)
    );

    const BannerImg = selectedEvent.banner;
    document.documentElement.scrollTop = 0;
  return (
    <div>
    <div>
      <img src={BannerImg} alt="banner" className="w-full object-cover h-[50vh] p-1" />

      <div className="flex flex-col gap-0 w-[90%] mt-[2%] mx-auto p-2">

        {/**Title */}
        <div className="flex flex-row justify-between w-[90%]">
          <p className="text-[25px] uppercase text-black tracking-wide font-medium">{selectedEvent.title}</p>
        </div>

        <div className="flex flex-row justify-between ">

          {/** Timing details */}
          <div className="flex flex-row gap-5 items-start my-[1%] text-[14px]">

            {/** Starts On */}
            <div className="flex flex-row gap-1 items-center">
              <p className=" font-medium uppercase text-gray-600 ">Starts&#160;on&#160;:</p>
              <p className=" text-gray-600">{selectedEvent.startsOn}</p>
            </div>

            {/** Ends On */}
            <div className="flex flex-row gap-1 items-center">
              <p className=" font-medium uppercase text-gray-600 ">Ends&#160;on&#160;:</p>
              <p className=" text-gray-600">{selectedEvent.endsOn}</p>
            </div>

            {/** Venue */}
            <div className="flex flex-row gap-1 items-center">
              <p className=" font-medium uppercase text-gray-600 ">Venue&#160;:</p>
              <p className=" text-gray-600">{selectedEvent.venue}</p>
            </div>

          </div>

          {/** Register button & details */}
          <div className="flex flex-col w-[200px] gap-2">

            <button className="px-3 p-2 w-[100%] text-white text-[15px] rounded-[5px] bg-green-500">Register with one click</button>

            <div className="flex flex-row gap-1 items-center text-[13px] text-green-700 ml-[2%] float-right">
              <FireIcon />
              <p>{selectedEvent.alreadyRegistered}&#160;people registered</p>
            </div>

          </div>

        </div>

      </div>

    </div>

    <hr className="h-[1px] bg-gray-500 rounded-[20px] my-[2%]" />

    {/** Details about the event */}
    <div className="text-[14px] flex flex-col gap- mt-[4%]">

      <div className="flex flex-col gap-2 ">
        <h1 className="text-[17px] py-2 px-1 bg-green-100 text-green-700 font-medium">About this Event</h1>
        <div className="px-3 flex flex-col my-[1%] gap-3 py-2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil qui error magnam laboriosam fugiat, voluptates sunt aperiam quas enim! Dicta nulla aliquam non autem blanditiis! Ipsam, eum repudiandae. Consequatur, autem?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-[17px] py-2 px-1 bg-green-100 text-green-700 font-medium">What You Will Gain From This Event</h1>

        <ul className="list-disc px-8 py-2 flex flex-col my-[1%] gap-2">
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam?</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam?</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam?</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam?</li>
        </ul>

      </div>

      <div>
        <div className="flex flex-row py-2 px-1 bg-green-100 text-green-700 font-medium items-center gap-1 text-[17px]">
          <h1>Reach Mentor</h1>
          <p>{selectedEvent.creator}</p>
          <p className="">(&#160;LinkedIn&#160;)</p>
        </div>

        <ul className=" list-disc py-2 px-8 flex flex-col gap-2 my-[1%]">
          <li>Senior Agricultural Expert</li>
          <li>Instructor & Mentor, Green Harbor</li>
          <li>8+ years of agricultural research experience </li>
        </ul>
      </div>

      <div>
        <h1 className="text-[17px] py-2 px-1 bg-green-100 text-green-700 font-medium">What our Learners have to say</h1>

        <div className="flex flex-row justify-between p-2 my-[3%]">
          {
            LearnerCommand.map((commands) => (
              <div key={commands.id} className=" shadow-lg rounded-[5px] p-2 bg-gray-100 border w-[380px]">

                <div className="flex flex-row gap-3 items-start p-2">

                  <div>
                    <img src={commands.userImage} alt="profile" className="rounded-[50%] w-[50px] h-[50px]"/>
                  </div>

                  <div>
                    <p className=" font-medium ">{commands.name}</p>
                    <p className=" text-gray-500">{commands.role}</p>
                  </div>

                </div>

                <div className="w-[80%] mx-auto py-2">
                  <p>{commands.command}</p>
                </div>

              </div>
            ))
          }
        </div>
      </div>

    </div>

  </div>
  )
}

export default NewEventProfile;