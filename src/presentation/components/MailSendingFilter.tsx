import { Input } from "./UI/Input"
import { Select } from "./UI/Select"
import { planEstudios, SedeEgresado, Modalidad, Encuestado, TipoEnvio, Facultad, Llamada } from "../../infraestructure/const/PlanEstudios.json"
import { Button } from "./UI/Button"
import { Link } from "react-router-dom"

export const MailSendingFilter = () => {

    return (
        <form className="bg-white py-4 px-6 shadow-md rounded-md">
            <div className="gap-4 grid grid-cols-2 grid-rows-7 md:grid-rows-4 md:grid-cols-4 lg:grid-cols-5 lg:grid-rows-3">
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">Plan de Estudios</label>
                    <Select
                        options={planEstudios}
                        valueKey="id"
                        labelKey="plan"
                    />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">Encuestado</label>
                    <Select
                        options={Encuestado}
                        valueKey="id"
                        labelKey="plan"
                    />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">Tipo de Envio</label>
                    <Select
                        options={TipoEnvio}
                        valueKey="id"
                        labelKey="plan"
                    />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">DNI Egresado</label>
                    <Input placeholder="DNI" type="text" />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">Modalidad Estudios</label>
                    <Select
                        options={Modalidad}
                        valueKey="id"
                        labelKey="plan"
                    />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">Facultad</label>
                    <Select
                        options={Facultad}
                        valueKey="id"
                        labelKey="plan"
                    />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">Carrera</label>
                    <Select
                        options={Facultad}
                        valueKey="id"
                        labelKey="plan"
                    />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">Sede</label>
                    <Select
                        options={SedeEgresado}
                        valueKey="id"
                        labelKey="plan"
                    />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">Año de Egreso Inicial</label>
                    <Select
                        options={planEstudios}
                        valueKey="id"
                        labelKey="plan"
                    />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">Año de Egreso Final</label>
                    <Select
                        options={planEstudios}
                        valueKey="id"
                        labelKey="plan"
                    />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">¿Se realizó llamada?</label>
                    <Select
                        options={Llamada}
                        valueKey="id"
                        labelKey="plan"
                    />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">Fecha Llamada Inicial</label>
                    <Input placeholder="DNI" type="date" />
                </div>
                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <label className="font-semibold">Fecha Llamada Final</label>
                    <Input placeholder="DNI" type="date" />
                </div>
            </div>
            <div className="flex flex-row justify-between pt-8">
                <Link to="/">
                    <div>
                        <Button className="px-4 py-1 md:px-6 md:py-2 hover:bg-blue-600 duration-300" cornerVariant="sm" colorVariant="primary" textColorVariant="white">Regresar</Button>
                    </div>
                </Link>
                <div className="items-center">
                    <Button className="px-6 py-1 md:px-8 md:py-2 hover:bg-blue-600 duration-300" cornerVariant="sm" colorVariant="primary" textColorVariant="white">Buscar</Button>
                </div>
            </div>
        </form>
    )
}