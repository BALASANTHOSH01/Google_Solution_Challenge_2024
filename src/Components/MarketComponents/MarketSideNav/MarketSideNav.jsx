import { FaCartArrowDown as Cart } from "react-icons/fa6";
import { BsPlusSquareFill as Add } from "react-icons/bs";
import { HiOutlineDotsHorizontal as Menu } from "react-icons/hi";
import { FaBoxOpen as Order } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsHandbagFill as Bag } from "react-icons/bs";

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
  useEffect(()=>{
    switch(sideNav){
      case "buy":
        navigate("/market/buy");
        break;
    }
  },[sideNav])

  return (
    <div>
      <div className="fixed left-0 top-[calc(100vh-90vh)] sm:top-[90%] bg-white z-20 sm:w-[100%] sm:bottom-[0px] flex flex-col sm:flex-row sm:justify-evenly justify-around items-center h-[60vh] sm:h-[10vh] mt-[2%] p-2 sm:p-1 sm:px-5 pt-[5%] sm:pt-1 sm:py-3">

        <Link to={"/market/buy"}>
          <div className={
            sideNav === "buy"
              ? `flex text-black flex-col text-center items-center justify-center p-4 px-10 sm:p-2 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-4 px-10 sm:p-2 cursor-pointer`
          } onClick={() => setSideNav("buy")}>
            <Bag className="text-[18px] sm:text-[16px]" />
            <p className=" text-[14px] sm:text-[12px]">Products</p>
            {sideNav === "buy" && <hr className="h-[2px] w-[70%]  bg-black" />}
          </div>
        </Link>

        <Link to={"/market/additem"}>
          <div className={
            sideNav === "add"
              ? `flex text-black flex-col text-center items-center justify-center p-4 px-10 sm:p-2 cursor-pointer`
              : `flex text-gray-500 flex-col text-center items-center justify-center p-4 px-10 sm:p-2 cursor-pointer`
          } onClick={() => setSideNav("add")}>
            <Add className="text-[18px] sm:text-[16px]" />
            <p className=" text-[14px] sm:text-[12px]">Add</p>
            {sideNav === "add" && <hr className="h-[2px] w-[70%]  bg-black" />}
          </div>
        </Link>

        <Link to={"/market/cart"}>
          <div
            className={
              sideNav === "cart"
                ? `flex text-black flex-col text-center items-center justify-center p-4 px-10 sm:p-2 cursor-pointer`
                : `flex text-gray-500 flex-col text-center items-center justify-center p-4 px-10 sm:p-2 cursor-pointer`
            }
            onClick={() => setSideNav("cart")}
          >
            <Cart className="text-[20px] sm:text-[18px]" />
            <p className=" text-[14px] sm:text-[12px]">Cart</p>
            {sideNav === "cart" && <hr className="h-[2px] w-[70%]  bg-black" />}
          </div>
        </Link>

        <div className={
          sideNav === "order"
            ? `flex text-black flex-col text-center items-center justify-center p-4 px-10 sm:p-2 cursor-pointer`
            : `flex text-gray-500 flex-col text-center items-center justify-center p-4 px-10 sm:p-2 cursor-pointer`
        } onClick={() => setSideNav("order")}>
          <Order className="text-[20px] sm:text-[18px]" />
          <p className=" text-[14px] sm:text-[12px]">Orders</p>
          {sideNav === "order" && <hr className="h-[2px] w-[70%]  bg-black" />}
        </div>

        <div className={
          sideNav === "menu"
            ? `flex text-black flex-col text-center items-center justify-center p-4 px-10 sm:p-2 cursor-pointer`
            : `flex text-gray-500 flex-col text-center items-center justify-center p-4 px-10 sm:p-2 cursor-pointer`
        } onClick={() => setSideNav("menu")}>
          <Menu className="text-[20px] sm:text-[18px]" />
          <p className=" text-[14px] sm:text-[12px]">Menu</p>
          {sideNav === "menu" && <hr className="h-[2px] w-[70%]  bg-black" />}
        </div>
      </div>
    </div>
  );
};

export default MarketSideNav;
