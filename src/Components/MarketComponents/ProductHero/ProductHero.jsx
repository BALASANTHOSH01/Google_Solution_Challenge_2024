import ProductHeroData from "./ProductHeroData/ProductHeroData";
import { MdKeyboardArrowDown as Arrowdown } from "react-icons/md";

const ProductHero = () => {
  return (
    <div>
        <div className="w-[95%] flex flex-row justify-around p-4 bg-gray-100 border my-[2%] rounded-[10px] items-center">
            {
                ProductHeroData.map((products)=>(
                    <div key={products.id} className="flex flex-col gap-1 items-center cursor-pointer">
                        <img src={products.image} alt="productImg" className="w-[70px] rounded-[10px]"/>
                        <div className="flex flex-row gap-[2px] items-center">
                        <h1 className="text-[13px] text-gray-500">{products.name}</h1>
                            <Arrowdown/>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductHero;