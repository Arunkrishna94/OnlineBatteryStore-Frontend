import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AdminProductForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetch(`/api/products/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setName(data.name);
                    setPrice(data.price);
                    setDescription(data.description);
                })
                .catch((error) => console.error("Error fetching product:", error));
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = { name, price, description };

        const method = id ? "PUT" : "POST";
        const url = id ? `/api/products/${id}` : "/api/products";

        try {
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData),
            });

            if (response.ok) {
                navigate("/products");
            } else {
                console.error("Failed to save product");
            }
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    return (
        <div>
            <h2>{id ? "Edit Product" : "Add New Product"}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <button type="submit">{id ? "Update" : "Create"} Product</button>
            </form>
        </div>
    );
};

export default AdminProductForm;
