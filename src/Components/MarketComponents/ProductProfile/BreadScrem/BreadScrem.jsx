import { IoIosArrowForward as GreaterArrow } from "react-icons/io";

import { IoChevronBackSharp as Backbtn } from "react-icons/io5";
import { Link } from "react-router-dom";

const BreadScrem = ({ name }) => {
  const Name = name;
  return (
    <div className="flex flex-row justify-between">

      <div className="flex flex-row gap-2 items-center text-[14px] text-gray-500">
        <p>Home</p>
        <GreaterArrow />
        <p>Market</p>
        <GreaterArrow />
        <p>{Name}</p>
      </div>

      <Link to={"/market/buy"}>
        <div>
          <div className=" p-2 hover:opacity-80 bg-black text-[18px] rounded-[5px] cursor-pointer text-white font-bold ">
            <Backbtn />
          </div>
          <p className="text-gray-500 text-[15px] mt-[1%]">Back</p>
        </div>
      </Link>

    </div>
  )
}

export default BreadScrem;