import { Link } from "react-router-dom"
import { Button } from "./Button"

export const Navbar = () => {
    return(
        <div className="w-full bg-green-700">
            <div className="flex flex-row justify-between">
                <Link to="/">
                    <img src="https://cris.continental.edu.pe/skin/headerImage/" alt="Universidad Continental Icono" />
                </Link>
                <div className="flex items-center pr-4">
                    <Button className="text-lg" sizeVariant="md" textColorVariant="white" cornerVariant="md" colorVariant="secondary">Salir</Button>
                </div>
            </div>
        </div>
    )
}