import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashPage(){

const navigate=useNavigate();

useEffect(()=>{

const timer=setTimeout(()=>{

navigate("/welcome");

},3000);

return()=>clearTimeout(timer);

},[]);

return(

<div className="flex items-center justify-center w-full h-screen bg-red-600">

<motion.div

initial={{scale:0}}

animate={{scale:1}}

transition={{duration:1}}

className="flex flex-col items-center"

>

<h1 className="text-white text-6xl font-extrabold">

ChatVerse

</h1>

<p className="text-white mt-4">

Connect The World

</p>

<motion.div

animate={{

rotate:360

}}

transition={{

repeat:Infinity,

duration:1,

ease:"linear"

}}

className="w-12 h-12 rounded-full border-4 border-white border-t-transparent mt-8"

/>

</motion.div>

</div>

);

}
