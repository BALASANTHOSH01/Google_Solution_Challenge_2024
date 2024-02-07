import { Link } from "react-router-dom";
import ManWriting from "../../../assets/Images/Training/ManWriting.jpg";

const TrainingPageHero = () => {
  return (
    <div className="mb-[5%]">
        <div className="flex flex-row sm:flex-col justify-around gap-3 w-[100%] font-Manrope">

            <div className="w-[60%] sm:w-[90%] mx-auto sm:my-[4%] ml-[5%]">
                <h1 className="text-[40px] font-medium my-[2%]">Join forces with leading agricultural experts to revolutionize the farming industry.</h1>
                <p className="text-[20px] text-gray-600 my-[2%]">Give top priority to experts endorsed by <Link to={"/"} className="hover:underline hover:text-green-500 cursor-pointer underline">Green&#160;Harbor</Link> for their expertise.</p>
                <button className=" p-3 px-6 text-white bg-green-500 font-semibold text-[18px] hover:bg-transparent hover:border hover:border-green-500 hover:text-black hover:ease-out duration-700 my-[2%] rounded-[10px]">Explore</button>
            </div>

            <div className="w-[35%] sm:w-[90%] mx-auto relative overflow-hidden rounded-[10px]">
                <img src={ManWriting} alt="HeroImg" className="w-[90%] transform skew-x-[8deg] skew-y-5 rounded-[10px]"/>
            </div>
        </div>
    </div>
  )
}

export default TrainingPageHero;