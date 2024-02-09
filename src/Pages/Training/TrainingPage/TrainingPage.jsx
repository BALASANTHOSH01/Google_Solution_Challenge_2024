import TrainingMainPage from "../../../Components/TrainingComponent/SubTrainingComponent/TrainingMainPage/TrainingMainPage";
import TrainingPageHero from "../../../Components/TrainingComponent/SubTrainingComponent/TrainingPageHero/TrainingPageHero"; 
import TrainingPageSteps from "../../../Components/TrainingComponent/SubTrainingComponent/TrainingPageSteps/TrainingPageSteps"; 

const TrainingPage = () => {
  return (
    <div className=" font-Manrope w-[95%] mx-auto">
        <div>
          <TrainingPageHero/>
        </div>

        <div className="p-2 mx-auto text-center ">
          <h1 className="my-[5%] text-[35px] text-black font-medium 
          ">Take the first steps towards your vision.</h1>
          <TrainingPageSteps/>
        </div>

        <div>
          <TrainingMainPage/>
        </div>
    </div>
  )
}

export default TrainingPage;