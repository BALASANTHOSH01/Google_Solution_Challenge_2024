import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {

  const navigate = useNavigate();

  const handlesubmitSignup = () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if(name === "" || email === "" || password === ""){
      alert("Please fill out all fields")
    }

    if(name && email && password ){
      navigate("/");
    }

  }
  return (
    <div className=" w-[30%] block mx-auto sm:w-[100%] md:w-[75%]  bg-white border rounded-[15px] p-2 px-5 mt-14">
      <div className="flex flex-col justify-evenly">
        <h2 className="text-[20px] text-center my-5">Sigup</h2>

        <label htmlFor="name">Name :</label>
        <input type="text" placeholder="Name" id="name" className="p-2 px-3 rounded-[10px] border border-gray-400 focus:outline-none" required/><br />

        <label htmlFor="email">Email :</label>
        <input type="email" placeholder="Email" id="email" className="p-2 px-3 rounded-[10px] border border-gray-400 focus:outline-none" required/><br />

        <label htmlFor="password">Password :</label>
        <input type="password" placeholder="Password" id="password" className="p-2 px-3 rounded-[10px] border border-gray-400 focus:outline-none" required/><br />

        <div className="flex flex-row gap-1 items-center my-3">
          <input type="checkbox" className="p-1" id="checkbox"/>
          <p className="text-[12px]">Accept our <span className="text-green-500 cursor-pointer">privacy policy</span> and <span className="text-green-500 cursor-pointer">terms</span> and <span className="text-green-500 cursor-pointer">conditions</span>.</p>
        </div>

        <button type="submit" className="p-2 px-4 text-[20px]  bg-green-400 text-white rounded-[10px]" onClick={() => handlesubmitSignup()}>SigUp</button>

        <div className=" flex flex-row my-5 gap-3 mx-auto">
          <p>Already have an account ?</p>
          <Link to={"/AuthLogIn"}>
            <p className="text-green-500">LogIn</p>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default SignUp