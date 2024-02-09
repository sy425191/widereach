import { Link } from "react-router-dom";
import InputBox from "./InputBox";

const Login = () => {
  return (
    <>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <InputBox icon="user" type="email" placeholder="Email" />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <InputBox icon="key" type="password" placeholder="Password" />
          </div>
          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <Link
              to={"/auth/reset"}
              class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              class="w-full text-white
            bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-1/3 border-gray-300 dark:border-gray-600" />
              <p className="text-gray-400 dark:text-gray-500">OR</p>
              <hr className="w-1/3 border-gray-300 dark:border-gray-600" />
            </div>
            <button
              type="submit"
              class="w-full text-white
           bg-blue-800 hover:bg-blue-900 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login with <i class="fa fa-google px-2"></i>
            </button>
          </div>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to={"/auth/signup"}
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
