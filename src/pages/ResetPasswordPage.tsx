import { Link } from "react-router-dom";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">

      <div className="w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-red-600">
          Reset Password
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Create a new secure password.
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="password"
            placeholder="New Password"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-xl p-4"
          />

          <button
            className="w-full bg-red-600 text-white rounded-xl py-4 font-bold">
            Reset Password
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
