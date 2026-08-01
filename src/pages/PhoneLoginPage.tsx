import { Link } from "react-router-dom";

export default function PhoneLoginPage(){

return(

<div className="min-h-screen flex items-center justify-center bg-white px-6">

<div className="w-full max-w-md">

<h1 className="text-4xl font-bold text-center text-red-600">

Phone Login

</h1>

<p className="text-center text-gray-500 mt-2">

Sign in with your phone number.

</p>

<form className="mt-8 space-y-5">

<input
type="tel"
placeholder="+234 801 234 5678"
className="w-full border rounded-xl py-4 px-4 outline-none focus:border-red-600"
/>

<button
className="w-full bg-red-600 text-white rounded-xl py-4 font-bold">

Send OTP

</button>

<Link
to="/login"
className="block text-center text-red-600 font-semibold">

Back to Email Login

</Link>

</form>

</div>

</div>

);

}
