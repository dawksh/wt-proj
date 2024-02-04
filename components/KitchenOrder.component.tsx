import { Order } from "@/lib/types"
import { Button } from "./ui/button"
import axios from "axios"
import { toast } from "react-toastify"
import { useState,useEffect } from "react"

const KitchenOrder = ({ order }: { order: Array<Order> }) => {
    const[orders, setOrders] = useState<Array<Order>>([]);
    useEffect(() => {
        setOrders(order);
    }, [order]);
    const handleMarkServed = async (item: Order) => {
        try {
            // Replace '/api/orders' with your actual API endpoint
            // and 'item.id' with the actual property of the order that represents its ID
            await axios.delete('/api/orders', { data: { id: item.id } });
            toast.success('Order marked as served and deleted');
            // Update the state to remove the deleted order
            setOrders( orders.filter(orderItem => orderItem.id !== item.id));
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while marking the order as served');
        }
    };
    if (orders.length === 0) {
        return <p>No orders yet.</p>;
    }
    return (
        <div className="flex flex-col my-4 items-start border-2 border-gray-800 rounded-md p-4">
            
            <div className="flex flex-row">
                {orders.map((item, index) => {
                    return (
                        <div key={index} className="p-8  border-2 border-gray-800 m-2" >
                            <div>Table No: <span className=" font-semibold">{item.table}</span></div>
                            <div className=" font-medium my-4">{item.title}</div>
                            <Button onClick={() => handleMarkServed(item)}>Mark Served</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default KitchenOrder