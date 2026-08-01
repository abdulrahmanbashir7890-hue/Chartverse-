import { Link } from "react-router-dom";

export default function WelcomePage(){

return(

<div className="min-h-screen bg-white flex flex-col justify-center items-center px-6">

<h1 className="text-5xl font-bold text-red-600">

ChatVerse

</h1>

<p className="text-gray-600 text-center mt-5 max-w-md">

Chat with friends, make calls, livestream and discover the world.

</p>

<div className="w-full max-w-sm mt-10 space-y-4">

<Link
to="/login"
className="block bg-red-600 text-white py-4 rounded-xl text-center font-bold">

Login

</Link>

<Link
to="/signup"
className="block border-2 border-red-600 text-red-600 py-4 rounded-xl text-center font-bold">

Create Account

</Link>

</div>

</div>

);

}
