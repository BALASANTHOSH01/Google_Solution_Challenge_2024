import { FaLongArrowAltLeft as Back } from "react-icons/fa";
import { HiOutlineDotsVertical as Menu } from "react-icons/hi";
import { IoMdStarOutline as Star } from "react-icons/io";
import  Messages from "../../../Pages/Message/MessageData/Messages.js";
import { Link, useParams } from "react-router-dom";

const MessageNav = () => {

    const{mobilemessageid}=useParams();
    const message = Messages.find((msg)=>Number(msg.id)===Number(mobilemessageid));
  
    return (
        <div>
            <div className="flex flex-row justify-around items-center p-2 shadow-md fixed top-0 w-[100%] z-50 bg-white">
                <Link to={"/message"} className="p-2  rounded-[50%] hover:bg-gray-300 text-gray-600 hover:text-black">
                <Back className="text-[23px]" />
                </Link>

                <div className="flex flex-col text-left w-[50%]">
                    <p className="text-black text-[17px] font-medium">{message.name}</p>
                    <p className="text-gray-500 Custom-truncate text-[14px]">{message.role}</p>
                </div>

                <Menu className="text-[23px]" />

                <Star className="text-[18px]" />
            </div>
        </div>
    )
}

export default MessageNav