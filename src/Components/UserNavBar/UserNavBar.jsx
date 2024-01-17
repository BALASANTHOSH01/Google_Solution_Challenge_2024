import { FaArrowLeftLong } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";


const UserNavBar = () => {
    return (
        <div className=" flex flex-row justify-between p-2 my-2 sm:my-[1px] sm:shadow-md">

            {/**Left arrow ("/") */}
            <Link to={'/'} className="ml-[5%]">
                <div className="block box-border justify-center items-center p-3 sm:p-2 rounded-[50%] bg-gray-200 hover:bg-green-500 hover:text-white sm:hover:bg-green-500   sm:bg-transparent cursor-pointer text-[20px]">
                    <FaArrowLeftLong />
                </div>
            </Link>

            {/**Nav Elements */}
            <div className="flex flex-row justify-between mr-[5%] w-[10%] sm:w-[27%]">

                <div className=" sm:block box-border justify-center items-center p-3 sm:p-2 rounded-[50%] bg-gray-200  hover:bg-green-500 hover:text-white sm:hover:bg-green-500  sm:bg-transparent cursor-pointer text-[20px] sm:text-[22px]">
                    <CiSearch />
                </div>

                <div className=" sm:block box-border justify-center items-center p-3 sm:p-2 rounded-[50%] bg-gray-200  hover:bg-green-500 hover:text-white sm:hover:bg-green-500  sm:bg-transparent cursor-pointer text-[20px] sm:text-[22px]">
                    <CiMenuBurger />
                </div>

            </div>

        </div>
    )
}

export default UserNavBar