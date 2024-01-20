import { MdVideoCall as VideoCall } from "react-icons/md";
import { BsThreeDots as Setting } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Messages from "../../../Pages/Message/MessageData/Messages.js";
import DefaultImg from "../../../assets/Images/Mentor/822.jpg";

const MessagePanel = () => {

  const { messageid } = useParams();
  const message = Messages.find((msg) => Number(msg.id) === Number(messageid));

  const Default = {
    name: "Santhosh",
    Image: DefaultImg,
    role: "Soil expert || Finance Management"
  };

  return (
    <div className="h-screen sm:hidden">
      <div>
        {/**Message Top Menu */}
        <div className="flex flex-row items-center justify-between p-2 ">
          <div className="flex flex-col text-left ml-[15%]">
            <h3 className="text-[15px]">
              {
                message === "" ? Default.name : message.name
              }
            </h3>
            <p className="text-[12px] text-gray-500">Available on Mobile</p>
          </div>
          <div className="flex flex-row justify-around items-center mr-[10%] w-[20%]">
            <VideoCall className="text-gray-500 text-[28px] cursor-pointer" />
            <Setting className="text-gray-500 text-[20px] cursor-pointer" />
          </div>

        </div>
        <hr className="h-[1px] bg-gray-400 w-[90%] mx-auto" />

        {/**Message User Info */}
        <div className="flex flex-col gap-1 ml-[5%] my-[2%]">
          <img src={message === "" ? Default.Image : message.Image} alt="userImage" className="w-[70px] h-[70px] rounded-[50%]" />
          <h2>
            {
              message === "" ? Default.name : message.name
            }
          </h2>
          <p className="Custom-truncate text-gray-500 text-[15px]">
            {
              message === "" ? Default.role : message.role
            }
          </p>
        </div>

        <div className="flex flex-row items-center justify-around">
          <hr className="h-[1.4px] bg-gray-200 w-[30%]" />
          <p className="text-[14px] text-gray-400">JAN 02,2024</p>
          <hr className="h-[1.4px] bg-gray-200 w-[30%]" />
        </div>

        <div>
          {/**Message Content */}

          <div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default MessagePanel;