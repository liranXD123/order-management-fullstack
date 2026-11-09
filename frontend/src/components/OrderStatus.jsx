import { useState } from 'react';

function OrderStatus() {
    const [orderId, setOrderId] = useState("");
    const [orderData, setOrderData] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    const handleCheckStatus = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setOrderData(null);

        try {
            const response = await fetch(`http://localhost:8080/api/orders/${orderId}`);

            if (response && response.ok) {
                setOrderData(await response.json());
            } else {
                setErrorMsg("Order not found or server error.");
            }
        } catch (error) {
            console.error("Network error:", error);
            setErrorMsg("Could not connect to server.");
        }
    };

    return (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
            <h3>Check Order Status</h3>
            <form onSubmit={handleCheckStatus}>
                <input
                    type="number"
                    placeholder="Enter Order ID (e.g. 1)"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                />
                <button type="submit">Check Status</button>
            </form>

            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

            {orderData && (
                <div>
                    <h4>Order Details:</h4>
                    <p>Order ID: {orderData.id}</p>
                    <p>Product ID: {orderData.productId}</p>
                    <p>Quantity: {orderData.quantity}</p>
                    <p>Status: {orderData.status}</p>
                </div>
            )}
        </div>
    );
}

export default OrderStatus;
