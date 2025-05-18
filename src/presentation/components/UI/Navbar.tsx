import { Link } from "react-router-dom"
import { Button } from "./Button"

export const Navbar = () => {
    return (
        <div className="bg-green-700">
            <div className="max-w-6xl px-8 mx-auto flex flex-row justify-between">
                <Link to="/">
                    <img
                        className="max-h-12 md:max-h-15"
                        src="https://cris.continental.edu.pe/skin/headerImage/"
                        alt="Universidad Continental Icono" />
                </Link>
                <div className="flex items-center">
                    <Button
                        className="hover:bg-red-600 duration-300 text-xs md:text-md px-4 py-1 sm:text-sm sm:px-6 md:px-6"
                        textColorVariant="white"
                        cornerVariant="sm"
                        colorVariant="secondary"
                    >Salir</Button>
                </div>
            </div>
        </div>
    )
}