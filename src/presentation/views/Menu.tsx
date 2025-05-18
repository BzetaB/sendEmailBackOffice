import { Link } from "react-router-dom"
import { Card } from "../components/UI/Card"

export const Menu = () => {
    return (
        <div className="p-10 flex justify-center">  
            <div className="max-w-xl lg:max-w-5xl grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 lg:grid-cols-6 lg:grid-rows-4 gap-4">
                <div className="col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2">
                    <Card
                        img="https://cdn-icons-png.flaticon.com/512/3527/3527506.png" 
                        title="Configuración de Encuestas"
                        description="Más informacion"/>
                </div>
                <div className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3 lg:col-start-3">
                    <Card
                        img="https://cdn-icons-png.flaticon.com/256/359/359175.png" 
                        title="Reportes"
                        description="Más informacion" />
                </div>
                <div className="col-span-1 md:col-span-2 md:row-span-2 md:row-start-3 lg:row-start-1 lg:col-start-5">
                    <Link to= "/envio-correos">
                        <Card
                            img="https://cdn-icons-png.flaticon.com/512/4615/4615900.png" 
                            title="Envío de correos"
                            description="Más información" />
                    </Link>
                </div>
                <div className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3 lg:col-start-1 lg:row-start-3">
                    <Card
                        img="https://cdn-icons-png.flaticon.com/512/126/126472.png" 
                        title="Configuración de compentencias"
                        description="Más información" />
                </div>
                <div className="col-span-1 md:col-span-2 md:row-span-2 md:row-start-5 lg:col-start-3 lg:row-start-3">
                    <Card
                        img="https://cdn-icons-png.flaticon.com/512/1850/1850952.png" 
                        title="Configruación de respuestas"
                        description="Más información" />
                </div>
                <div className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-5 lg:col-start-5 lg:row-start-3">
                    <Card
                        img="https://cdn-icons-png.flaticon.com/512/5705/5705200.png" 
                        title="Reporte de encuestados únicos"
                        description="Más información" />
                </div>
            </div>
        </div>
    )
}