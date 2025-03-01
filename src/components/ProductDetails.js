import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error fetching product:", error));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetails;
