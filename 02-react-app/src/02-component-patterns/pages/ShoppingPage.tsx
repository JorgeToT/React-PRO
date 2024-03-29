import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components/index";
import "../styles/custom-styles.css";

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
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image
                        className="custom-image"
                        style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
                    />
                    <ProductCard.Title
                        title="Mexican Coffee"
                        className="text-bold"
                    />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} className="bg-dark text-white">
                    <ProductImage
                        className="custom-image"
                        style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
                    />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{ backgroundColor: "#70d1f8" }}
                >
                    <ProductImage
                        style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
                    />
                    <ProductTitle style={{ fontWeight: "bold" }} />
                    <ProductButtons
                        style={{ display: "flex", justifyContent: "end" }}
                    />
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;
