import { cva, type VariantProps } from "class-variance-authority"
import type { ButtonHTMLAttributes, FC } from "react"

const buttonVariants = cva(
    "font-bold shadow-sm",
    {
        variants: {
            colorVariant: {
                default: "bg-gray-200",
                primary: "bg-blue-500",
                secondary: "bg-red-500",
            },
            textColorVariant: {
                dafault: "text-black",
                white: "text-white",
            },
            cornerVariant: {
                default: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                pill: "rounded-full",
            },
            sizeVariant: {
                compact: "px-4 py-1",
                md: "px-6 py-2",
                lg: "px-8 py-2",
                xl: "px-10 py-2",
                full: "w-full py-2",
            }
        },
        defaultVariants: {
            colorVariant: "default",
            textColorVariant: "dafault",
            cornerVariant: "default",
            sizeVariant: "compact",
        }
    }
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button: FC<ButtonProps> = ({
    className,
    colorVariant,
    textColorVariant,
    cornerVariant,
    sizeVariant,
    ...props
}) => {
    return (
        <button
            {...props}
            className = {
                buttonVariants({
                    className,
                    colorVariant,
                    textColorVariant,
                    cornerVariant,
                    sizeVariant,
                })
            }>
        </button>
    )
}