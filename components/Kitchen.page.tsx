import React, { useEffect, useState } from "react";
import KitchenOrder from "./KitchenOrder.component";
import { Order } from "@/lib/types";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface ResponseData {
    success: boolean;
    data: Order[];
}
const Kitchen = ({ username }: { username: string }) => {
    const [orders, setOrders] = useState<Array<Order>>([]);


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/orders?user=' + username);
                const data: ResponseData = await response.json();
                setOrders(data.data);

            } catch (error) {
                console.error('Failed to fetch orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="flex items-center justify-between p-8 flex-col">
            <ToastContainer />
            <h1 className="text-2xl">{username}</h1>
            <KitchenOrder order={orders} />
        </div>
    );
};

export default Kitchen;
