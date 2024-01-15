import { CiMenuBurger } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import user from '../../assets/Images/man.png';
import { Link } from 'react-router-dom'
import { useState } from "react";
const NavBar = () => {

  const [auth, setAuth] = useState(false);

  const handleUser = () => {
    setAuth(!auth);
  };

  return (
    <div className="p-3">
      <div className="flex flex-row justify-around sm:justify-between">
        <div className="flex box-border justify-center items-center p-3 rounded-[50%] hover:bg-gray-200 cursor-pointer">
          <CiMenuBurger className="text-xl" />
        </div>

        <div className="flex flex-row sm:hidden justify-around w-[50%]">

          <div className="flex flex-row gap-0  box-border overflow-hidden w-[85%]">
            <input type="search" id="search" placeholder="search" className=" p-2 px-3 border border-gray-400 rounded-l-[25px] w-[85%] focus:outline-none focus:border-green-500 focus:border-[1px]" />

            <div className="border border-gray-400 px-5 p-2 bg-gray-200 rounded-r-[25px] cursor-pointer w-[15%] left-0 ">
              <CiSearch className=" text-black text-2xl mx-auto" />
            </div>

          </div>

          <div className="flex box-border justify-center items-center p-3 rounded-[50%] bg-gray-200 cursor-pointer">
            <IoMdMic className="text-xl" />
          </div>

        </div>

        <div className="flex flex-row w-[10%] sm:w-[50%] items-center justify-around">

          <div className="hidden sm:block box-border justify-center items-center p-3 sm:p-2 rounded-[50%] bg-gray-200 sm:hover:bg-gray-200  sm:bg-transparent cursor-pointer">
            <CiSearch className=" text-black text-2xl mx-auto" />
          </div>

          <div className="hidden sm:block box-border justify-center items-center p-3 sm:p-2 rounded-[50%] bg-gray-200 sm:hover:bg-gray-200  sm:bg-transparent cursor-pointer">
            <IoMdMic className="text-xl sm:text-2xl" />
          </div>

          <div className="flex box-border justify-center items-center p-2 sm:p-2 rounded-[50%] bg-gray-200 sm:hover:bg-gray-200  sm:bg-transparent cursor-pointer relative">
            <IoIosNotifications className="text-2xl sm:text-2xl" />
          </div>

          <div className="sm:hidden flex justify-center items-center w-[15px] h-[15px] absolute text-[12px] text-white bg-green-500 top-[2%] right-[12%] p-[10px] rounded-[50%]">

            <p >2</p>
          </div>

          <div>

            <img src={user} alt="user" className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px] cursor-pointer relative" onClick={() => handleUser()} />

            {
              auth === true && <div className="absolute flex flex-col p-1 border border-grey-300 bg-white rounded-[10px] my-[2%] right-[2%]" id="dropdown">

                <Link to={'/AuthSignUp'}>
                  <p className="hover:bg-gray-200 text-black text-lg rounded-[10px] p-2 px-14 sm:px-8">Signup</p>
                </Link>

                <Link to={'/AuthLogIn'}>
                  <p className="hover:bg-gray-200 text-black text-lg rounded-[10px] p-2 px-14 sm:px-8 ">Login</p>
                </Link>
              </div>
            }

          </div>


        </div>

      </div>
    </div>
  )
}

export default NavBar