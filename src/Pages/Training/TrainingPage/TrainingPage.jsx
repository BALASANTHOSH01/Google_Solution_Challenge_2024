import TrainingPageHero from "../../../Components/TrainingComponent/TrainingPageHero/TrainingPageHero";
import TrainingPageSteps from "../../../Components/TrainingComponent/TrainingPageSteps/TrainingPageSteps";

const TrainingPage = () => {
  return (
    <div className=" font-Manrope">
        <div>
          <TrainingPageHero/>
        </div>

        <div className="p-2 mx-auto text-center">
          <h1 className="my-[5%] text-[35px] text-black font-medium 
          ">Take the first steps towards your vision.</h1>
          <TrainingPageSteps/>
        </div>
    </div>
  )
}

export default TrainingPage;