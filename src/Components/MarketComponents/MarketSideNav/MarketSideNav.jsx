import { FaCartArrowDown as Cart } from "react-icons/fa6";
import { BsPlusSquareFill as Add } from "react-icons/bs";
import { HiOutlineDotsHorizontal as Menu } from "react-icons/hi";
import { FaBoxOpen as Order } from "react-icons/fa6";
import { BsHandbagFill as Bag } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MarketSideNav = () => {
  const [sideNav, setSideNav] = useState("buy");

  const location = useLocation();
  useEffect(() => {
    const Path = location.pathname;

    switch (Path) {
      case `/market/additem`:
        setSideNav("add");
        break;
      case `/market/cart`:
        setSideNav("cart");
        break;
      case `/market/buy`:
        setSideNav("buy");
    }
  }, [location.pathname]);

  const navigate = useNavigate();
  useEffect(() => {
    switch (sideNav) {
      case "buy":
        navigate("/market/buy");
        break;
    }
  }, [sideNav]);

 

  // useEffect(()=>{
  //   handleHover(true);
  //   return () => handleHover(false);
  // },[handleHover]);

  return (
    <div>
      <div className="flex flex-row bg-white sm:border mx-auto items-center text-black">

        <Link to={"/market/buy"}>
          <div className={
            sideNav === "buy"
              ? `flex text-black flex-col text-center items-center justify-center p-3 px-7 sm:p-2 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-3 px-7 sm:p-2 cursor-pointer`
          } onClick={() => setSideNav("buy")}>
            <Bag className="hidden sm:block sm:text-[16px]" />
            <p className=" text-[16px] sm:text-[12px]">Products</p>
            {sideNav === "buy" && <hr className="h-[2px] w-[70%]  bg-black" />}
          </div>
        </Link>

        <Link to={"/market/additem"}>
          <div className={
            sideNav === "add"
              ? `flex text-black flex-col text-center items-center justify-center p-3 px-7 sm:p-2 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-3 px-7 sm:p-2 cursor-pointer`
          } onClick={() => setSideNav("add")}>
            <Add className="hidden sm:block sm:text-[16px]" />
            <p className=" text-[16px] sm:text-[12px]">Add</p>
            {sideNav === "add" && <hr className="h-[2px] w-[70%]  bg-black" />}
          </div>
        </Link>

        <Link to={"/market/cart"}>
          <div
            className={
              sideNav === "cart"
                ? `flex text-black flex-col text-center items-center justify-center p-3 px-7 sm:p-2 cursor-pointer`
                : `flex text-gray-500 flex-col text-center items-center justify-center p-3 px-7 sm:p-2 cursor-pointer`
            }
            onClick={() => setSideNav("cart")}
          >
            <Cart className="hidden sm:block sm:text-[18px]" />
            <p className=" text-[16px] sm:text-[12px]">Cart</p>
            {sideNav === "cart" && <hr className="h-[2px] w-[70%]  bg-black" />}
          </div>
        </Link>

        <div className={
          sideNav === "order"
            ? `flex text-black flex-col text-center items-center justify-center p-3 px-7 sm:p-2 cursor-pointer`
            : `flex text-gray-500 flex-col text-center items-center justify-center p-3 px-7 sm:p-2 cursor-pointer`
        } onClick={() => setSideNav("order")}>
          <Order className="hidden sm:block sm:text-[18px]" />
          <p className=" text-[16px] sm:text-[12px]">Orders</p>
          {sideNav === "order" && <hr className="h-[2px] w-[70%]  bg-black" />}
        </div>

        <div className={
          sideNav === "menu"
            ? `flex text-black flex-col text-center items-center justify-center p-3 px-7 sm:p-2 cursor-pointer`
            : `flex text-gray-500 flex-col text-center items-center justify-center p-3 px-7 sm:p-2 cursor-pointer`
        } onClick={() => setSideNav("menu")}>
          <Menu className="hidden sm:block sm:text-[18px]" />
          <p className=" text-[16px] sm:text-[12px]">Menu</p>
          {sideNav === "menu" && <hr className="h-[2px] w-[70%]  bg-black" />}
        </div>

      </div>
    </div>
  );
};

export default MarketSideNav;
