import React from "react";
import KitchenOrder from "./KitchenOrder.component";
import { KitchenOrderProps } from "@/lib/types";


const Kitchen = () => {
    const orders: Array<KitchenOrderProps> = [
        {
            table: "B-15",
            order: [
                {
                    title: "Chicken",
                    price: 100,
                },
                {
                    'title': 'Prawns',
                    'price': 200
                }
            ],
        },
    ];
    return (
        <div className="flex items-center justify-between p-8 flex-col">
            <h1 className="text-2xl">Kitchen</h1>
            {orders.map((order, index) => {
                return <KitchenOrder key={index} order={order} />;
            })}
        </div>
    );
};

export default Kitchen;
