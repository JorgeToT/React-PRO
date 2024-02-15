import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components/index";

const product = {
    id: "1",
    title: "Coffee Mug - 1",
    image: "./coffee-mug.png",
};

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shooping Store</h1>
            <hr />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="Mexican Coffee" />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;
