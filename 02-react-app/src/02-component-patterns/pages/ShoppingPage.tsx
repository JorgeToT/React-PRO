import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components/index";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

const ShoppingPage = () => {
    const { shoppingCart, onProductCountChange } = useShoppingCart();

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
                {products.map((product) => (
                    <ProductCard
                        product={product}
                        className="bg-dark text-white"
                        key={product.id}
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0}
                    >
                        <ProductImage
                            className="custom-image"
                            style={{
                                boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
                            }}
                        />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>
            <div className="shopping-cart">
                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        product={product}
                        className="bg-dark text-white"
                        style={{ width: "100px" }}
                        value={product.count}
                        onChange={onProductCountChange}
                    >
                        <ProductImage
                            className="custom-image"
                            style={{
                                boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
                            }}
                        />
                        <ProductButtons
                            className="custom-buttons"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        />
                    </ProductCard>
                ))}
            </div>
        </div>
    );
};

export default ShoppingPage;
