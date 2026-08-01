import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-red-600">
          Forgot Password
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Enter your email address to receive a password reset link.
        </p>

        <form className="mt-8 space-y-5">

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-400" size={20} />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl py-4 pl-12 pr-4 outline-none focus:border-red-600"
            />
          </div>

          <button
            className="w-full bg-red-600 text-white py-4 rounded-xl font-bold">
            Send Reset Link
          </button>

          <Link
            to="/login"
            className="block text-center text-red-600 font-semibold">
            Back to Login
          </Link>

        </form>

      </div>
    </div>
  );
}
