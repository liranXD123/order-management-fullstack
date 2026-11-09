import { useState } from "react";
import CustomerForm from "./components/CustomerForm.jsx";
import OrderForm from "./components/OrderForm.jsx";
import OrderStatus from "./components/OrderStatus.jsx";
import InventoryCheck from "./components/InventoryCheck.jsx";

function App() {
    const [customer, setCustomer] = useState(null);
    const [orders, setOrders] = useState([]);

    const handleOrderCreated = (newOrder) => {
        setOrders([...orders, newOrder]);
    };

    return (
        <div>
            <h1>Order Management System XDDD</h1>
            <CustomerForm onCustomerCreated={setCustomer} />
            {customer && <p>Welcome {customer.name} (ID: {customer.customerId})</p>}
            {customer && (
                <OrderForm
                    customerId={customer.customerId}
                    onOrderCreated={handleOrderCreated}
                />
            )}

            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        Order #{order.id} - Product: {order.productId} (Qty: {order.quantity}) - Status: {order.status}
                    </li>
                ))}
            </ul>

            <OrderStatus />
            <InventoryCheck />
        </div>
    );
}

export default App;
