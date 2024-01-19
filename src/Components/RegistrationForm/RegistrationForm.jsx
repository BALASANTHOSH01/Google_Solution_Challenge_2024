
const RegistrationForm = () => {
    return (
        <div className=" text-left p-2 bg-green-300 rounded-[10px]">
            {/* <h2 className="text-[20px] text-black my-[1%]">Register your events</h2>
            <p className="text-gray-400 text-[15px]">All fields are mandotary!</p> */}
            <form method="POST" className="p-2  rounded-[10px] mx-auto">
                <label htmlFor="name" className="text-gray-600 text-[17px]">Name:</label><br />
                <input type="text" id="name" placeholder="Enter your name" className="p-2 w-[95%] rounded-[5px] text-[16px] my-[1%] mb-[2%] focus:outline-none border border-gray-300 " required/><br />
                <label htmlFor="email" className="text-gray-600 text-[17px]">Email:</label><br />
                <input type="email" id="email" placeholder="Enter your email" className="p-2 w-[95%] rounded-[5px] text-[16px] my-[1%] mb-[2%] focus:outline-none border border-gray-300 " required/><br />
                <label htmlFor="mobile" className="text-gray-600 text-[17px]">Mobile:</label><br />
                <input type="text" id="mobile" placeholder="Enter your mobile" className="p-2 w-[95%] rounded-[5px] text-[16px] my-[1%] mb-[2%] focus:outline-none border border-gray-300 " required/><br />
                <label htmlFor="whatsapp" className="text-gray-600 text-[17px]">Whatsapp no:</label><br />
                <input type="text" id="whatsapp" placeholder="Enter your Whatsapp Number" className="p-2 w-[95%] rounded-[5px] text-[16px] my-[1%] mb-[2%] focus:outline-none border border-gray-300 " required/><br />
                <label htmlFor="query" className="text-gray-600 text-[17px]">Enter your query:</label><br />
                <input type="text" id="query" placeholder="( optional ) " className="p-2 w-[95%] rounded-[5px] text-[16px] my-[1%] mb-[2%] focus:outline-none border border-gray-300 " /><br />

                <div className="text-gray-600 text-[17px] my-[2%]">
                    <p>Need regular event updates ?</p>
                    <div className="flex flex-row gap-5 my-[2%]">
                        <div className="flex flex-row gap-1 items-center">
                        <input type="radio" value="Yes" id="yes" name="event_updates" className=" cursor-pointer"/>
                        <label className="text-[16px]" htmlFor="yes">Yes</label>
                        </div>

                        <div className="flex flex-row gap-1 items-center">

                        <input type="radio" value="No" id="no" name="event_updates" className=" cursor-pointer" />
                        <label className="text-[16px]" htmlFor="no">No</label>
                        </div>
                    </div>
                </div>

                <input type="submit" className="p-2 w-[50%] rounded-[5px] my-[1%] mb-[2%] font-semibold text-white focus:outline-none border border-gray-300 bg-red-400 cursor-pointer" />
            </form>
        </div>
    )
}

export default RegistrationForm;