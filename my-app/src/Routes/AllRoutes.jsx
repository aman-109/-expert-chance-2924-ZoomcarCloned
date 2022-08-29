import { Route, Routes } from "react-router-dom";
import CarPage from "../Components/CarPage/CarPage";
import LandingPage from "../Components/LandingHomepage";
import SignupLogin from "../Components/login/singup/SingupLogin";


export default function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}>Home</Route>
            <Route path="/login" element={<SignupLogin/>}>Login/Signup</Route>
            <Route path="/carsPage/:city" element={<CarPage/>}>Login/Signup</Route>
        </Routes>
    )
}