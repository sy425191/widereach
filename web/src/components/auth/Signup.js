import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    alert(`Email: ${email}, Password: ${password}`);
  };
  return (
    <div class="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-800/30 dark:border-slate-700/30">
      <form class="space-y-6" onSubmit={() => handleSignup()}>
        <h5 class="text-xl flex font-medium text-slate-900 dark:text-white">
          Welcome to{" "}
          <Link
            to={"/"}
            className="text-lg font-bold px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
          >
            WIDEREACH
          </Link>
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
          >
            Your email
          </label>
          <InputBox
            icon="user"
            type="email"
            placeholder="Email"
            value={email}
            handleChange={setEmail}
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
          >
            Your password
          </label>
          <InputBox
            icon="key"
            type="password"
            placeholder="Password"
            value={password}
            handleChange={setPassword}
          />
        </div>

        <div className="flex flex-col space-y-4">
          <button
            type="submit"
            class="w-full text-white
            bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next
          </button>
        </div>
        <div class="text-sm font-medium text-slate-500 dark:text-slate-300">
          Already registered?{" "}
          <Link
            to={"/auth"}
            class="text-blue-700 hover:underline dark:text-blue-500"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
