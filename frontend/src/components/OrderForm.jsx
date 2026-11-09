import { useState } from 'react';

function OrderForm({ customerId, onOrderCreated }) {
    const [productId, setProductId] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ productId, quantity })
            });

            if (response.ok) {
                const data = await response.json();
                onOrderCreated(data);
                alert("Order created! Order ID: " + data.id + " | Status: " + data.status);
                setProductId("");
                setQuantity(1);
            } else {
                console.error("Failed to create order");
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create an Order (for Customer ID: {customerId})</h2>
            <input
                type="text"
                placeholder="Enter Product ID (e.g. LAPTOP-X1)"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <input
                type="number"
                min="1"
                placeholder="Enter Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <button type="submit">Place Order</button>
        </form>
    );
}

export default OrderForm;
