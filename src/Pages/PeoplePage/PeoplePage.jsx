import Peoples from "./PeopleData/Peoples";
import { RxCross2 } from "react-icons/rx";
import { TbAward } from "react-icons/tb";
import { Link } from "react-router-dom";

const PeoplePage = () => {
    document.documentElement.scrollTop = 0;
    return (
        <div>
            <div className="grid grid-cols-[1fr,1fr,1fr] sm:grid-cols-[1fr] sm:mt-[20%] cursor-pointer">
                <h1 className="hidden sm:block ml-[18%] text-left text-black font-medium uppercase">Recommended peoples</h1>
                {
                    Peoples.map((people) => (
                        <Link to={`/people/:${people.id}`} key={people.id}>
                            <div  className=" w-[70%] border border-gray-300 rounded-[10px] mx-auto m-[5%] relative hover:shadow-2xl h-[300px]">

                                <div className="absolute p-1 text-white bg-gray-400 rounded-[50%] right-1 top-2 cursor-pointer">
                                    <RxCross2 className=" float-right" />
                                </div>

                                <img src={people.banner} alt="banner" className="w-[100%] h-[100px] rounded-t-[10px] block mx-auto object-cover opacity-40 top-0" />

                                <img src={people.profile} alt="profile" className="absolute top-[11%] mx-auto rounded-[50%] w-[35%] translate-x-[20%]" />

                                <div className="mt-[16%] ml-[4%] ">
                                    <h1 className="text-black text-[18px] text-left font-medium">{people.name}</h1>

                                    <div className="flex flex-row gap-2 text-[14px] text-gray-400 items-center">
                                        <TbAward />
                                        <p>{people.areaOfExpert}</p>
                                    </div>

                                    <div className="flex flex-col text-gray-400 text-[10px] Custom-truncate">
                                        <p>{people.about}</p>
                                    </div>

                                    <div className="flex flex-row gap-2 text-[12px]">
                                        {
                                            people.tags.map((tag) => (
                                                <div key={tag} className="p-2 flex flex-row items-center">
                                                    #
                                                    <p className="text-green-500">{tag}</p>
                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>

                                <div className="bg-green-500 text-white text-[17px] p-2 text-center w-[100%] mx-auto rounded-[10px] ">
                                    <p>Connect</p>
                                </div>


                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default PeoplePage;