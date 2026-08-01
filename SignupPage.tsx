import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { register } from "../services/auth";

export default function SignupPage(){

const navigate=useNavigate();

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [loading,setLoading]=useState(false);

const signup=async(e:any)=>{

e.preventDefault();

try{

setLoading(true);

await register(email,password);

navigate("/dashboard");

}catch{

alert("Registration Failed");

}finally{

setLoading(false);

}

};

return(

<div className="min-h-screen flex items-center justify-center">

<form

onSubmit={signup}

className="bg-white shadow-xl rounded-2xl p-8 w-[380px]">

<h1 className="text-3xl font-bold text-red-600 text-center">

Create Account

</h1>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full border p-4 rounded-xl mt-6"

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full border p-4 rounded-xl mt-4"

/>

<button

className="w-full bg-red-600 text-white py-4 rounded-xl mt-6">

{loading?"Creating...":"Create Account"}

</button>

</form>

</div>

);

}
