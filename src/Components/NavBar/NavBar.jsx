import { CiMenuBurger } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import user from '../../assets/Images/man.png';
import { Link } from 'react-router-dom'
import { useState } from "react";
const NavBar = () => {

  const [auth, setAuth] = useState(false);

  const handleUser = () => {
    setAuth(!auth);
    setTimeout(() => !auth, 2000);
  };

  const [leftmenu, setLeftMenu] = useState(false);
  const handleLeftMenu = () => {
    setLeftMenu(!leftmenu);
  }

  const handleLeftMenuElement = ()=>{
    setTimeout(()=>setLeftMenu(false),30);
  }

  return (
    <div className="p-3">
      <div className="flex flex-row justify-around sm:justify-between">

        {
          leftmenu === true ?
            <div className="flex box-border justify-center items-center p-3 rounded-[50%]  hover:bg-red-500 sm:focus:bg-red-500 hover:text-white cursor-pointer" onClick={() => handleLeftMenu()} >
              <RxCross2 className="text-xl"/>
            </div>
            :

            <div className="flex box-border justify-center items-center p-3 rounded-[50%]  hover:bg-green-500 sm:focus:bg-green-500 hover:text-white cursor-pointer" onClick={() => handleLeftMenu()} >
              <CiMenuBurger className="text-xl"/>
            </div>
        }

        {
          leftmenu === true ?
            <div className="absolute w-[90%] flex flex-col gap-2 p-1 bg-white rounded-[10px] text-[20px] left-3 top-[18%] duration-700 translate-x-1">
              <Link to={'/'} className="hover:bg-gray-300 text-black rounded-[10px] p-4 px-20 text-center" onClick={()=>handleLeftMenuElement()}>Home</Link>
              <Link to={"/event"} className="hover:bg-gray-300 text-black rounded-[10px] p-4 px-20 text-center" onClick={()=>handleLeftMenuElement()}>Events</Link>
              <Link className="hover:bg-gray-300 text-black rounded-[10px] p-4 px-20 text-center" onClick={()=>handleLeftMenuElement()}>Camping</Link>
              <Link className="hover:bg-gray-300 text-black rounded-[10px] p-4 px-20 text-center" onClick={()=>handleLeftMenuElement()}>Agro&#160;News</Link>
              <Link className="hover:bg-gray-300 text-black rounded-[10px] p-4 px-20 text-center" onClick={()=>handleLeftMenuElement()}>Mentor</Link>
            </div> :
            <></>
        }


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

        <div className="flex flex-row w-[13%] sm:w-[50%] items-center justify-around">

          <div className="hidden sm:block box-border justify-center items-center p-3 sm:p-2 rounded-[50%]  hover:bg-green-500 hover:text-white  cursor-pointer">
            <CiSearch className=" text-2xl mx-auto" />
          </div>

          <div className="hidden sm:block box-border justify-center items-center p-3 sm:p-2 rounded-[50%]  hover:bg-green-500 hover:text-white  cursor-pointer">
            <IoMdMic className="text-xl sm:text-2xl" />
          </div>

          {/**Notification */}
          <div className=" sm:block box-border justify-center items-center p-2 sm:p-2 rounded-[50%] bg-gray-200 sm:bg-transparent  sm:hover:bg-green-500 sm:hover:text-white  cursor-pointer relative">
            <IoIosNotifications className="text-2xl sm:text-2xl" />
          </div>

          <div className="sm:hidden flex justify-center items-center w-[15px] h-[15px] absolute text-[12px] text-white bg-green-500 top-[2%] right-[14%] p-[10px] rounded-[50%]">

            <p >2</p>
          </div>

          <div>

            <img src={user} alt="user" className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px] cursor-pointer relative" onClick={() => handleUser()} />

            {
              auth === true && <div className="absolute w-[80%] flex flex-col p-2 border border-grey-300 bg-white rounded-[10px] my-[4%] right-[4%] text-center" id="dropdown">

                <Link to={'/userprofile'}>
                  <p className="hover:bg-gray-200 text-black text-lg rounded-[10px] p-3 px-14 sm:px-14 ">User</p>
                </Link>

                <Link to={'/AuthSignUp'}>
                  <p className="hover:bg-gray-200 text-black text-lg rounded-[10px] p-3 px-14 sm:px-14">Signup</p>
                </Link>

                {/* <Link to={'/AuthLogIn'}>
                  <p className="hover:bg-gray-200 text-black text-lg rounded-[10px] p-2 px-14 sm:px-8 ">Login</p>
                </Link> */}

              </div>
            }

          </div>


        </div>

      </div>
    </div>
  )
}

export default NavBar