import { Outlet } from "react-router-dom"
import { Navbar } from "../components/UI/Navbar"

export const Layout = () => {
    return (
        <div className="bg-blue-50 h-screen w-full">
            <Navbar />
            <div className="flex justify-center">
                <div className="max-w-7xl px-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}