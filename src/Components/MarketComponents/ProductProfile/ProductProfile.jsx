import { useParams } from "react-router-dom";
import ItemData from "../AddItem/ItemData/ItemData";
import BreadScrem from "./BreadScrem/BreadScrem";
import { FaCartArrowDown as Cart } from "react-icons/fa6"; //Buy icon
import { BsHandbagFill as Bag } from "react-icons/bs";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductStory from "./ProductStory/ProductStory";


const ProductProfile = () => {
    const { productid } = useParams();
    const product = ItemData.find((item) => Number(item.id) === Number(productid));
    return (
        <div>

            <div className="flex md:block flex-row w-[95%] p-3 justify-between">
                <div className="w-[30%] overflow-hidden ">

                    {/**Product Image */}
                    <img src={product.file} alt="ProductImage" className="w-[100%] rounded-[10px]" />

                    <div className="p-2 flex flex-row gap-3 my-[5%]">

                        {/**Add to cart */}
                        <button className="px-2 p-2 rounded-[3px] text-white font-semibold bg-orange-500 flex flex-row gap-1 items-center cursor-pointer w-[50%] justify-center"><Cart />Add&#160;To&#160;Cart</button>

                        {/**Buy Now */}
                        <button className="px-2 p-2 rounded-[3px] text-white font-semibold bg-green-500 flex flex-row gap-1 items-center cursor-pointer w-[50%] justify-center"><Bag />Buy&#160;Now</button>
                    </div>
                </div>
                <div className="w-[60%] flex flex-col gap-2 p-2 text-[17px]">

                    {/**Bread screm */}
                    <BreadScrem name={product.name} />

                    {/**Product name */}
                    <h2 className="text-[25px]">{product.name}</h2>

                    {/**Product Rating */}
                    <div className="flex flex-row gap-2">
                        <div className=" px-3 bg-green-600 text-[14px] text-white font-medium">
                            <p>
                                {
                                    product.rating.star
                                }
                            </p>
                        </div>

                        <div className="flex flex-row gap-2 text-gray-500 text-[14px] font-medium">
                            <div className="flex flex-row gap-1">
                                <p>
                                    {
                                        product.rating.noOfRating
                                    }
                                </p>
                                <p>Ratings</p>
                            </div>
                            <p>&</p>
                            <div className="flex flex-row gap-1">
                                <p>
                                    {
                                        product.rating.noOfReviews
                                    }
                                </p>
                                <p>Reviews</p>
                            </div>
                        </div>
                    </div>

                    {/**Product Price */}
                    <div className="flex flex-col my-[2%]">
                        <p className="text-[15px] text-green-600 font-medium">Special price</p>
                        <p className="text-[23px] text-black font-semibold">₹&#160;{product.price}</p>
                    </div>

                    {/**Available Offer */}
                    <div className="flex flex-col gap-2">
                        <p className=" font-medium text-[15px]">Available Offer</p>
                        <div className="flex flex-row gap-2 my-[1%]">
                            <p className=" text-[14px] font-medium">
                                {
                                    product.offer[0].offerName
                                }

                            </p>
                            <p className="text-[13px]">
                                {
                                    product.offer[0].offerDetails
                                }
                                <span className="text-[12px] text-blue-600 font-medium cursor-pointer">&#160;T&C</span>
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 my-[1%]">
                            <p className=" text-[14px] font-medium">
                                {
                                    product.offer[1].offerName
                                }

                            </p>
                            <p className="text-[13px] ">
                                {
                                    product.offer[1].offerDetails
                                }
                                <span className="text-[12px] text-blue-600 font-medium cursor-pointer">&#160;T&C</span>
                            </p>
                        </div>
                    </div>

                    {/**tags */}
                    <div className="flex flex-row items-center gap-1 my-[3%]">
                        <p className="text-[15px] font-medium">Tags&#160;:&#160;</p>
                        <div className="flex flex-row gap-2 text-[13px]">
                            {product.tag.map((tag) => (
                                <div key={tag}>
                                    <p className="text-gray-500">#<span className="text-green-500">{tag}</span></p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <ProductStory/>
            <ProductDetails/>
        </div>
    )
}

export default ProductProfile;