import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;

        try {
            const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
            if (response.ok) {
                setProducts(products.filter((product) => product.id !== id));
            } else {
                console.error("Failed to delete product");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <Link to="/admin/products/new">➕ Add New Product</Link>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                        <Link to={`/admin/products/edit/${product.id}`}> ✏️ Edit</Link>
                        <button onClick={() => handleDelete(product.id)}>🗑️ Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
