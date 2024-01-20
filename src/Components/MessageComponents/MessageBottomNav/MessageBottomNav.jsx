import { useState } from "react";
import { FaPlus as Plus } from "react-icons/fa6";
import { RxCross2 as Cross } from "react-icons/rx";
import { IoMicOutline as Mic } from "react-icons/io5";
import { MdOutlineAttachment as Attachement } from "react-icons/md";
import { FaCamera as Camera } from "react-icons/fa";
import { FaVideo as Video } from "react-icons/fa6";
import { MdOutlineAddPhotoAlternate as Photo } from "react-icons/md";
import { MdOutlineGif as GIF } from "react-icons/md";
import { VscMention as Mention } from "react-icons/vsc";
import { IoSend as Send } from "react-icons/io5";


const MessageBottomNav = () => {
    const [additem, setAddItem] = useState(false);
    const AddItemToggle = () => {
        setAddItem(!additem);
    }

    const [inputvalue,setInputValue] = useState("");

    const InputChange = (event)=>{
        setInputValue(event.target.value)
    }

    return (
        <div>
            <div className='fixed bottom-0 w-[100%] p-2 mx-auto z-50 bg-white shadow-sm'>
                <hr/>
                <div className="flex flex-row justify-around items-center w-[100%] p-2">

                    <div className=" p-2 text-[16px] rounded-[50%] cursor-pointer border border-gray-300 text-center hover:bg-gray-200" onClick={AddItemToggle}>
                        {
                            additem ?  <Cross className="text-red-500"/> : <Plus/>
                        }
                    </div>
                    <input type="text" value={inputvalue} placeholder="write a message" className="rounded-[10px] p-2 w-[60%] bg-gray-200 focus:outline-none" onChange={InputChange}/>
                    <div className="p-2 text-[16px] rounded-[50%] cursor-pointer border border-gray-300 text-center hover:bg-gray-200">
                        {
                            inputvalue.length > 0 ? <Send/>  : <Mic />
                        }
                    </div>

                </div>
                

            
                {
                    additem === true &&
                    <div className="p-3 w-[100%] text-gray-500 grid grid-cols-[1fr,1fr,1fr,1fr]  gap-3 justify-center items-center ">

                        {/**attachement */}
                        <div className="text-center cursor-pointer hover:text-black">
                            <div className="text-[16px] text-center w-[30px] h-[30px] p-2 rounded-[50%] mx-auto">
                                <Attachement />
                            </div>
                                <p className="text-[13px]">Attachment</p>
                        </div>

                        {/**camera */}
                        <div className="text-center cursor-pointer hover:text-black">
                            <div className="text-[16px] text-center w-[30px] h-[30px] p-2 rounded-[50%] mx-auto">
                                <Camera />
                            </div>
                                <p className="text-[13px]">Camera</p>
                        </div>

                        {/**Video */}
                        <div className="text-center cursor-pointer hover:text-black">
                            <div className="text-[16px] text-center w-[30px] h-[30px] p-2 rounded-[50%] mx-auto">
                                <Video />
                            </div>
                                <p className="text-[13px]">Video</p>
                        </div>

                        {/**photos */}
                        <div className="text-center cursor-pointer hover:text-black">
                            <div className="text-[16px] text-center w-[30px] h-[30px] p-2 rounded-[50%] mx-auto">
                                <Photo />
                            </div>
                                <p className="text-[13px]">Photos</p>
                        </div>

                        {/**GIF */}
                        <div className="text-center cursor-pointer hover:text-black">
                            <div className="text-[25px] text-center w-[30px] h-[30px] p-2 rounded-[50%] mx-auto">
                                <GIF />
                            </div>
                                <p className="text-[13px]">GIF</p>
                        </div>

                        {/**mention */}
                        <div className="text-center cursor-pointer hover:text-black">
                            <div className="text-[20px] text-center w-[30px] h-[30px] p-2 rounded-[50%] mx-auto">
                                <Mention />
                            </div>
                                <p className="text-[13px]">Mention</p>
                        </div>

                    </div>

                }
            </div>
        </div>
    )
}

export default MessageBottomNav;