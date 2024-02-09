import TrainingDetails from "./TrainingDetails";

const TrainingMainPage = () => {
    return (
        <div>
            <div className="my-[5%] py-2">
                <h1 className="text-[20px] text-white font-medium text-center my-[3%] bg-green-500 py-3 rounded-[10px]">See what you can learn with Green Harbor Plus </h1>

                <div className="flex flex-row gap-3 ">
                    {
                        TrainingDetails.map((training) => (
                            <div key={training.id} className="border overflow-hidden rounded-[10px] bg-gray-100 hover:shadow-lg cursor-pointer">

                                <div className="relative">
                                    <img src={training.TrainingBanner} alt="banner" />
                                    <img src={training.TrainingImage} alt="Image" className=" absolute rounded-[5px] w-[80px] h-[80px] top-[70%] left-[8%]" />
                                </div>

                                <div className="mt-[15%] p-4">
                                    <h1 className=" font-medium text-[18px]">{training.TrainingName}</h1>
                                    <p className="text-gray-400 text-[15px]">{training.By}</p>
                                </div>

                                <button className="px-2 py-1 rounded-[5px] border font-medium bg-green-500 text-white my-[5%] ml-[6%] hover:shadow-lg hover:border-none">Get Training</button>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TrainingMainPage;