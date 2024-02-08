import OldEvents from "./OldEvents.js"
import { Link } from "react-router-dom";
import { BsDot as Dot } from "react-icons/bs";

const OldEvent = () => {
  return (
    <div className="w-[100%] my-[5%]">
      <div className=" grid md:grid-cols-3 grid-cols-4 sm:flex sm:flex-col sm:gap-5 gap-3  ">
        {
          OldEvents.map((events) => (
            <Link key={events.id} to={`/training/event/oldevent/${events.id}`} className="w-[100%] sm:w-[70%] mx-auto h-full p-2 hover:opacity-75 bg-black rounded-[15px] border" >
  
              <div className={` p-2 flex-auto  sm:h-full h-full relative`}>

                <div className="absolute w-[95%] mx-auto top-[2%] flex flex-row justify-between text-white font-bold text-[18px]">
                  <Dot />
                  <Dot />
                </div>

                <div className="flex flex-col my-[3%] gap-2 text-center p-2">
                  <img src={events.thumbnail} alt="thumbnail" className="rounded-[15px] w-[100%] " />
                  <p className="text-white uppercase font-medium md:text-[15px] text-[15px]">{events.title}</p>
                </div>

                <div className='w-full  rounded-[10px] text-white text-center p-3 text-[17px] font-medium bg-red-500'>
                  <button>Expired</button>
                </div>

              </div>
            </Link>

          ))
        }
      </div>
    </div>
  )
}

export default OldEvent;