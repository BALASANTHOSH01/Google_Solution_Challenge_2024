import { TbAward } from "react-icons/tb";
import ItemData from "../AddItem/ItemData/ItemData.js";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import ProductHero from "../ProductHero/ProductHero.jsx";

const MarketProducts = () => {
  document.documentElement.scrollTop = 0;
  return (
    <div className="flex flex-col justify-center">
      <div>
        <ProductHero />
      </div>

        <h1 className="my-[2%] font-medium ml-[5%]">Products</h1>
      <div className=" flex flex-wrap gap-3 justify-evenly sm:my-[5%] sm:mx-auto w-[100%]" >


        {ItemData.map((item) => (
          <Link to={`/market/buy/${item.id}`} key={item.id} className="w-[20%] mb-[2%] sm:w-[40%] my-[2%] hover:shadow-lg rounded-[10px] cursor-pointer sm:mx-auto">
            <div className=" flex flex-col gap-1 justify-center rounded-[10px] border border-gray-200 py-2">

              <img src={item.file} alt="ProductImage" className="w-[90%] h-[200px] rounded-[10px] mx-auto" />

              <h2 className="text-black text-[16px] mx-auto mt-[2%] font-medium">{item.name}</h2>


              <div className="flex flex-row justify-around gap-2 my-[3%]">
                <p className="text-gray-500 text-[12px]">Price&#160;:&#160;<span className="text-red-500 font-medium text-[14px]">₹&#160;{item.price}</span></p>
                <p className="mr-[6%] text-gray-500 text-[12px]">No.of&#160;Stocks&#160;:&#160;<span className="text-black font-medium text-[14px]">{item.noofitems}</span></p>
              </div>

              <p className="w-[90%] mx-auto text-center rounded-[10px] p-2 text-white bg-green-500 font-medium">BUY</p>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarketProducts;
