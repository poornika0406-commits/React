function ProductCard({ image, name, price, category, rating }) {
    return (
        <div className="product-card">

            <img src={image} alt={name} />

            <h2>{name}</h2>

            <p>Price: ₹{price}</p>

            <p>Category: {category}</p>

            <p>⭐ {rating}</p>

        </div>
    );
}

export default ProductCard;