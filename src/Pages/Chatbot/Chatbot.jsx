import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdArrowCircleRight } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Chatbot = () => {

  const[inputValue, setInputValue]=useState("");

  const handleTextRows = (event)=>{

    const textValue = event.target.value;
    setInputValue(textValue);

    const wordCount = textValue.split(/\s+/).length;

    if(wordCount<=30){
      let rows=2;
      event.target.rows = rows;
    } else if(wordCount<=60){
      let rows =4;
      event.target.rows = rows;
    } else if(wordCount > 90){
      let rows = 7;
      event.target.rows = rows;
    }


  }
  return (
    <div className='w-[70%] sm:w-screen sm:h-[94vh] h-[500px] my-[1%] mx-auto   p-2 font-Nunito rounded-[10px] flex flex-col items-center relative'>

      <div className='absolute w-[100%] h-[100%] sm:w-screen sm:h-screen flex flex-col justify-center items-center'>
        <div className='bg-botLogo bg-cover object-cover rounded-[50%] w-[100px] h-[100px] opacity-70 blur-[0.3px]'>
        </div>
      </div>

      {/**Header */}
      <div className={`flex flex-row w-[100%]  justify-between items-center relative z-50 p-1`}>

          <Link to={'/'} className='hover:bg-white rounded-[50%] bg-gray-300'>
          <div className='p-2 text-[18px]'>
            <RiHome2Fill/>
          </div>
          </Link>

            <p className='text-[20px]'>Agro&#160;Assistant</p>

        <div className='mr-[4%] cursor-pointer'>
          <BsThreeDotsVertical />
        </div>
      </div>

      {/**User Input */}
      <div className=' absolute sm:w-[95%] w-[80%] flex flex-col bottom-2 '>

        <div className='flex flex-row rounded-[25px] overflow-hidden h-fit items-center justify-between border p-1 border-gray-400 bg-white w-[100%]'>

          <textarea cols={30} rows={2} onChange={handleTextRows} value={inputValue}  className='w-[95%] resize-none p-2 focus:outline-none overflow-hidden ml-[5px] focus:row-span-4 text-[18px]' placeholder='Enter your query...'></textarea>

          <div className='p-2 rounded-[10px] text-[22px] cursor-pointer  mr-[2px]'>
            <MdArrowCircleRight />
          </div>

        </div>

        <p className='text-gray-500 text-[12px] text-center my-[3px]'>Chat with Agro Assistant will clear your agricultural doubts and enhance your agricultural practice.</p>

      </div>

    </div>
  )
}

export default Chatbot;