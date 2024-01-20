import { CiSearch as Search } from "react-icons/ci";
import { FaCartArrowDown as Cart } from "react-icons/fa6";
import { BsPlusSquareFill as Add } from "react-icons/bs";
import { HiOutlineDotsHorizontal as Menu } from "react-icons/hi";
import { FaBoxOpen as Order } from "react-icons/fa6";
import { useState } from "react";

const MarketSideNav = () => {
  const [sideNav, setSideNav] = useState("");
  
  return (
    <div>
      <div className="fixed left-0 top-[calc(100vh-90vh)] bg-white z-20  flex flex-col justify-around h-[60vh] mt-[2%]">
        {/* <div className="flex flex-col gap-1">
          <h1 className="text-[20px] font-medium text-green-500 flex flex-row">Green&#160;<span className="text-black">Harbor</span></h1>
          <p className="text-[16px] text-gray-500">Market Place</p>
        </div> */}

        {/* <div className="border border-gray-300 rounded-[10px] flex flex-row items-center  bg-gray-100 w-[45%] h-[45px]">
          <Search className="text-[22px] w-[10%]"/>
          <input type="text" placeholder="Search for Agro Products" className=" border-none focus:outline-none w-[90%] bg-gray-100"/>
        </div> */}

<div className={
            sideNav === "add"
              ? `flex text-black flex-col text-center items-center justify-center p-4 px-10 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-4 px-10 cursor-pointer`
          } onClick={() => setSideNav("add")}>
          <Add className="text-[18px]" />
          <p className=" text-[14px]">Add</p>
          {sideNav === "add" && <hr className="h-[2px] w-[70%]  bg-black" />}
        </div>

        <div
          className={
            sideNav === "cart"
              ? `flex text-black flex-col text-center items-center justify-center p-4 px-10 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-4 px-10 cursor-pointer`
          }
          onClick={() => setSideNav("cart")}
         >
          <Cart className="text-[20px]" />
          <p className=" text-[14px]">Cart</p>
          {sideNav === "cart" && <hr className="h-[2px] w-[70%]  bg-black" />}
        </div>

        <div className={
            sideNav === "order"
              ? `flex text-black flex-col text-center items-center justify-center p-4 px-10 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-4 px-10 cursor-pointer`
          } onClick={() => setSideNav("order")}>
          <Order className="text-[20px]" />
          <p className=" text-[14px]">Orders</p>
          {sideNav === "order" && <hr className="h-[2px] w-[70%]  bg-black" />}
        </div>

        <div className={
            sideNav === "menu"
              ? `flex text-black flex-col text-center items-center justify-center p-4 px-10 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-4 px-10 cursor-pointer`
          } onClick={() => setSideNav("menu")}>
          <Menu className="text-[20px]" />
          <p className=" text-[14px]">Menu</p>
          {sideNav === "menu" && <hr className="h-[2px] w-[70%]  bg-black" />}
        </div>
      </div>
    </div>
  );
};

export default MarketSideNav;
