import { useEffect, useState } from "react";

const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("/api/cart")
            .then((res) => res.json())
            .then((data) => setCart(data))
            .catch((error) => console.error("Error fetching cart:", error));
    }, []);

    const handleRemove = async (id) => {
        await fetch(`/api/cart/${id}`, { method: "DELETE" });
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.product_name} - {item.quantity}
                        <button onClick={() => handleRemove(item.id)}>🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartPage;
