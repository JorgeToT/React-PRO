import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "./../styles/styles.module.css";
import noImage from "./../assets/no-image.jpg";

export const ProductImage = ({ image = "" }) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (image) {
        imgToShow = image;
    } else if (product.image) {
        imgToShow = product.image;
    } else {
        imgToShow = noImage;
    }

    return <img className={styles.productImg} src={imgToShow} alt="Product" />;
};
