// import { CiMenuBurger } from "react-icons/ci";
// import { IoMdMic } from "react-icons/io";
// import { TiGroup } from "react-icons/ti";
// import { CiSearch } from "react-icons/ci";
// import { MdEventNote } from "react-icons/md";
// import { RiHome2Fill } from "react-icons/ri";
// import { RxCross2 } from "react-icons/rx";
// import user from '../../assets/Images/man.png';
// import { Link } from 'react-router-dom'
// import { useState } from "react";
// const NavBar = () => {

//   const [auth, setAuth] = useState(false);

//   const handleUser = () => {
//     setAuth(!auth);
//     setTimeout(() => !auth, 2000);
//   };

//   const [leftmenu, setLeftMenu] = useState(false);
//   const handleLeftMenu = () => {
//     setLeftMenu(!leftmenu);
//   }

//   const handleLeftMenuElement = () => {
//     setTimeout(() => setLeftMenu(false), 30);
//   }

//   return (
//     <div className="p-3 sm:shadow-md sm:fixed top-0 sm:w-[100%] sm:z-50 sm:bg-white ">
//       <div className="flex flex-row justify-around sm:justify-between ">

//         <div className="flex flex-row justify-around sm:justify-between w-[45%]">
          
//         {
//           leftmenu === true ?
//             <div className="flex box-border justify-center items-center p-3 rounded-[50%]  hover:bg-red-500 sm:focus:bg-red-500 hover:text-white cursor-pointer h-[45px]" onClick={() => handleLeftMenu()} >
//               <RxCross2 className="text-xl" />
//             </div>
//             :

//             <div className="flex box-border justify-center items-center p-3 rounded-[50%]  hover:bg-green-500 sm:focus:bg-green-500 hover:text-white cursor-pointer h-[45px]" onClick={() => handleLeftMenu()} >
//               <CiMenuBurger className="text-xl" />
//             </div>
//         }

//         {
//           leftmenu === true ?
//             <div className="absolute sm:w-[90%] w-[40%] flex flex-col gap-2 p-1 bg-white rounded-[10px] text-[20px] left-3 top-[20%] sm:top-[150%] duration-700 translate-x-1 z-50">
//               <Link className="hover:bg-gray-300 text-black rounded-[10px] p-4 px-20 text-center" onClick={() => handleLeftMenuElement()}>Agro&#160;News</Link>
//               <Link className="hover:bg-gray-300 hidden sm:block text-black rounded-[10px] p-4 px-20 text-center" onClick={() => handleLeftMenuElement()}>Camping</Link>
//               <Link to={"/about"} className="hover:bg-gray-300 text-black rounded-[10px] p-4 px-20 text-center" onClick={() => handleLeftMenuElement()}>About&#160;Us</Link>

//             </div> :
//             <></>
//         }


//         <div className="flex flex-row sm:hidden ml-[4%] justify-between left-0  w-[80%]">

//           <div className="flex flex-row gap-0  box-border overflow-hidden w-[80%] h-[45px]">
//             <input type="search" id="search" placeholder="search" className=" p-2 px-3 border border-gray-400 rounded-l-[10px] w-[80%] focus:outline-none focus:border-green-500 focus:border-[1px]" />

//             <div className="border border-gray-400 px-5 p-2 bg-gray-200 rounded-r-[10px] cursor-pointer w-[20%] block mx-auto left-0  ">
//               <CiSearch className=" text-black text-2xl mx-auto" />
//             </div>

//           </div>

//           <div className="flex box-border justify-center items-center p-3 rounded-[50%] bg-gray-200 cursor-pointer h-[45px]">
//             <IoMdMic className="text-xl" />
//           </div>

//         </div>

//         </div>


//         <div className="flex flex-row w-[25%] sm:w-[50%] items-center justify-around sm:mt-[1%]">

//           <Link to={"/"} className="text-center">
//             <div className="block box-border justify-center items-center p-3 sm:p-2 rounded-[50%] bg-gray-200 sm:bg-transparent  hover:bg-green-500 hover:text-white  cursor-pointer">
//               <RiHome2Fill className=" text-xl sm:text-2xl mx-auto" />
//             </div>
//               <p className="text-gray-400 text-[13px] sm:hidden">Home</p>
//           </Link>

//           <Link to={'/mentor'} className="text-center">
//             <div className="block box-border justify-center items-center p-3 sm:p-2 rounded-[50%] bg-gray-200 sm:bg-transparent  hover:bg-green-500 hover:text-white  cursor-pointer">
//               <TiGroup className="text-xl sm:text-2xl mx-auto" />
//             </div>
//             <p className="text-gray-400 text-[13px] sm:hidden">Mentor</p>
//           </Link>

//           {/**Notification */}


//           <Link to={"/event"} className="text-center">
//             <div className="block box-border justify-center items-center p-3  rounded-[50%] sm:bg-transparent bg-gray-200  hover:bg-green-500 hover:text-white  cursor-pointer relative">
//               <MdEventNote className=" text-xl sm:text-2xl mx-auto" />
//             </div>
//             <p className="text-gray-400 text-[13px] sm:hidden">Event</p>
//           </Link>



//           <div className="text-center">

//             <img src={user} alt="user" className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px] cursor-pointer relative" onClick={() => handleUser()} />
//             <p className="sm:hidden text-gray-400 text-[13px] ">Profile</p>

//             {
//               auth === true && <div className="absolute sm:w-[80%] w-[40%] flex flex-col p-2 border border-grey-300 bg-white rounded-[10px] my-[4%] right-[4%] text-center" id="dropdown">

//                 <Link to={'/userprofile'}>
//                   <p className="hover:bg-gray-200 text-black text-lg rounded-[10px] p-3 px-14 sm:px-14 ">User</p>
//                 </Link>

//                 <Link to={'/AuthSignUp'}>
//                   <p className="hover:bg-gray-200 text-black text-lg rounded-[10px] p-3 px-14 sm:px-14">Signup</p>
//                 </Link>

//               </div>
//             }

//           </div>


//         </div>

//       </div>
//     </div>
//   )
// }

// export default NavBar