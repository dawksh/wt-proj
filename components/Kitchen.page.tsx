import React,{useEffect,useState} from "react";
import KitchenOrder from "./KitchenOrder.component";
import {  Order } from "@/lib/types";

interface ResponseData {
    success: boolean;
    data: Order[];
  }
const Kitchen = () => {
    const [orders, setOrders] = useState<Array<Order>>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/orders');
                const data : ResponseData = await response.json();
                setOrders(data.data);
                
            } catch (error) {
                console.error('Failed to fetch orders:', error);
            }
        };

        fetchOrders();
    }, []);

    // console.log("orders", orders);
    return (
        <div className="flex items-center justify-between p-8 flex-col">
            <h1 className="text-2xl">Kitchen</h1>
            
                return <KitchenOrder  order={orders} />;
            
        </div>
    );
};

export default Kitchen;
