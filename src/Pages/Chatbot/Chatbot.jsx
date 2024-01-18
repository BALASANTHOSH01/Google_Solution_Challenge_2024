import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdArrowCircleRight } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import run from './Chatbot.js';

const Chatbot = () => {

  const [outputValue, setOutputValue] = useState("");

  const handleTextRows = (event) => {
    const textValue = event.target.value;
    const Charlength = textValue.length;
    console.log(Charlength);
    const wordCount = textValue.split(/\s+/).length;

    if (Charlength >= 120 || wordCount <= 15 ) {
      let rows = 1;
      event.target.rows = rows;
    } else if(Charlength >= 240  || wordCount <= 30 ){
      let rows = 2;
      event.target.rows = rows;
    } else if (Charlength >= 500 || wordCount <= 60 ) {
      let rows = 4;
      event.target.rows = rows;
    } else if (Charlength >= 900 || wordCount > 90 ) {
      let rows = 7;
      event.target.rows = rows;
    }
  }

  const handleSubmit = async () => {
    const Input = document.querySelector("textarea").value;
    const Output = await run(Input);
    setOutputValue(Output);
  }

  document.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  })


  return (
    <div className='w-[70%] sm:w-screen sm:h-[94vh] h-screen my-[1%] mx-auto   p-2 font-Nunito rounded-[10px] flex flex-col items-center relative scrollbar-none'>

      {/**Header */}
      <div className={`flex flex-row w-[65%] sm:w-[95%]  justify-between items-center z-50 p-3 sm:p-2 fixed top-0 bg-white overflow-hidden rounded-b-[25px] border border-gray-300`}>

        <Link to={'/'} className='hover:bg-white rounded-[50%] bg-gray-300'>
          <motion.div whileTap={{scale:0.6}} className='p-2 text-[18px]'>
            <RiHome2Fill />
          </motion.div>
        </Link>

        <p className='text-[20px] text-green-500'>Agro&#160;Assistant</p>

        <motion.div whileTap={{scale:0.6}} className=' cursor-pointer'>
          <BsThreeDotsVertical />
        </motion.div>
      </div>

      <div className="text-16px text-black mx-auto font-Nunito flex flex-col justify-center p-2 w-[80%] mt-[8%] sm:mt-[10%] sm:pb-[28%] pb-[15%]" >
        <div className=" mx-auto tracking-wider" dangerouslySetInnerHTML={{ __html: outputValue }}>
          
        </div>
      </div>


      {
        outputValue === "" && <div className='fixed w-[100%] h-[100%] sm:w-screen sm:h-screen flex flex-col justify-center items-center z-0'>
        <div className='bg-botLogo bg-cover object-cover rounded-[50%] w-[100px] h-[100px] opacity-70 blur-[0.3px]'>
        </div>
          <p className="text-[14px] my-[2px] text-gray-400 mx-auto text-center">I&apos;m&#160;Here&#160;Assiste&#160;You&#160;body feel free to ask your doubts !</p>
          
      </div>
      }

      {/**User Input */}
      <div className=' fixed pb-3 sm:w-[97%] w-[60%] bg-white flex flex-col bottom-0 rounded-t-[25px]'>

          <div className='flex flex-row rounded-[25px] overflow-hidden h-fit items-center justify-between border p-1 border-gray-400 bg-white w-[100%] '>

            <textarea cols={30} rows={1} onChange={handleTextRows}  className='w-[95%] resize-none p-2 focus:outline-none ml-[5px] focus:row-span-4 text-[18px] scrollbar-none' placeholder='Enter your query...' id="input"></textarea>

            
              <motion.div whileTap={{scale:0.6}}>
              <MdArrowCircleRight onClick={handleSubmit} className="cursor-pointer text-[35px] mr-[1%]" />
              </motion.div>

          </div>

        <p className='text-gray-500 text-[12px] text-center my-[3px]'>Chat with Agro Assistant will clear your agricultural doubts and enhance your agricultural practice.</p>

      </div>

    </div>
  )
}

export default Chatbot;