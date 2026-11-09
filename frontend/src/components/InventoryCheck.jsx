import { useState } from 'react';

function InventoryCheck() {
    const [productId, setProductId] = useState("");
    const [inventory, setInventory] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    const handleCheckInventory = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setInventory(null);

        try {
            const response = await fetch(`http://localhost:8081/api/inventory/${productId}`);

            if (response && response.ok) {
                const data = await response.json();
                setInventory(data);
            } else {
                setErrorMsg("Product not found in inventory.");
            }
        } catch (error) {
            console.error("Network error:", error);
            setErrorMsg("Could not connect to Inventory Service (port 8081).");
        }
    };

    return (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
            <h3>Check Product Inventory</h3>
            <form onSubmit={handleCheckInventory}>
                <input
                    type="text"
                    placeholder="Enter Product ID (e.g. LAPTOP-X1)"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                />
                <button type="submit">Check Stock</button>
            </form>

            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

            {inventory && (
                <div>
                    <p>Product ID: {inventory.productId}</p>
                    <p>Available Quantity: {inventory.quantity}</p>
                </div>
            )}
        </div>
    );
}

export default InventoryCheck;
