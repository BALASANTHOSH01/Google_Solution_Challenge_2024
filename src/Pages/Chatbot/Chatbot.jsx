import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdArrowCircleRight } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import run from './Chatbot.js';
import LogoImg from '../../assets/Images/Chatbot/botIcon.jpg';
import userImg from '../../assets/Images/Chatbot/user.jpg';
import Markdown from 'react-markdown';

const Chatbot = () => {

  const [outputValue, setOutputValue] = useState(""); //State for "outputValue"

  //Adjust the textarea's row depends upon the words & characters
  const handleTextRows = (event) => {
    const textValue = event.target.value;
    const Charlength = textValue.length;
    console.log(Charlength);
    const wordCount = textValue.split(/\s+/).length;

    if (Charlength >= 120 || wordCount <= 15) {
      let rows = 1;
      event.target.rows = rows;
    } else if (Charlength >= 240 || wordCount <= 30) {
      let rows = 2;
      event.target.rows = rows;
    } else if (Charlength >= 500 || wordCount <= 60) {
      let rows = 4;
      event.target.rows = rows;
    } else if (Charlength >= 900 || wordCount > 90) {
      let rows = 7;
      event.target.rows = rows;
    }
  }

  //Handling the submission
  const handleSubmit = async () => {
    let Input = document.querySelector("textarea").value;
    const Output = await run(Input);
    setOutputValue(Output);
  }

  //Generate response if I press "Enter" key
  document.addEventListener("keyup", () => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  })

  //For correct space and gap in the output
  const CustomMarkdown = {
    //Heading method
    heading: ({ level }) => {
      const space = level === 1 ? "mb-4" : level === 2 ? "mb-4" : "mb-4";
      const heading = React.createElement(`h${level}`)
      heading.className=space;
      return heading;
    },
    //Paragraph method
    paragraph: ({ children }) => {
      return <p className="mb-2">{children}</p>
    }
  }

  return (
  <div className='w-[70%] sm:w-screen sm:h-[94vh] h-screen my-[1%] mx-auto   p-2 font-Nunito rounded-[10px] flex flex-col items-center relative scrollbar-none'>

    {/**Header */}
    <div className={`flex flex-row w-[65%] sm:w-[95%]  justify-between items-center z-50 p-3 sm:p-2 fixed top-0 bg-white overflow-hidden rounded-b-[25px] border border-gray-300`}>

      <Link to={'/'} className='hover:bg-white rounded-[50%] bg-gray-300'>
        <motion.div whileTap={{ scale: 0.6 }} className='p-2 text-[18px]'>
          <RiHome2Fill />
        </motion.div>
      </Link>

      <p className='text-[20px]'>Agro&#160;Assistant</p>

      <motion.div whileTap={{ scale: 0.6 }} className=' cursor-pointer' id="enter-key">
        <BsThreeDotsVertical />
      </motion.div>
    </div>

    {/**AI OUTPUT */}
    <div className="text-16px text-black mx-auto font-Nunito flex flex-col justify-center p-2 w-[80%] sm:w-[95%] mt-[8%] sm:mt-[14%] sm:pb-[28%] pb-[15%]" >
      <Markdown components={CustomMarkdown}>
        {outputValue}
      </Markdown>
    </div>


    {/**AI ICON */}
    {
      outputValue === "" && <div className='fixed w-[100%] h-[100%] sm:w-screen sm:h-screen flex flex-col justify-center items-center z-0'>

        <img src={LogoImg} alt="LogoImg" className=" rounded-[50%] w-[100px] h-[100px] opacity-90 blur-[0.3px]" />
        <p className="text-[14px] my-[2px] text-gray-400 mx-auto text-center">I&apos;m&#160;Here&#160;Assiste&#160;You&#160;body feel free to ask your doubts !</p>

      </div>
    }

    {/**User PArt */}
    <div className="flex  justify-start w-[80%] md:w-[90%] my-[2%]">
      <div className="flex flex-row gap-2 sm:gap-1 items-center sm:items-start w-[80%] sm:w-[100%] ">
        <img src={userImg} alt="userPart" className="w-[70px] h-[70px]"/>
        <p className="text-[18px] p-2 rounded-[10px] text-black bg-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime explicabo accusamus atque, quibusdam quaerat corrupti praesentium? Optio, hic nam dolorum rem quam doloribus earum maxime placeat, possimus soluta illum?</p>
      </div>
    </div>

    {/**AI PArt */}
    <div className="flex  justify-end w-[80%] md:w-[90%] my-[2%]">
      <div className="flex flex-row gap-2 sm:gap-1 items-center sm:items-start w-[80%] sm:w-[100%] ">
        <p className="text-[18px] p-2 rounded-[10px] text-black bg-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime explicabo accusamus atque, quibusdam quaerat corrupti praesentium? Optio, hic nam dolorum rem quam doloribus earum maxime placeat, possimus soluta illum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ullam repellat quae est accusantium quibusdam? Soluta consectetur culpa doloremque iusto! Incidunt molestias soluta nostrum quidem modi aliquid tempora aut molestiae!</p>
        <img src={LogoImg} alt="userPart" className="w-[70px] h-[70px]"/>
      </div>
    </div>

    {/**User Input */}
    <div className=' sticky pb-3 sm:w-[97%] w-[80%] bg-white flex flex-col bottom-0 rounded-t-[25px]'>

      <div className='flex flex-row rounded-[25px] overflow-hidden h-fit items-center justify-between border p-1 border-gray-400 bg-white w-[100%] '>

        <textarea cols={30} rows={1} onChange={handleTextRows} className='w-[95%] resize-none p-2 focus:outline-none ml-[5px] focus:row-span-4 text-[18px] scrollbar-none' placeholder='Enter your query...' id="input"></textarea>

        <motion.div whileTap={{ scale: 0.6 }}>
          <MdArrowCircleRight onClick={handleSubmit} className="cursor-pointer text-[35px] mr-[1%]" />
        </motion.div>

      </div>

      <p className='text-gray-500 text-[12px] text-center my-[3px]'>Chat with Agro Assistant will clear your agricultural doubts and enhance your agricultural practice.</p>

    </div>

  </div>
)
}

export default Chatbot;