export interface headerFilterProps {
    title: string,
}

export const HeaderFilter = ({
    title,
}:headerFilterProps) => {
    return (
        <div className="bg-white text-black shadow-md border-t-4 border-blue-600">
            <h3 className="font-bold text-lg pb-2 px-4">{title}</h3>
        </div>
    ) 
}