import { useEffect, useState } from "react";
import { ProductCardProps, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
    product: ProductCardProps;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({
    product,
    onChange,
    value = 0,
}: useProductArgs) => {
    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({ count: newValue, product: product });
    };

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return { counter, increaseBy };
};
