import OrderComponent from '@/components/Order.page';
import Scanner from '@/components/Scanner.component';
import { useState } from 'react'

export interface KitchenData {
    table: string;
    kitchen: string;
}

const Order = () => {
    const [data, setData] = useState<KitchenData | null>(null);

    return (
        <div className='flex items-center justify-center flex-col'>
            {
                !data ? (
                    <Scanner data={data} setData={setData} />
                ) : (
                    <OrderComponent table={data.table} kitchen={data.kitchen} />
                )
            }
        </div>
    )
}

export default Order;