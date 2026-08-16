import ProductCard from "./ProductCard";
import "./App.css";


const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        rating: 4.5,
        image: "https://placehold.co/300x200?text=Laptop"
    },
    {
        id: 2,
        name: "Headphones",
        price: 2500,
        category: "Electronics",
        rating: 4.2,
        image: "https://placehold.co/300x200?text=Headphones"
    },
    {
        id: 3,
        name: "Smart Watch",
        price: 4500,
        category: "Accessories",
        rating: 4.7,
        image: "https://placehold.co/300x200?text=Smart+Watch"
    }
];

function ProdApp() {
    return (
        <div className="product-container">

            {products.map(product => (
                <ProductCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    rating={product.rating}
                />
            ))}

        </div>
    );
}

export default  ProdApp;