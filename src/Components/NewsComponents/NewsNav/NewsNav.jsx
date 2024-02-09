import { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoReturnDownBack as Backbtn } from "react-icons/io5";
import { CiSearch as Search } from "react-icons/ci";
import { AiOutlineMenu as Menu } from "react-icons/ai";
import { HiHome as Home } from "react-icons/hi2"; //Home Icon
import NewsMenuContent from './NewsMenuContent/NewsMenuContent';
import { RxCross2 as Cross } from "react-icons/rx";

const NewsNav = () => {
    const [newsNavitem, setNewsNavItem] = useState("region");

    const [newsmenu, setNewsMenu] = useState(false);
    const NewsMenuToggle = () => {
        setNewsMenu(!newsmenu);
    }

    return (
        <div className='p-5 flex flex-col font-Manrope shadow-lg top-0 w-screen z-50 bg-white'>


            <Link to={"/"} className='absolute left-[5%] top-[5%]'>
                <div>
                    <div className="p-2 hover:bg-gray-200 text-[22px] rounded-[50%] cursor-pointer text-black font-bold ">
                        <Home />
                    </div>
                </div>
            </Link>

            <div className='absolute text-[22px] p-2 rounded-[50%] hover:bg-gray-200 right-[5%] top-[5%] cursor-pointer duration-500 ease-out' onClick={() => { NewsMenuToggle() }}>
                {
                    newsmenu ? <Cross className='text-red-500' /> : <Menu />
                }
            </div>

            {/**Heading */}
            <div className='flex flex-row gap-2 font-semibold text-[50px] mx-auto font-Manrope'>
                <h1 className='text-green-700'>Green</h1>
                <h1 className='text-black'>Harbor</h1>
            </div>

            {/**Nav items */}
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
                    newsNavitem === "business" ?
                        <p onClick={() => setNewsNavItem("business")} className="cursor-pointer">Business
                            <hr className='h-[3px]  w-[100%] bg-gray-700' />
                        </p>
                        :
                        <p onClick={() => setNewsNavItem("business")} className="cursor-pointer">Business

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
            </div>

            {/**Search, Subscribe and Login */}
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

                    <Link to={"/AuthLogIn"}>
                        <button className='p-1 px-2 w-[100px] hover:bg-green-500 hover:text-white hover:ease-in-out hover:duration-700 font-medium uppercase rounded-[3px] bg-transparent text-black border border-green-500'>Login</button>
                    </Link>
                    
                </div>

            </div>

            {
                newsmenu && <NewsMenuContent />
            }
        </div>
    )
}

export default NewsNav;