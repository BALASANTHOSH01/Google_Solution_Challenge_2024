import botImg from '../../assets/Images/Chatbot/botIcon.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoArrowUpCircle } from "react-icons/io5";
import { RiHome2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Chatbot = () => {
  return (
    <div className='w-[400px] sm:w-screen sm:h-[90vh] h-[500px] my-[1%] mx-auto  bg-gray-100 p-2 font-Nunito rounded-[10px] flex flex-col relative '>

      <div className=' absolute w-screen h-screen flex flex-col justify-center items-center'>
        <div className='bg-botLogo bg-cover object-cover rounded-[50%] w-[100px] h-[100px] opacity-70 blur-[0.3px]'>
        </div>
      </div>

      {/**Header */}
      <div className={`flex flex-row w-[100%]  justify-between items-center relative z-50`}>

          <Link to={'/'} className='hover:bg-white rounded-[50%] bg-gray-300'>
          <div className='p-2 '>
            <RiHome2Fill/>
          </div>
          </Link>

            <p className='text-[20px]'>Agro&#160;Assistant</p>

        <div className='mr-[4%] cursor-pointer'>
          <BsThreeDotsVertical />
        </div>
      </div>

      {/**User Input */}
      <div className=' absolute w-[95%]  bottom-2 '>

        <div className='flex flex-row rounded-[25px] overflow-hidden mx-auto h-fit items-center justify-between border border-gray-400 bg-white'>

          <textarea cols={30} rows={1} className='w-[80%] resize-none p-2 focus:outline-none overflow-hidden ml-[5px]' placeholder='Enter your query...'></textarea>

          <div className='p-2 rounded-[10px] text-[22px] cursor-pointer  mr-[2px]'>
            <IoArrowUpCircle />
          </div>

        </div>

        <p className='text-gray-500 text-[12px] text-center my-[3px]'>Chat with Agro Assistant will clear your agricultural doubts and enhance your agricultural practice.</p>

      </div>

    </div>
  )
}

export default Chatbot;