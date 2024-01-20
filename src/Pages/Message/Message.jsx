import { Outlet } from "react-router-dom";
import MessagePanel from "../../Components/MessageComponents/MessagePanel/MessagePanel.jsx";
import UserList from "../../Components/MessageComponents/UserList/UserList.jsx";
import Messages from "./MessageData/Messages.js";

const Message = () => {
    document.documentElement.scrollTop = 0;
    return (
        <div className="flex flex-row gap-2 h-screen">

            <div className="w-[35%] sm:w-[90%] sm:mx-auto overflow-auto  my-[5%]">

                <h2 className=" text-[19px] ml-[5%] text-black mb-[5%]">Recent&#160;List</h2>

                {Messages.map((usermsg) => (
                    <div
                        key={usermsg.id}
                        className="flex flex-col gap-2 rounded-[10px] p-2 pb-[5%]"
                    >
                        {/**User list */}
                        <div >
                            <UserList props={usermsg} />
                            <hr className="w-[70%] mx-auto bg-gray-400 h-[1px]" />
                        </div>

                    </div>
                ))}
            </div>

            {/**Message Panel */}
            <div className="w-[50%] sm:hidden border border-gray-400 rounded-[10px]">
                <Outlet />
            </div>
            
        </div>
    );
};

export default Message;
