import { useState } from "react";
import OldEvent from "../../Components/Events/OldEvents/OldEvent.jsx";
import UpComingEvent from "../../Components/Events/UpComingEvent/UpComingEvent";
import { IoMdArrowDropdown as DownArrow } from "react-icons/io";

const EventPage = () => {
  // const [catogery, setCatogery] = useState("oldevent");

  // const EventType = () => {
  //   switch (catogery) {
  //     case "oldevent":
  //       return <OldEvent />;
  //     case "upcomingevent":
  //       return <UpComingEvent />;
  //   }
  // }

  // const [selectlocation,setSelectLocation] = useState("USA");
  // const handleLocation = (e)=>{
  //   setSelectLocation(e.target.value);
  // }

  const[eventtype,setEventType]=useState("future");
  const EventOption = [
    {value:"future",lable:"Future Event"},
    {value:"past",lable:"Past Events"}
  ];

  const EventTypeFun = () =>{
    switch(eventtype){
      case "past":
        return <OldEvent/>;
        case "future" :
        return <UpComingEvent/>;
    }
  }

  document.documentElement.scrollTop = 0;
  return (
    // <div className="sm:mt-[20%]" >
    //   <div className="w-[90%] ml-[7%] ">
    //     <h2 className="text-[24px] sm:text-[20px] my-[4%] text-black mx-auto flex flex-row items-center gap-2 font-semibold">Events near
    //     <span className="text-green-500">{selectlocation}</span>& Remote</h2>
    //     <div className="flex flex-row w-[70%] sm:w-[100%] justify-between">
    //       <div className="flex flex-row gap-10 text-[20px] sm:text-[18px] text-gray-500">

    //         {
    //           catogery === "oldevent" ?
    //             <p onClick={() => setCatogery("oldevent")} className="text-black cursor-pointer text-[17px]">Old&#160;Events<hr className="bg-green-500 w-[100%] h-[2px] text-black" /></p> :
    //             <p onClick={() => setCatogery("oldevent")} className="text-gray-500 cursor-pointer text-[17px]">Old&#160;Events</p>
    //         }
    //         {
    //           catogery === "upcomingevent" ?
    //             <p onClick={() => setCatogery("upcomingevent")} className="text-black cursor-pointer text-[17px]">Up&#160;Coming<hr className="bg-green-500 w-[100%] h-[2px] text-black" /></p> :
    //             <p onClick={() => setCatogery("upcomingevent")} className="text-gray-500 cursor-pointer text-[17px]">Up&#160;Coming</p>
    //         }
    //       </div>

         
            
    //       <select className=" bg-green-500 text-white focus:outline-none p-1 px-2 rounded-[25px] cursor-pointer" value={selectlocation} onChange={handleLocation}>
    //           <option value="USA">USA</option>
    //           <option value="India">India</option>
    //           <option value="UK">UK</option>
    //           <option value="China">China</option>
    //           <option value="Japan">Japan</option>
    //           <option value="Australia">Australia</option>
    //           <option value="Europe">Europe</option>
    //           <option value="France">France</option>
    //           <option value="southAfrica">South&#160;Africa</option>
    //           <option value="Taiwan">Taiwan</option>
    //           <option value="Nepal">Nepal</option>
    //           <option value="Indonesia">Indonesia</option>
    //       </select>

    //     </div>

    //     <div>
    //       {
    //         EventType()
    //       }
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="flex flex-col justify-center items-center text-[35px] font-extrabold font-Nunito sm:text-[25px] sm:mt-[4%]">
        <h1>Explore your events and Get register</h1>
      </div>

      <div className="flex flex-row justify-around px-3 my-[2%] text-[20px]">

        <p className=" tracking-normal sm:hidden">Select your events</p>

        <select className=" outline-none cursor-pointer p-2 text-center border rounded-[10px] bg-gray-100 text-black hover:bg-gray-200" onChange={(e)=>setEventType(e.target.value)} value={eventtype}>

          {
            EventOption.map((eventoption)=>(
              <option key={eventoption.value} value={eventoption.value} >{eventoption.lable}</option>
            ))
          }

        </select>

      </div>

      <div>
        {
          EventTypeFun()
        }
      </div>

    </div>
  )
}

export default EventPage;