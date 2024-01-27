import  { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoReturnDownBack as Backbtn } from "react-icons/io5";
import { CiSearch as Search } from "react-icons/ci";

const NewsNav = () => {
    const [newsNavitem, setNewsNavItem] = useState("region");
    return (
        <div className='p-5 flex flex-col font-Manrope shadow-lg top-0 w-screen z-50 bg-white'>


            <Link to={"/"} className='absolute left-[4%] top-[4%]'>
                <div>
                    <div className="  px-2 p-1 bg-black text-[22px] rounded-[5px] cursor-pointer text-white font-bold ">
                        <Backbtn />
                    </div>
                    <p className="text-gray-500 text-[15px] mt-[1%]">Back</p>
                </div>
            </Link>

            {/**Heading */}
            <div className='flex flex-row gap-2 font-semibold text-[50px] mx-auto font-Manrope'>
                <h1 className='text-green-700'>Green</h1>
                <h1 className='text-black'>Harbor</h1>
            </div>

            <div className='flex flex-row justify-evenly my-[2%] font-semibold text-[20px] w-[50%] mx-auto font-Manrope'>

                {
                    newsNavitem === "region" ?
                        <p onClick={() => setNewsNavItem("region")} className="cursor-pointer">Region
                            <hr className='h-[3px] w-[100%] bg-gray-700' />
                        </p>
                        :
                        <p onClick={() => setNewsNavItem("region")} className="cursor-pointer">Region

                        </p>
                }

                {
                    newsNavitem === "world" ?
                        <p onClick={() => setNewsNavItem("world")} className="cursor-pointer">World
                            <hr className='h-[3px]  w-[100%] bg-gray-700' />
                        </p>
                        :
                        <p onClick={() => setNewsNavItem("world")} className="cursor-pointer">World

                        </p>
                }

                {
                    newsNavitem === "e-paper" ?
                        <p onClick={() => setNewsNavItem("e-paper")} className="cursor-pointer">e-Paper
                            <hr className='h-[3px]  w-[100%] bg-gray-700' />
                        </p>
                        :
                        <p onClick={() => setNewsNavItem("e-paper")} className="cursor-pointer">e-Paper

                        </p>
                }

                <Link to={"/bot"}>
                {
                    newsNavitem === "bot-news" ?
                        <p onClick={() => setNewsNavItem("bot-news")} className="cursor-pointer">Bot&#160;News
                            <hr className='h-[3px]  w-[100%] bg-gray-700' />
                        </p>
                        :
                        <p onClick={() => setNewsNavItem("bot-news")} className="cursor-pointer">Bot&#160;News

                        </p>
                }
                </Link>

            </div>

            <div className='flex flex-row items-center gap-4 justify-center w-[80%] mx-auto my-[2%]'>

                <div className='relative flex flex-row items-center rounded-[3px] border overflow-hidden mr-[5%]'>
                    <input type='text' id='search' placeholder='SEARCH' className='p-1 px-2 w-[85%]   outline-none ' />
                    <label htmlFor='search' className='text-[18px] font-medium absolute right-[5%] cursor-pointer'>
                        <Search />
                    </label>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <p className='p-1 rounded-[50%] text-[15px] bg-green-500 text-white font-medium'>GH</p>
                    <p>Free Trial</p>
                </div>

                <div className='flex flex-row gap-3'>
                    <button className='p-1 px-2 w-[100px] font-medium uppercase rounded-[3px] bg-green-500 text-white hover:bg-transparent hover:ease-in-out hover:text-black hover:border hover:border-green-500 hover:duration-700'>Subscribe</button>
                    <button className='p-1 px-2 w-[100px] hover:bg-green-500 hover:text-white hover:ease-in-out hover:duration-700 font-medium uppercase rounded-[3px] bg-transparent text-black border border-green-500'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default NewsNav;