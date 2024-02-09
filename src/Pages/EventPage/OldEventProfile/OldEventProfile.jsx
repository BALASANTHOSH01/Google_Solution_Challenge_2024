import { useParams } from "react-router-dom";
import OldEvents from "../../../Components/Events/OldEvents/OldEvents";
import { FaFire as FireIcon } from "react-icons/fa";
const OldEventProfile = () => {
    const { oldeventid } = useParams();

    const clearedEventId = oldeventid.replace(":", "");

    const selectedEvent = OldEvents.find(
        (oldevent) => Number(oldevent.id) === Number(clearedEventId)
    );
    document.documentElement.scrollTop = 0;
    return (
        <div>
            <div>
                <img src={selectedEvent.banner} alt="banner"  className="w-full sm:w-[98%] sm:mx-auto object-cover sm:h-[70vh] h-[50vh] p-1"  />

                <div className="flex flex-col gap-0 w-[90%] mt-[2%] mx-auto p-2">

                    {/**Title */}
                    <div className="flex flex-row justify-between w-[90%]">
                        <p className="text-[25px] uppercase text-black tracking-wide font-medium">{selectedEvent.title}</p>
                    </div>

                    <div className="flex flex-row sm:flex-col justify-between ">

                        {/** Timing details */}
                        <div className="flex flex-row sm:flex-col gap-5 sm:gap-2 sm:my-[4%] items-start my-[1%] text-[14px]">

                            {/** Starts On */}
                            <div className="flex flex-row gap-1 items-center">
                                <p className=" font-medium uppercase text-gray-600 ">Starts&#160;on&#160;:</p>
                                <p className=" text-red-600">{selectedEvent.startsOn}</p>
                            </div>

                            {/** Ends On */}
                            <div className="flex flex-row gap-1 items-center">
                                <p className=" font-medium uppercase text-gray-600 ">Ends&#160;on&#160;:</p>
                                <p className=" text-red-600">{selectedEvent.endsOn}</p>
                            </div>

                            {/** Venue */}
                            <div className="flex flex-row gap-1 items-center">
                                <p className=" font-medium uppercase text-gray-600 ">Venue&#160;:</p>
                                <p className=" text-red-600">{selectedEvent.venue}</p>
                            </div>

                        </div>

                        {/** Register button & details */}
                        <div className="flex flex-col w-[200px] gap-2">

                            <button className="px-3 p-2 w-[100%] text-white text-[15px] rounded-[5px] bg-red-500">Event Expired</button>

                            <div className="flex flex-row gap-1 items-center text-[13px] text-red-600 ml-[2%] float-right">
                                <FireIcon />
                                <p>{selectedEvent.alreadyRegistered}&#160;people attended</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default OldEventProfile