export interface Props {
    product: ProductCardProps;
    children?: React.ReactNode;
}

export interface ProductCardProps {
    id: string;
    title: string;
    image?: string;
}

export interface ProductContextProps {
    product: ProductCardProps;
    counter: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: Props): JSX.Element;
    Title: ({ title }: { title?: string }) => JSX.Element;
    Image: ({ image }: { image?: string }) => JSX.Element;
    Buttons: () => JSX.Element;
}
