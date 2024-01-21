

const AddItem = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center">
            <div>
                <h2 className="text-gray-700 font-medium my-[2%]">Add Your Item</h2>
            </div>
            <form method="POST" className="w-[50%] md:w-[70%] mx-auto text-left">
                <label htmlFor="item-name" className="text-gray-500">Product&#160;Name&#160;:</label><br/>
                <input type="text" className="p-2 rounded-[10px] focus:outline-none mb-[2%] w-[95%] border border-gray-400" placeholder="Enter your name" id="item-name" required/><br/>

                <label htmlFor="item-email" className="text-gray-500">Email&#160;:</label><br/>
                <input type="text" className="p-2 rounded-[10px] focus:outline-none mb-[2%] w-[95%] border border-gray-400" placeholder="Enter your email" id="item-email" required/><br/>

                <label htmlFor="item-description" className="text-gray-500">Product&#160;Description&#160;:</label><br/>
                <input type="text" className="p-2 rounded-[10px] focus:outline-none mb-[2%] w-[95%] border border-gray-400" placeholder="Enter your description" id="item-description" required/><br/>

                <label htmlFor="item-price" className="text-gray-500">Product&#160;Price&#160;:</label><br/>
                <input type="text" className="p-2 rounded-[10px] focus:outline-none mb-[2%] w-[95%] border border-gray-400" placeholder=" ₹ Rupees" id="item-price" required/><br/>

                <label htmlFor="item-stocks" className="text-gray-500">Available&#160;Stocks&#160;:</label><br/>
                <input type="text" className="p-2 rounded-[10px] focus:outline-none mb-[2%] w-[95%] border border-gray-400"  placeholder="No of Stocks" id="item-stocks" required/>

                <label htmlFor="item-image" className="text-gray-600 border border-gray-400 inline-block cursor-pointer py-2 px-4 rounded-[10px] bg-gray-200 my-[2%]">
                <input type="file" className=" text-[16px] hidden rounded-[10px] focus:outline-none mb-[2%] w-[50%] border-none" id="item-image"/>
                    Upload&#160;Image&#160;</label>
                <br/>

                <button className="uppercase border border-gray-400 py-2 px-4 rounded-[10px] text-gray-600 text-[16px] hover:bg-gray-300 my-[3%] bg-green-400" type="submit">Add Item</button>
            </form>
        </div>
    </div>
  )
}

export default AddItem;