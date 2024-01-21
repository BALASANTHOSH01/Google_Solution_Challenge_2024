import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { HiHome } from "react-icons/hi2"; //Home Icon
import { Link, useLocation, useParams } from "react-router-dom";


const UserNavBar = () => {
    const location = useLocation();


    const { peopleid, cropid } = useParams();

    const PathNameFun = () => {
        switch (location.pathname) {
            case `/people/${peopleid}`:
                return `/people`;
            case `/croppage/${cropid}`:
                return `/`;
        }
    }

    return (
        <div className=" flex flex-row justify-between p-2 my-2 sm:my-[1px] sm:shadow-md">

            {/**Left arrow ("/") */}
            <Link to={PathNameFun()} className="ml-[5%]">
                <div className="block box-border justify-center items-center p-3 sm:p-2 rounded-[50%] bg-gray-200  hover:bg-green-300 text-gray-800  sm:hover:bg-green-500   sm:bg-transparent cursor-pointer text-[20px]">
                    <FaArrowLeftLong />
                </div>
            </Link>

            {/**Nav Elements */}
            <div className="flex flex-row justify-between mr-[5%] w-[10%] sm:w-[27%]">

                <Link to={"/"}>
                    <div className="flex flex-col text-center font-Nunito">
                        <div className=" sm:block box-border justify-center items-center p-3 sm:p-2 rounded-[50%] bg-gray-200  hover:bg-green-300 text-gray-800  sm:hover:bg-green-500  sm:bg-transparent cursor-pointer text-[20px] sm:text-[22px]">
                            <HiHome />
                        </div>
                        <p className="text-gray-500 text-[14px]">Home</p>
                    </div>
                </Link>

                <Link to={"/bot"}>
                    <div className="flex flex-col text-center font-Nunito">
                        <div className=" sm:block box-border justify-center items-center p-3 sm:p-2 rounded-[50%] bg-gray-200  hover:bg-green-300 text-gray-800  sm:hover:bg-green-500  sm:bg-transparent cursor-pointer text-[20px] sm:text-[22px]">
                            <FaRobot />
                        </div>
                        <p className="text-gray-500 text-[14px]">Bot</p>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default UserNavBar