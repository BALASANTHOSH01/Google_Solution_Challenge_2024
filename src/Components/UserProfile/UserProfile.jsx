import { BsThreeDots } from "react-icons/bs"
import PeopleActivity from "../PeopleComponents/PeopleActivity/PeopleActivity"
import { TbAward } from "react-icons/tb"
import { FaStar } from "react-icons/fa6"
import userImg from "../../assets/Images/man.png";
import banner from "../../assets/Images/banner.jpg";
import Peoples from "../../Pages/PeoplePage/PeopleData/Peoples.js";

const UserProfile = () => {

  const UserDetails = [
    {
      id:1,
      name:"Mark",
      username:"@username01",
      profile:userImg,
      areaOfExpert:"Agricultural Researcher",
      banner:banner,
      tags:["Agriculture","soil expert"],
      about:"Agricultural experts play a pivotal role in advancing sustainable farming practices and maximizing crop yields. These professionals possess in-depth knowledge of soil health, crop management, and pest control. They advise farmers on utilizing cutting-edge technologies, such as precision farming and drones, to enhance efficiency. Agricultural experts also contribute to environmental conservation by promoting organic farming and minimizing chemical inputs. Their expertise extends to irrigation systems, climate adaptation, and the implementation of innovative agrotechnologies. By staying abreast of industry trends, agricultural experts empower farmers with the tools and insights needed to navigate challenges, ensuring a resilient and productive agricultural sector that meets global food demands"
    }
  ];

  return (
    <div>
        <div>
        <div className="w-[75%] sm:w-[100%] mx-auto my-[5%] sm:mt-[0px]  relative h-full text-black ">
                <div className=" bg-white overflow-hidden sm:rounded-[0px] rounded-[10px] border">

                    {/**Banner */}
                    <img src={UserDetails[0].banner} alt="banner" className="w-[100%] sm:h-[150px] h-[280px] top-0 opacity-70 object-cover" />

                    {/* User info */}
                    <img src={UserDetails[0].profile} alt="profileimage" className=" absolute top-[150px] sm:top-[80px] left-[5%] sm:left-[4%] rounded-[50%] w-[18%] sm:w-[30%] object-cover" />

                    <div className="ml-[7%] mt-[6%] sm:mt-[18%] pb-[3%]">

                        <div className="flex flex-row justify-between items-center">

                            {/**User Name */}
                            <h1 className="text-[25px]  font-medium">UserName</h1>

                            {/**Expert Level */}
                            <div className="flex flex-row items-center gap-3 mr-[5%]">
                                <p className="text-gray-400">Level&#160;:</p>
                                <p>Gold</p>
                                <FaStar className="text-gold text-[17px] " />
                            </div>

                        </div>

                        <p className="text-gray-600 text-[15px] ">{UserDetails[0].username}</p>
                        <p className="flex flex-row items-center text-gray-500 my-[1%]">
                            <TbAward />
                            Founder of Green Harbor || Full stack developer
                        </p>

                        {/**Tags */}
                        
                        <div className="flex flex-row gap-2 items-center">
                          #
                          <p className=" text-green-500">{UserDetails[0].tags[0]}</p>
                          <p className="text-black">#<span className=" text-green-500">{UserDetails[0].tags[1]}</span></p>
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
                <PeopleActivity props={UserDetails[0]}/>
            </div>
        </div>
    </div>
  )
}

export default UserProfile