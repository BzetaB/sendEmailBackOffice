import { cva, type VariantProps } from "class-variance-authority"
import type { FC, InputHTMLAttributes } from "react"

const inputVariants = cva(
    "w-full rounded-md py-1 px-2 bg-white border border-gray-500",
    {
        variants: {
            borderVariant:{
                default: "border-black-300",
                successful: "border-green-300",
                danger: "border-red-400",
            }
        },
        defaultVariants: {
            borderVariant: "default"
        }
    }
)

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

export const Input:FC<InputProps> = ({
    borderVariant,
    type,
    className,
    ...props
}) => {
    return (
        <input
            {...props}
            className={inputVariants({
                borderVariant,
                className,
            })}
            type={type}
        />
    )
}