import { TbAward } from "react-icons/tb";
import ItemData from "../AddItem/ItemData/ItemData.js";
import { RxCross2 } from "react-icons/rx";

const MarketProducts = () => {
  document.documentElement.scrollTop = 0;
  return (
    <div>
      <div className=" flex flex-wrap sm:flex-col justify-evenly sm:my-[5%] sm:mx-auto " >
        <h2 className="text-gray-700 sm:block hidden font-medium text-[20px] my-[3%]">Products</h2>
        {ItemData.map((item) => (
          <div key={item.id} className="w-[26%] sm:w-[80%] my-[2%] hover:shadow-lg rounded-[10px] cursor-pointer sm:mx-auto">
            <div className="p-2 rounded-[10px] border border-gray-200">
                <img src={item.file} alt="ProductImage" className="w-[100%]rounded-[10px]"/>
                <h2 className="text-black text-[17px] mt-[2%] font-medium">{item.name}</h2>
                <h2 className="Custom-truncate text-gray-500 text-[13px] mb-[2%]">{item.description}</h2>
                
                <div className="flex flex-row justify-between my-[3%]">
                <p className="text-gray-500 text-[14px]">Price&#160;:&#160;<span className="text-red-500 font-medium">₹&#160;{item.price}</span></p>
                <p className="mr-[6%] text-gray-500 text-[14px]">No.of&#160;Stocks&#160;:&#160;<span className="text-black font-medium">{item.noofitems}</span></p>
                </div>

                <p className="w-[100%] text-center rounded-[10px] p-2 text-white bg-green-500 font-medium">BUY</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketProducts;
