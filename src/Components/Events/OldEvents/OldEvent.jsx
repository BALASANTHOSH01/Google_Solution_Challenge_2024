import OldEvents from "./OldEvents.js"
import { TiLocation } from "react-icons/ti";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

const OldEvent = () => {
  return (
    <div className="w-[100%] my-[5%]">
        <div className=" grid grid-cols-[1fr,1fr,1fr] sm:grid-cols-[1fr] ">
          {
            OldEvents.map((events)=>(
              <Link key={events.id} to={`/training/event/${events.id}`}>
                <div className="p-3 rounded-[10px] block gap-3 w-[90%] my-[4%] sm:my-[5%] hover:shadow-2xl sm:mx-auto">
                <img src={events.thumbnail} alt="eventImage" className="w-[95%] sm:w-[100%] rounded-[10px] block mx-auto mt-[2%] Custom-truncate"/>
                <p className="text-black font-semibold uppercase text-left text-[15px]  my-[3%]">{events.title}</p>

                <p className="text-gray-500 text-[13px] w-[95%] text-left mx-auto Custom-truncate my-[2%]">{events.description}</p>

                <div className="flex flex-row justify-between w-[95%] text-gray-500 text-[14px] my-[3%]">
                  <p className="flex flex-row items-center"><TiLocation/>{events.location}</p>
                  <p className="flex flex-row items-center gap-1"><CiCalendarDate/>{events.date}</p>
                </div>

                <p className="flex flex-row items-center mx-auto text-gray-600 text-[14px] my-[3%] ">Creator:&#160;<span className="text-green-500 font-semibold">{events.creator}</span></p>
                <div className="w-[100%] bg-red-500 text-white p-2 text-center bottom-0 rounded-[10px] cursor-pointer">
                  <p>Expired</p>
                </div>
              </div>
              </Link>

            ))
          }
          <hr/>
        </div>
    </div>
  )
}

export default OldEvent;