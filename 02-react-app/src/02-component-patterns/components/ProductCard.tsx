import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import {
    ProductCardProps,
    ProductContextProps,
    onChangeArgs,
} from "../interfaces/interfaces";

import styles from "./../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: ProductCardProps;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const ProductCard = ({
    children,
    product,
    className,
    style,
    onChange,
    value,
}: Props) => {
    const { counter, increaseBy } = useProduct({
        onChange,
        product,
        value,
    });

    return (
        <Provider
            value={{
                product,
                counter,
                increaseBy,
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};
