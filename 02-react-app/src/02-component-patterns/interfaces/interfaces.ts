import { Props as ProductButtonsPropsComponent } from "../components/ProductButtons";
import { Props as ProductCardPropsComponent } from "../components/ProductCard";
import { Props as ProductImagePropsComponent } from "../components/ProductImage";
import { Props as ProductTitlePropsComponent } from "../components/ProductTitle";

export interface ProductCardProps {
    id: string;
    image?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    product: ProductCardProps;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardPropsComponent): JSX.Element;
    Buttons: (Props: ProductButtonsPropsComponent) => JSX.Element;
    Image: (Props: ProductImagePropsComponent) => JSX.Element;
    Title: (Props: ProductTitlePropsComponent) => JSX.Element;
}

export interface onChangeArgs {
    product: ProductCardProps;
    count: number;
}

export interface ProductInCart extends ProductCardProps {
    count: number;
}
