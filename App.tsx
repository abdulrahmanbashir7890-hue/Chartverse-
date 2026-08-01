import { Routes, Route } from "react-router-dom";

import SplashPage from "./pages/SplashPage";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import OTPVerificationPage from "./pages/OTPVerificationPage";
import PhoneLoginPage from "./pages/PhoneLoginPage";
import DashboardPage from "./pages/DashboardPage";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App(){

return(

<Routes>

<Route path="/" element={<SplashPage/>}/>

<Route path="/welcome" element={<WelcomePage/>}/>

<Route path="/login" element={<LoginPage/>}/>

<Route path="/signup" element={<SignupPage/>}/>

<Route path="/forgot-password" element={<ForgotPasswordPage/>}/>

<Route path="/reset-password" element={<ResetPasswordPage/>}/>

<Route path="/otp" element={<OTPVerificationPage/>}/>

<Route path="/phone-login" element={<PhoneLoginPage/>}/>

<Route
path="/dashboard"
element={
<ProtectedRoute>
<DashboardPage/>
</ProtectedRoute>
}
/>

</Routes>

);

}
