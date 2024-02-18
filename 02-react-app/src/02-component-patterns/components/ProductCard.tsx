import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import {
    ProductCardProps,
    ProductContextProps,
} from "../interfaces/interfaces";

import styles from "./../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: ProductCardProps;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, increaseBy } = useProduct();

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
