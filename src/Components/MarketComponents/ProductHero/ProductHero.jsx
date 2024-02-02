import ProductHeroData from "./ProductHeroData/ProductHeroData";
import { MdKeyboardArrowDown as Arrowdown } from "react-icons/md";

const ProductHero = () => {
  return (
    <div>
        <div className="w-[97%] sm:w-[100%] mx-auto flex flex-row sm:flex-wrap justify-around sm:justify-start sm:gap-2 p-4 sm:p-2 sm:rounded-none bg-gray-100 border sm:my-[5%] my-[2%] rounded-[10px] items-center">
            {
                ProductHeroData.map((products)=>(
                    <div key={products.id} className="flex flex-col gap-1 items-center cursor-pointer sm:w-[18%]">
                        <img src={products.image} alt="productImg" className="w-[70px] rounded-[10px]"/>
                        <div className="flex flex-row sm:gap-0 items-center">
                        <h1 className="text-[13px] sm:text-[11px] text-gray-500">{products.name}</h1>
                            <Arrowdown className="sm:text-[13px]"/>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductHero;