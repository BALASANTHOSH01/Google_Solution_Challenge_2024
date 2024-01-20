import { useParams } from "react-router-dom";
import Messages from "../MessageData/Messages.js";
import { TiTickOutline } from "react-icons/ti";
import MessageBottomNav from "../../../Components/MessageComponents/MessageBottomNav/MessageBottomNav.jsx";


const MobileMessage = () => {

  const { mobilemessageid } = useParams();
  const message = Messages.find((msg) => Number(msg.id) === Number(mobilemessageid));

  document.documentElement.scrollTop = 0;
  return (
    <div>
      <div className="h-full w-[100%] mt-[25%]">
        {
          <div className="w-[100%] flex flex-row items-end justify-between px-4">
            
            <div className="flex flex-row items-start gap-2">
              <img src={message.Image} alt="userImg" className="rounded-[50%] w-[50px] h-[50px]" />
              <div className="flex flex-col text-left ">
                <h2 className="font-medium text-[17px]">{message.name}</h2>
                <p className="text-[16px]">{message.message}</p>
              </div>
            </div>

            <div className="p-[2px] bg-gray-300 rounded-[50%]">
            <TiTickOutline className="text-[12px]" />
            </div>
          </div>
        }
      </div>
      <MessageBottomNav/>
    </div>
  )
}

export default MobileMessage;