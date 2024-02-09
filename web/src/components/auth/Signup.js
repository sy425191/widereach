import { Link } from "react-router-dom";
import InputBox from "./InputBox";

const SignUp = () => {
  return (
    <>
      <div className="w-full md:w-2/3 space-y-3 ">
        <InputBox icon="user" type="email" placeholder="Email" />
        <InputBox
          icon="instagram"
          type="text"
          placeholder="Username"
        />
        <InputBox icon="key" type="password" placeholder="Password" />
      </div>

      <div className="w-full md:w-2/3 flex flex-col gap-y-3 justify-center">
        <button className="w-full bg-green-800 px-2 py-1 rounded">
          Proceed
          <i className="px-2 fa fa-angle-right"></i>
        </button>
        <div className="flex space-x-2">
          <button className="w-1/2 bg-slate-900 px-2 py-1 rounded">
            <i className="fa fa-google px-2"></i>
            Google
          </button>
          <button className="w-1/2 bg-slate-900 px-2 py-1 rounded">
            <i className="fa fa-twitter px-2"></i>
            Twitter
          </button>
        </div>
      </div>
      <div className="text-slate-500">
        <div className="w-full flex justify-center items-center">
          <Link to="/auth" className="underline">
            Already Have an Account?
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
