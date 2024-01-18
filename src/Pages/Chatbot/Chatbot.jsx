import botImg from '../../assets/Images/Chatbot/botIcon.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

const Chatbot = () => {
  return (
    <div className='w-[400px] h-[500px] my-[1%] mx-auto  bg-green-300 p-2 font-Nunito rounded-[10px] flex flex-col relative '>

      <div className=' aspect-auto absolute bg-bgwave bg-cover object-cover w-[95%] h-[30vh] blur-[0.3px] opacity-70'>
      </div>

      {/**Header */}
      <div className={`flex flex-row w-[100%] h-[100px] justify-between items-center relative z-50`}>

        <div className='flex flex-row w-[60%] justify-around'>
          <img src={botImg} alt="botImage" className="rounded-[50%] w-[65px] h-[65px] cursor-pointer" />

          <div className=''>
            <p className='text-[15px]'>Chat with</p>
            <p className='text-[20px]'>Agro&#160;Assistant</p>
          </div>
        </div>

        <div className='mr-[4%] cursor-pointer'>
          <BsThreeDotsVertical />
        </div>
      </div>

      {/**User Input */}
      <div className=' absolute w-[95%] flex flex-row bg-white rounded-[10px] overflow-hidden mx-auto h-fit bottom-2 items-center justify-around border border-gray-400'>
        <textarea cols={30} rows={2} className='w-[80%] resize-none p-2 focus:outline-none overflow-hidden' placeholder='Enter your query...'></textarea>

        <div className='p-2 rounded-[50%] text-[22px] cursor-pointer bg-green-400 '>
        <IoSend/>
        </div>
      </div>

    </div>
  )
}

export default Chatbot;