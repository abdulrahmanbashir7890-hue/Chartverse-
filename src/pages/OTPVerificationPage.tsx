import { Link } from "react-router-dom";
import { useState } from "react";

export default function OTPVerificationPage() {

const [otp,setOtp]=useState("");

return(

<div className="min-h-screen flex items-center justify-center bg-white px-6">

<div className="w-full max-w-md">

<h1 className="text-4xl font-bold text-center text-red-600">
Verify OTP
</h1>

<p className="text-center text-gray-500 mt-2">
Enter the 6-digit verification code.
</p>

<form className="mt-8 space-y-5">

<input
type="text"
maxLength={6}
value={otp}
onChange={(e)=>setOtp(e.target.value)}
placeholder="000000"
className="w-full text-center text-3xl tracking-[12px] border rounded-xl py-5 outline-none focus:border-red-600"
/>

<button
className="w-full bg-red-600 text-white rounded-xl py-4 font-bold">
Verify
</button>

<button
type="button"
className="w-full border rounded-xl py-4 font-semibold">
Resend Code
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
