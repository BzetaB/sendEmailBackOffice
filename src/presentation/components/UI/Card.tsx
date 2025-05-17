import type { ImgHTMLAttributes } from "react";

export interface CardProps{
    title?: string,
    description?: string,
    img?: ImgHTMLAttributes<HTMLImageElement>["src"],
    imgAlt?: string,
}

export const Card = ({
    title,
    description,
    img,
    imgAlt,
}:CardProps) => {
    return (
        <div className="h-full flex flex-col items-center bg-white shadow-lg border-t-4 border-t-blue-700 rounded-lg md:flex-row">
            <img className="max-h-24 md:p-4 pt-4 pb-0" src={img} alt={imgAlt} />
            <div className="flex flex-col justify-between lg:py-4 pt-1 pb-4 px-2 items-center md:items-start">
                <h3 className="font-bold lg:text-2xl sm:text-lg">
                    {title}
                </h3>
                <p className="font-stretch-95% lg:text-lg md:text-base sm:text-sm text-justify text-blue-700">
                    {description}
                </p>
            </div>
        </div>
    )
}