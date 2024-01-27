import Learn from "../../../assets/Images/Training/ManThinking.jpg";
import Apply from "../../../assets/Images/Training/ManwithCrops.jpg";
import Earn from "../../../assets/Images/Training/ManwithMoney.jpg";

import { TbTargetArrow as Target } from "react-icons/tb";
import { FaMoneyCheckDollar as Money } from "react-icons/fa6";
import { IoAccessibilitySharp as Work } from "react-icons/io5";

const TrainingPageSteps = () => {
    return (
        <div>
            <div className="flex flex-row justify-evenly">

                {/**step-1 Learn */}
                <div className="w-[28%] p-2 rounded-[10px] overflow-hidden border border-gray-300 bg-gray-100 font-Manrope">
                    <div className="mb-[5%]">
                        <Target className="text-[25px] mx-auto my-[3%]" />
                        <h2 className="text-[18px] text-center font-medium my-[2%]">Learn from the <span className="underline hover:text-green-600 cursor-pointer duration-500">Green&#160;Harbor</span></h2>
                        <p className="text-gray-500 text-center text-[15px] my-[2%]">Receive expert-level training from top institutes with industry-leading professionals.</p>
                    </div>
                    <hr className="h-[2px] bg-gray-300" />
                    <div className="mt-[5%]">
                        <img src={Learn} alt="StepsImage" className="w-[100%] rounded-[10px] my-[2%]" />
                    </div>
                </div>

                 {/**step-1 Work */}
                 <div className="w-[28%] p-2 rounded-[10px] overflow-hidden border border-gray-300 bg-gray-100 font-Manrope">
                    <div className="mb-[5%]">
                        <Work className="text-[25px] mx-auto my-[3%]" />
                        <h2 className="text-[18px] text-center font-medium my-[2%]">Apply your agricultural mind.</h2>
                        <p className="text-gray-500 text-center text-[15px] my-[2%]">Utilize the knowledge gained to implement practical solutions in the agricultural sector.</p>
                    </div>
                    <hr className="h-[2px] bg-gray-300" />
                    <div className="mt-[5%]">
                        <img src={Apply} alt="StepsImage" className="w-[100%] rounded-[10px] my-[2%]" />
                    </div>
                </div>

                 {/**step-1 Earn */}
                 <div className="w-[28%] p-2 rounded-[10px] overflow-hidden border border-gray-300 bg-gray-100 font-Manrope">
                    <div className="mb-[5%]">
                        <Money className="text-[25px] mx-auto my-[3%]" />
                        <h2 className="text-[18px] text-center font-medium my-[2%]">Earn from your actions.</h2>
                        <p className="text-gray-500 text-center text-[15px] my-[2%]">Reap the rewards of your new found knowledge with successful implementation in agriculture.</p>
                    </div>
                    <hr className="h-[2px] bg-gray-300" />
                    <div className="mt-[5%]">
                        <img src={Earn} alt="StepsImage" className="w-[100%] rounded-[10px] my-[2%]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainingPageSteps;