import { IoArrowDown as DownArrow } from "react-icons/io5";

const NewsMenuContent = () => {
  return (
    <div>
        <hr className="bg-gray-500  w-[70%] mx-auto"/>
        <div className="flex flex-wrap mx-auto justify-around text-green-600 text-[18px] p-2 w-[50%]">
            <div className=" cursor-pointer">
                <p>Business</p>
            </div>

            <div className=" cursor-pointer">
                <p>Technology</p>
            </div>

            <div className=" cursor-pointer">
                <p>Society</p>
            </div>

            <div className=" cursor-pointer">
                <p>Videos</p>
            </div>

            <div className="flex flex-row gap-1 cursor-pointer items-center text-black">
                <p>Show&#160;More</p>
                <DownArrow/>
            </div>
        </div>
    </div>
  )
}

export default NewsMenuContent;