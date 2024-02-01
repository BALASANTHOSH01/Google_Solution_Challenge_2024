import { Link, useNavigate } from "react-router-dom"


const LogIn = () => {

  const navigation = useNavigate();

  const handlesubmitLogin = () =>{
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    // alert message
    if(email === "" || password === ""){
      alert("Enter your details correctly!");
    }

    if(email && password){
      navigation("/");
    }

  }
  return (
    <div className=" w-[30%] block mx-auto sm:w-[100%] md:w-[75%]   bg-white border rounded-[15px] p-2 px-5 mt-14">
      <div className="flex flex-col justify-evenly">
        <h2 className="text-[20px] text-center my-5">Login</h2>

        <label htmlFor="email">Email :</label>
        <input type="email" placeholder="Email" id="email" className="p-2 px-3 rounded-[10px] border border-gray-400 focus:outline-none"/><br />

        <div className="flex flex-row justify-between items-center">
          <label htmlFor="password">Password :</label>
          <p className="text-green-500 cursor-pointer">forget&#160;password</p>
        </div>

        <input type="password" placeholder="Password" id="password" className="p-2 px-3 rounded-[10px] border border-gray-400 focus:outline-none" required/><br />

        <button type="submit" className="p-2 px-4 text-[20px]  bg-green-400 text-white rounded-[10px]" onClick={()=>handlesubmitLogin()}>LogIn</button>

        <div className=" flex flex-row my-5 gap-3 mx-auto">
          <p>Don&apos;t have an account ?</p>
          <Link to={"/AuthSignUp"}>
          <p className="text-green-500">Sigup</p>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LogIn