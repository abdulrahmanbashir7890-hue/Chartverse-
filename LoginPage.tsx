import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-red-600">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Sign in to continue to ChatVerse
        </p>

        <form className="mt-8 space-y-5">

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-400" size={20}/>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl pl-12 pr-4 py-4 outline-none focus:border-red-600"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-gray-400" size={20}/>
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-xl pl-12 pr-4 py-4 outline-none focus:border-red-600"
            />
          </div>

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox"/>
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-red-600 font-semibold">
              Forgot Password?
            </Link>
          </div>

          <button
            className="w-full bg-red-600 text-white rounded-xl py-4 font-bold">
            Login
          </button>

          <button
            type="button"
            className="w-full border rounded-xl py-4 font-semibold">
            Continue with Google
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-red-600 font-bold">
              Sign Up
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
}
