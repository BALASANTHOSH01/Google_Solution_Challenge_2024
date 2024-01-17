import { MdEmojiEvents } from "react-icons/md";
import { IoNotificationsCircleOutline } from "react-icons/io5";


const MovingNotification = () => {
  return (
    <div>
        <div className="Moving-notification p-2 text-white bg-green-500 flex flex-row gap-2 items-center rounded-[10px] w-[45%] justify-center">
            <MdEmojiEvents className="text-[17px]"/>
            <h1 className="flex flex-row items-center text-yellow-300 font-medium">Codisiya Grand Agriculture Event&#160;<span className="flex flex-row items-center text-white">
                Notification&#160;<IoNotificationsCircleOutline className="text-[17px]"/>
                </span>
            </h1>
        </div>
    </div>
  )
}

export default MovingNotification;