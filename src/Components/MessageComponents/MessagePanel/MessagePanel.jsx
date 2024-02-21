import { MdVideoCall as VideoCall } from "react-icons/md";
import { BsThreeDots as Setting } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Messages from "../../../Pages/Message/MessageData/Messages.js";
import DefaultImg from "../../../assets/Images/Mentor/822.jpg";
import { IoMdStarOutline as Star } from "react-icons/io";
import { IoSend as SendIcon } from "react-icons/io5";
import { motion } from "framer-motion";

const MessagePanel = () => {
  const { messageid } = useParams();
  const message = Messages.find((msg) => Number(msg.id) === Number(messageid));

  return (
    <div className="h-screen sm:hidden">
      <div>
        {/**Message Top Menu */}
        <div className="flex flex-row items-center justify-between p-2 ">
          {/** Available on mobile */}
          <div className="flex flex-col text-left ml-[15%]">
            <h3 className="text-[15px]">{message.name}</h3>
            <p className="text-[12px] text-gray-500">Available on Mobile</p>
          </div>

          {/**Nav Items */}
          <div className="flex flex-row justify-around items-center mr-[10%] w-[30%]">
            <VideoCall className="text-gray-500 text-[28px] cursor-pointer" />
            <Setting className="text-gray-500 text-[20px] cursor-pointer" />
            <Star className="text-gray-500 text-[24px] cursor-pointer" />
          </div>
        </div>
        <hr className="h-[1px] bg-gray-400 w-[90%] mx-auto" />

        {/**Message User Info */}
        <div className="flex flex-col gap-1 ml-[5%] my-[1%]">
          <img
            src={message.Image}
            alt="userImage"
            className="w-[50px] h-[50px] rounded-[50%]"
          />
          <h2>{message.name}</h2>
          <p className="Custom-truncate text-gray-500 text-[15px]">
            {message.role}
          </p>
        </div>

        <div className="flex flex-row items-center justify-around">
          <hr className="h-[1.4px] bg-gray-200 w-[30%]" />
          <p className="text-[14px] text-gray-400">JAN 02,2024</p>
          <hr className="h-[1.4px] bg-gray-200 w-[30%]" />
        </div>

        {/**Msg Content */}
        <div>
          <div></div>
        </div>

        <div className="absolute bottom-0 w-full">
          <div className="relative">
            <textarea
              cols={30}
              rows={4}
              className="border border-gray-300 rounded-[10px] p-2 text-[15px] bg-gray-100  resize-none bottom-0 outline-none w-[100%] "
              placeholder="Enter your message"
            ></textarea>

            <motion.div
              whileTap={{ scale: 0.6 }}
              className="absolute bottom-[15%] hover:bg-transparent hover:text-black bg-black text-white p-2 border border-gray-400  cursor-pointer rounded-[50%] right-[2%]  "
            >
              <SendIcon />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;
