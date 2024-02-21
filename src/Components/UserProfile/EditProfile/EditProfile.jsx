import { IoMdAdd as Add } from "react-icons/io";

const EditProfile = () => {
  return (
    <div>
      <div className=" py-[2%] mb-[7%]">
        <hr className="bg-gray-400 h-[1px] w-[100%] " />

        {/**Basic Details */}
        <div className=" text-black p-2">
          <h2 className="text-[17px] font-medium ">Basic Details</h2>

          <div className=" bg-green-500 p-2 px-3 text-center text-[16px] cursor-pointer my-[2%] rounded-[10px]">
            <label htmlFor="profileImage" className="cursor-pointer text-white font-medium">Upload Profile Picture</label>
            <input type="file" id="profileImage" className="w-[90%] hidden rounded-[10px]"/>
          </div>

          <div className="my-[2%] p-1">
            <label htmlFor="Firstname" className="text-gray-500 text-[14px]">First&#160;Name:<span className="text-red-500">*</span></label><br />
            <input type="text" placeholder="First name" id="Firstname" className="w-[90%] focus:outline-none border border-gray-300 p-2 rounded-[10px] text-[16px]" /><br />
          </div>

          <div className="my-[2%] p-1">
            <label htmlFor="Lastname" className="text-gray-500 text-[14px]">Last&#160;Name:<span className="text-red-500">*</span></label><br />
            <input type="text" placeholder="Last name" id="Lastname" className="w-[90%] focus:outline-none border border-gray-300 p-2 rounded-[10px] text-[16px]" /><br />
          </div>


          <div className="my-[2%] p-1">
            <label htmlFor="Additional" className="text-gray-500 text-[14px]">Additional&#160;Information:<span className="text-red-500">*</span></label><br />
            <input type="text" placeholder="Additional name" id="Additional" className="w-[90%] focus:outline-none border border-gray-300 p-2 rounded-[10px] text-[16px]" /><br />
          </div>

          <div className="my-[2%] p-1">
            <label htmlFor="Headlines" className="text-gray-500 text-[14px]">Head&#160;lines:<span className="text-red-500">*</span></label><br />
            <textarea cols={30} rows={3} placeholder="Enter your headlines" id="Headlines" className="w-[90%] focus:outline-none border border-gray-300  p-2 resize-none rounded-[10px] text-[16px]" /><br />
          </div>

        </div>

        {/**Education */}
        <div className="my-[2%] p-2">
          <h2 className="text-[17px] my-[2%] font-medium ">Education</h2>

          {/* <div className="my-[2%] p-1">
            <label htmlFor="Headlines" className="text-gray-500 text-[14px]">Education:<span className="text-red-500">*</span></label><br />
            <input type="text" placeholder="Additional name" id="Additional" className="w-[90%] focus:outline-none border border-gray-300 p-2 rounded-[10px] text-[16px]" /><br />
          </div> */}

          <div className="p-2 rounded-[10px] w-[33%] justify-center text-centre flex flex-row items-center gap-2 hover:bg-gray-200 duration-300 text-[16px] cursor-pointer">
            <Add/>
            <p className="text-black">Add new education</p>
          </div>

        </div>

        {/**Location */}
        <div className=" p-2 my-[2%]">
          <h2 className="text-[17px] font-medium ">Location</h2>

          <div className="p-1 my-[2%]">
            <label htmlFor="Country" className="text-gray-500 text-[14px]">Country&#160;:<span className="text-red-500">*</span></label><br />
            <input type="text" placeholder="Enter your location" id="Country" className="w-[90%] focus:outline-none border border-gray-300 p-2 rounded-[10px] text-[16px]" /><br />
          </div>

          <div className="p-1 my-[2%]">
            <label htmlFor="City" className="text-gray-500 text-[14px]">City&#160;:<span className="text-red-500">*</span></label><br />
            <input type="text" placeholder="Enter your city" id="City" className="w-[90%] focus:outline-none border border-gray-300 p-2 rounded-[10px] text-[16px]" /><br />
          </div>
        </div>


        <div className="p-2 my-[2%]">
          <h2 className="text-[17px] font-medium">Contact Information</h2>

          <div className=" p-2 text-[16px] w-[25%] my-[2%] hover:bg-gray-200 text-black duration-300 cursor-pointer rounded-[10px] flex flex-row justify-center  ">
            <p>Contact Info</p>
          </div>

        </div>

        <button type="submit" className=" font-medium text-white bg-green-500 rounded-[25px] px-3 py-2 w-[30%] float-right hover:bg-transparent hover:border hover:border-green-500 hover:text-black duration-200 hover:ease-in">Submit</button>

      </div>
    </div>
  )
}

export default EditProfile;