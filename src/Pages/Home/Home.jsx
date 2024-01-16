import { Link } from "react-router-dom";
import { HomeItem } from "../../assets/HomeItem/HomeItem"
import { LuDot } from "react-icons/lu";

const Home = () => {
  
  return (
    <div>
      <div className="w-[80%] sm:w-[100%] block mx-auto my-[5%]">
        {
          HomeItem.map((crop)=>(
            <Link to={`/croppage/:${crop.id}`} key={crop.id}>
              <div  className="flex flex-row mx-auto  p-4 gap-2 border border-gray-400 rounded-[10px] my-[2%] w-[100%] sm:w-[95%] h-[200px] justify-between hover:shadow-gray-400 cursor-pointer">
              <img src={crop.image} alt="CropImage" className="w-[35%] rounded-[10px] h-full object-cover"/>

              <div className="flex flex-col ml-[3%] w-[60%]">
                <h2 className="my-[2%] text-black font-semibold sm:text-[18px] text-xl uppercase Custom-truncate">{crop.title}</h2>
                <p className="text-gray-500 text-[13px] Custom-truncate sm:w-[90%] w-[80%] break-words">{crop.description}</p>

                <div className="flex flex-row sm:text-[10px] text-[12px] items-center gap-2 my-[2%] sm:my-[4%]">
                {
                  crop.tags.map((tag)=>(
                    <div key={tag} className="bg-green-400 rounded-[10px] text-center">
                      <p className="p-1 px-2  text-gray-800">#{tag}</p>
                    </div>
                  ))
                }
                </div>

                <div className="flex flex-row gap-2 justify-end items-center">
                  <p className="text-gray-500 sm:text-[12px] text-[13px]">{crop.userId}</p>
                  <LuDot className="text-gray-500 sm:text-[15px] text-[20px]"/>
                  <p className="text-gray-500 sm:text-[12px] text-[13px]">{crop.createdAt}</p>
                </div>
              </div>

            </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home
