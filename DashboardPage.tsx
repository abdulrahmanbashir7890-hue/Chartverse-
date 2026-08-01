import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";

export default function DashboardPage() {

const navigate = useNavigate();

const signOut = async () => {
  await logout();
  navigate("/login");
};

return (

<div className="min-h-screen bg-gray-100">

<header className="bg-red-600 text-white p-5 flex justify-between items-center">

<h1 className="text-2xl font-bold">

ChatVerse

</h1>

<button
onClick={signOut}
className="bg-white text-red-600 px-5 py-2 rounded-lg font-bold">

Logout

</button>

</header>

<main className="p-6">

<div className="bg-white rounded-2xl shadow-lg p-8">

<h2 className="text-3xl font-bold">

Welcome to ChatVerse 🎉

</h2>

<p className="text-gray-600 mt-3">

Your account has been successfully authenticated.

</p>

</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

<div className="bg-white rounded-xl p-6 shadow">
Chats
</div>

<div className="bg-white rounded-xl p-6 shadow">
Calls
</div>

<div className="bg-white rounded-xl p-6 shadow">
Live
</div>

<div className="bg-white rounded-xl p-6 shadow">
Profile
</div>

</div>

</main>

</div>

);

}
