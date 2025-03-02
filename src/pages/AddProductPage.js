import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
    const [product, setProduct] = useState({ name: "", description: "", price: "", stock: "" });
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            alert("Please log in first.");
            navigate("/login");
        }
    }, [token, navigate]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                throw new Error("Failed to add product");
            }

            alert("Product added successfully!");
            navigate("/products");
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Error adding product");
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
                <input type="number" name="stock" placeholder="Stock Quantity" onChange={handleChange} required />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductPage;
