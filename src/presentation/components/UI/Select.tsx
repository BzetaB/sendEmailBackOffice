import { cva, type VariantProps } from "class-variance-authority"
import type { SelectHTMLAttributes } from "react"

const SelectVariants = cva(
    "w-full rounded-md py-1 px-2 bg-white border border-gray-500",
    {
        variants: {
            borderVariant: {
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

export interface SelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement>, VariantProps<typeof SelectVariants> {
    options: T[],
    valueKey: keyof T,
    labelKey: keyof T,
}

export const Select = <T,>({
    className,
    id,
    borderVariant,
    options,
    valueKey,
    labelKey,
    ...props
}: SelectProps<T>) => {
    return (
        <select
            {...props}
            className={SelectVariants({
                borderVariant,
                className,
            })}
            id={id}
        >
            <option value="">Seleccione</option>
            {options.map((item, index) => (
                <option key={index} value={String(item[valueKey])}>
                    {String(item[labelKey])}
                </option>
            ))}
        </select>
    )
}