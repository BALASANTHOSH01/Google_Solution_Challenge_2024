import { BiSolidLike as Likeicon } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";

// import { AiTwotoneLike as Likeicon } from "react-icons/ai";
import { useState } from "react";


const Reaction = () => {

    const [reactionclick,setReactionClick]=useState("");

    const [like,setLike]=useState(false);
    const [command,setCommand]=useState(false);
    const [share,setShare]=useState(false);

    const LikeToggle=()=>{
        setLike(!like);
    }

    const CommandToggle=()=>{
        setCommand(!command);
    }

    const ShareToggle=()=>{
        setCommand(!share);
    }
    

    return (
        <div>
            <div className="flex flex-row p-2 px-3 justify-around mt-[2%]">

                <div  className={like ? `flex text-[20px] flex-row items-center gap-2 text-blue-500 cursor-pointer`:`flex text-[20px] flex-row items-center text-gray-500 gap-2 cursor-pointer`} onClick={()=>LikeToggle()} >
                    <Likeicon/>
                    <p className="text-[14px] font-medium">{like?"Unlike":"Like"}</p>
                </div>

                <div className="flex text-[20px] flex-row items-center text-gray-500 gap-2 cursor-pointer" onClick={()=>CommandToggle}  >
                    <AiFillMessage />
                    <p className="text-[14px] font-medium">Comment</p>
                </div>

                <div className="flex text-[20px] flex-row items-center text-gray-500 gap-2 cursor-pointer" onClick={()=>ShareToggle} >
                    <IoIosShareAlt />
                    <p className="text-[14px] font-medium">Share</p>
                </div>
            </div>
        </div>
    )
}

export default Reaction