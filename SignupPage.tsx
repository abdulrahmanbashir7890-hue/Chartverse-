import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-red-600">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join millions of users on ChatVerse
        </p>

        <form className="mt-8 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-xl p-4"
          />

          <button
            className="w-full bg-red-600 text-white rounded-xl py-4 font-bold">
            Create Account
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-red-600 font-bold">
              Login
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}
