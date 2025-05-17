import { Outlet } from "react-router-dom"
import { Navbar } from "../components/UI/Navbar"

export const Layout = () => {
    return (
        <div className="bg-blue-50 h-screen">
            <Navbar />
            <div>
                <Outlet/>
            </div>
        </div>
    )
}