import { BsAward as AwardIcon } from "react-icons/bs";


const AwardSection = () => {
    return (
        <div>
            <div>
                <div className=" flex mt-[5%]  flex-row items-start gap-6 ml-[5%] border border-gray-400 p-3 rounded-[10px] sm:w-[90%] w-[40%]">
                    <div className="flex flex-col bg-gray-100 items-center gap-1 border border-gray-400 rounded-[25px] p-4">
                        <AwardIcon className="text-[20px]" />
                        <p className="text-[14px]">Hackathon</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h1 className="text-[18px] font-medium">State Level Agro Hackathon</h1>
                        <div className=" px-5 py-[6px] w-[100%] text-center cursor-pointer bg-green-500 hover:shadow-md text-white font-medium rounded-[25px] ">
                            <p>Read More</p>
                        </div>
                    </div>
                </div>

                <div className=" flex mt-[5%]  flex-row items-start gap-6 ml-[5%] border border-gray-400 p-3 rounded-[10px] sm:w-[90%] w-[40%]">
                    <div className="flex flex-col bg-gray-100 items-center gap-1 border border-gray-400 rounded-[25px] p-4">
                        <AwardIcon className="text-[20px]" />
                        <p className="text-[14px]">Hackathon</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h1 className="text-[18px] font-medium">State Level Agro Hackathon</h1>
                        <div className=" px-5 py-[6px] w-[100%] text-center cursor-pointer bg-green-500 hover:shadow-md text-white font-medium rounded-[25px] ">
                            <p>Read More</p>
                        </div>
                    </div>
                </div>

                <div className=" flex mt-[5%]  flex-row items-start gap-6 ml-[5%] border border-gray-400 p-3 rounded-[10px] sm:w-[90%] w-[40%]">
                    <div className="flex flex-col bg-gray-100 items-center gap-1 border border-gray-400 rounded-[25px] p-4">
                        <AwardIcon className="text-[20px]" />
                        <p className="text-[14px]">Hackathon</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h1 className="text-[18px] font-medium">State Level Agro Hackathon</h1>
                        <div className=" px-5 py-[6px] w-[100%] text-center cursor-pointer bg-green-500 hover:shadow-md text-white font-medium rounded-[25px] ">
                            <p>Read More</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AwardSection;