import { useParams } from "react-router-dom";
import peoples from "../../../Pages/PeoplePage/PeopleData/Peoples.js";
import { FaStar } from "react-icons/fa";
import { TbAward } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import PeopleActivity from "../PeopleActivity/PeopleActivity.jsx";
import { MdOutlineNotificationAdd as NotificationIcon } from "react-icons/md";
import { MdNotificationsActive as NotificationON } from "react-icons/md";
import { MdOutlineDone as DoneIcon } from "react-icons/md";
import { useEffect, useState } from "react";

const PeopleProfile = () => {


    const { peopleid } = useParams();
    const clearedpeopleid = peopleid.replace(":", "");
    const peopleDetails = peoples.find((people) => Number(people.id) === Number(clearedpeopleid));

    const [notification, setNotification] = useState(false);
    const [showNotification,setShowNotification] = useState(false);
    const handleNotification = () => {
        setNotification(!notification);
        setShowNotification(!showNotification);
    }

    const notificationIsOn = () => {
        if(showNotification){
            return (
                <div className=" ml-[40%] absolute w-[180px] h-auto flex flex-row gap-3 bg-green-200  items-center rounded-[25px] px-0" >
                    <div className='p-1 bg-green-500 text-white rounded-[50%] text-[14px]' >
                        <DoneIcon />
                    </div>
    
                    <p className="text-[14px]" >Notification is ON</p>
                </div>
            );
        }
    }   

    // useEffect(()=>{
    //     let timeout;
    //     if(showNotification){
    //         timeout = setTimeout(setShowNotification(!showNotification),  5000);
    //     }

    //     return ()=>clearTimeout(timeout);

    // },[showNotification]);

    if (peopleDetails) {
        const name = peopleDetails.name;
        const expert = peopleDetails.areaOfExpert;
        const about = peopleDetails.about;
        const profile = peopleDetails.profile;
        const banner = peopleDetails.banner;
        const tags = peopleDetails.tags;
        const username = peopleDetails.username;

        // document.documentElement.scrollTop = 0;
        return (
            <div className="w-[75%] sm:w-[100%] mx-auto my-[5%] sm:mt-[0px]  relative h-full text-black ">
                <div className=" bg-white overflow-hidden sm:rounded-[0px] rounded-[10px]">

                    {/**Banner */}
                    <img src={banner} alt="banner" className="w-[100%] sm:h-[150px] h-[280px] top-0 opacity-70 object-cover" />

                    {/* User info */}
                    <img src={profile} alt="profileimage" className=" absolute top-[150px] sm:top-[80px] left-[5%] sm:left-[4%] rounded-[50%] w-[20%] sm:w-[30%] object-cover" />

                    <div className="ml-[7%] mt-[8%] sm:mt-[18%] pb-[3%]">

                        <div className="flex flex-row justify-between items-center">

                            {/**User Name */}
                            <div className="flex flex-row relative items-center gap-6">

                                <h1 className="text-[25px]  font-medium">{name}</h1>

                                {
                                    notification === false && <NotificationIcon onClick={() => handleNotification()} className="text-[23px] cursor-pointer" />
                                }

                                {
                                    notification &&
                                    <div className="flex flex-row">

                                        <NotificationON onClick={() => handleNotification()}  className="text-[23px] cursor-pointer" />
                                        { notificationIsOn()}
                                    </div>
                                }



                            </div>

                            {/**Expert Level */}
                            <div className="flex flex-row items-center gap-3 mr-[5%]">
                                <p className="text-gray-400">Level&#160;:</p>
                                <p>Gold</p>
                                <FaStar className="text-gold text-[17px] " />
                            </div>

                        </div>

                        <p className="text-gray-600 text-[15px] ">{username}</p>
                        <p className="flex flex-row items-center text-gray-500 my-[1%]">
                            <TbAward />
                            {expert}
                        </p>

                        {/**Tags */}
                        <div className="flex flex-row gap-2">
                            {
                                tags.map((tag) => (
                                    <div key={tag} className="flex flex-row items-center">
                                        #
                                        <p className=" text-green-500">{tag}</p>
                                    </div>
                                ))
                            }
                        </div>

                        {/**Reach ME, Message, setting */}
                        <div className="flex flex-row gap-6 my-[2%] w-[50%] justify-start font-Manrope items-center cursor-pointer">
                            <div className="p-[6px] px-4 bg-green-500 text-white font-medium text-[18px] rounded-[25px] text-center">
                                <p>Reach&#160;Me</p>
                            </div>

                            <div className="p-[6px] px-4 bg-gray-300 text-black font-medium text-[18px] rounded-[25px] text-center cursor-pointer">
                                <p>Message</p>
                            </div>

                            <div className="text-black text-[20px] cursor-pointer">
                                <BsThreeDots />
                            </div>
                        </div>

                    </div>

                </div>
                <PeopleActivity props={peopleDetails} />
            </div>
        )
    } else {
        return (
            <div className="text-[25px] text-black block mx-auto text-center">
                <h1>ID NOT FOUND 404</h1>
            </div>
        );
    }

}

export default PeopleProfile