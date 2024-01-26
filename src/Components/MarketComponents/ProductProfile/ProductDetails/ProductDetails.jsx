import { useParams } from "react-router-dom";
import ItemData from "../../AddItem/ItemData/ItemData";

const ProductDetails = () => {
    const { productid } = useParams();
    const product = ItemData.find((item) => Number(item.id) === Number(productid));
  return (
    <div>
        {/**About */}
        <div className="my-[2%] w-[90%] mx-auto">
                <h2 className="font-medium text-[18px]">About&#160;:</h2>

              {/**Product Description */}
              <p className="text-[15px] my-[1%] w-[80%] ml-[2%]">{product.description}</p>
            </div>

            {/**Specification */}
            <div className="border border-gray-300 w-[80%] mx-auto p-2 rounded-[3px] my-[3%]">
                <h2 className="p-2 text-[22px]">Specification</h2>
                <hr />
                <div className="my-[2%] flex flex-col gap-4">
                    <div className="flex flex-row  gap-10">
                        <p className="text-gray-500 text-[14px]">Product&#160;Name&#160;:</p>
                        <p className="text-[14px] ">{product.specification.itemName}</p>
                    </div>

                    <div className="flex flex-row gap-10">
                        <p className="text-gray-500 text-[14px]">Available&#160;Stocks&#160;:</p>
                        <p className="text-[14px] ">{product.specification.noofStocks}</p>
                    </div>

                    <div className="flex flex-row gap-10">
                        <p className="text-gray-500 text-[14px]">Product&#160;Type&#160;:</p>
                        <p className="text-[14px] ">{product.specification.type}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ProductDetails;