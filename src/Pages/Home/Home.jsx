import { Link } from "react-router-dom";
import { HomeItem } from "./HomeItem/HomeItem";
import { LuDot } from "react-icons/lu";
import botIcon from '../../assets/Images/Chatbot/botIcon.jpg';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Reaction from "../../Components/HomeComponent/Reaction/Reaction";

const Home = () => {
  document.documentElement.scrollTop = 0;
  return (
    <div className="sm:mt-[20%]">

      <div className="w-[80%] hidden sm:hidden sm:w-[100%]  mx-auto my-[5%]">
        {
          HomeItem.map((crop) => (
            <Link to={`/croppage/:${crop.id}`} key={crop.id} >
              <div className="flex flex-row mx-auto  p-4 gap-2 border border-gray-400 rounded-[10px] my-[2%] w-[100%] sm:w-[95%] h-[200px] justify-between hover:shadow-gray-400 cursor-pointer">
                <img src={crop.image} alt="CropImage" className="w-[35%] rounded-[10px] h-full object-cover" />

                <div className="flex flex-col ml-[3%] w-[60%]">
                  <h2 className="my-[2%] text-black font-semibold sm:text-[18px] text-xl uppercase Custom-truncate">{crop.title}</h2>
                  <p className="text-gray-500 text-[13px] Custom-truncate sm:w-[90%] w-[80%] break-words">{crop.description}</p>

                  <div className="flex flex-row sm:text-[10px] text-[12px] items-center gap-2 my-[2%] sm:my-[4%]">
                    {
                      crop.tags.map((tag) => (
                        <div key={tag} className="bg-green-400 rounded-[10px] text-center">
                          <p className="p-1 px-2  text-gray-800">#{tag}</p>
                        </div>
                      ))
                    }
                  </div>

                  <div className="flex flex-row gap-2 justify-end items-center">
                    <p className="text-gray-500 sm:text-[12px] text-[13px]">{crop.userId}</p>
                    <LuDot className="text-gray-500 sm:text-[15px] text-[20px]" />
                    <p className="text-gray-500 sm:text-[12px] text-[13px]">{crop.createdAt}</p>
                  </div>
                </div>

              </div>
            </Link>
          ))
        }
      </div>

      {/* 
      <Link to={"/bot"}>
        <div className="fixed hidden sm:block bottom-[5%] right-[1%]  cursor-pointer text-center bot-motion z-50">
          <div className="rounded-[50%] cursor-pointer border overflow-hidden border-gray-400">
            <img src={botIcon} alt="botIcon" className="w-[100px] h-[100px] object-cover" />
          </div>
          <p className="text-[14px] text-green-600">Agro&#160;Bot</p>
        </div>
      </Link> */}

      {
        HomeItem.map((item) => (
          <Link key={item.id} to={`/croppage/:${item.id}`} onChange={window.scrollTo(0, 0)} className="hidden sm:hidden">
            <div key={item.id} className="w-[90%] rounded-[10px] p-2 my-[10%] hover:shadow-2xl mx-auto">
              <img src={item.image} alt="img" className="w-[65%] rounded-[10px] my-[1%] block mx-auto" />
              <p className="text-black uppercase my-[3%] text-center font-semibold text-[20px]">{item.title}</p>
              <p className="text-gray-500 mx-auto Custom-truncate w-[90%] my-[3%]">{item.description}</p>

              <div className="flex flex-row justify-between w-[90%] items-center text-gray-500 text-[13px] my-[2%] mx-auto">
                <p className="text-green-500 font-medium">{item.userId}</p>
                <p>{item.createdAt}</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                {
                  item.tags.map((tag) => (
                    <div key={tag} className="flex flex-row gap-0 items-center p-1 px-2 text-center text-black text-[13px]  mx-auto my-[2%]">
                      #
                      <p className="text-green-500">{tag}</p>
                    </div>
                  ))
                }
              </div>

            </div>
          </Link>
        ))
      }

      <div className=" w-[45%] sm:w-[100%] md:w-[90%] mx-auto my-[5%]" >
        {
          HomeItem.map((item) => (
            <div key={item.id} className="border border-gray-400 p-3 rounded-[10px] my-[5%]">

              <div className="w-[100%]">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-3">
                    <img src={item.creatorProfile} alt="ProfileImg" className=" w-[60px] h-[60px] rounded-[50%]" />

                    <div>
                      <h1 className="text-[17px] font-medium">{item.creatorName}</h1>
                      <p className="text-[14px] text-gray-500">{item.userId}</p>
                    </div>

                  </div>

                  <div className="flex flex-row gap-4 items-center mr-[5%] ">
                    <HiOutlineDotsHorizontal className="font-bold cursor-pointer text-[20px] text-gray-500" />
                    <RxCross2 className="font-bold text-[20px] cursor-pointer text-gray-500" />
                  </div>
                </div>

                <Link to={`/croppage/:${item.id}`} onChange={window.scrollTo(0, 0)}  >
                  <div className="mx-auto">
                    <p className="w-[90%] mx-auto Custom-truncate text-[13px] text-gray-500">{item.description}</p>
                    <img src={item.image} alt="PostImg" className="rounded-[10px] my-[2%] h-[450px] sm:h-[300px] w-[100%]" />
                  </div>
                </Link>

              </div>
              <hr className="bg-gray-400 h-[1px]" />
              <Reaction />
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Home
