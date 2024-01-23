import { Link } from "react-router-dom";
import { FaCartArrowDown as Cart } from "react-icons/fa6";
import { BsPlusSquareFill as Add } from "react-icons/bs";
import { HiOutlineDotsHorizontal as Menu } from "react-icons/hi";
import { FaBoxOpen as Order } from "react-icons/fa6";
import { BsHandbagFill as Bag } from "react-icons/bs";
import { useState } from "react";

const MobileBottomNav = () => {
    const [bottomnav,setBottomNav]=useState("buy");
    
  return (
    <div >
        <div className="fixed bottom-0 mx-auto z-50 p-2 w-[95%] bg-white flex flex-row justify-around">
        <Link to={"/market/buy"}>
          <div className={
            bottomnav === "buy"
              ? `flex text-black flex-col text-center items-center justify-center p-2 px-5 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-2 px-5 cursor-pointer`
          } onClick={() => setBottomNav("buy")}>
            <Bag className="text-[18px] " />
            <p className=" text-[14px]">Products</p>
            {bottomnav === "buy" && <hr className="h-[2px] w-[70%]  bg-black" />}
          </div>
        </Link>

        <Link to={"/market/additem"}>
          <div className={
            bottomnav === "add"
              ? `flex text-black flex-col text-center items-center justify-center p-2 px-5 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-2 px-5 cursor-pointer`
          } onClick={() => setBottomNav("add")}>
            <Add className="text-[18px] " />
            <p className=" text-[14px] ">Add</p>
            {bottomnav === "add" && <hr className="h-[2px] w-[70%]  bg-black" />}
          </div>
        </Link>

        <Link to={"/market/cart"}>
          <div className={
            bottomnav === "cart"
              ? `flex text-black flex-col text-center items-center justify-center p-2 px-5 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-2 px-5 cursor-pointer`
          } onClick={() => setBottomNav("cart")}>
            <Cart className="text-[18px] " />
            <p className=" text-[14px]">Cart</p>
            {bottomnav === "cart" && <hr className="h-[2px] w-[70%]  bg-black" />}
          </div>
        </Link>

          <div className={
            bottomnav === "order"
              ? `flex text-black flex-col text-center items-center justify-center p-2 px-5 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-2 px-5 cursor-pointer`
          } onClick={() => setBottomNav("order")}>
            <Order className="text-[18px]" />
            <p className=" text-[14px]">Order</p>
            {bottomnav === "order" && <hr className="h-[2px] w-[70%]  bg-black" />}
          </div>

          <div className={
          bottomnav === "menu"
            ? `flex text-black flex-col text-center items-center justify-center p-2 px-5 cursor-pointer`
            : `flex text-gray-500 flex-col text-center items-center justify-center p-2 px-5 cursor-pointer`
        } onClick={() => setBottomNav("menu")}>
          <Menu className="text-[18px]" />
          <p className=" text-[14px]">Menu</p>
          {bottomnav === "menu" && <hr className="h-[2px] w-[70%]  bg-black" />}
        </div>

        </div>
    </div>
  )
}

export default MobileBottomNav;