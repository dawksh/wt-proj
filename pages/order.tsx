import OrderComponent from '@/components/Order.page';
import Scanner from '@/components/Scanner.component';
import { useState } from 'react'

const Order = () => {
    const [data, setData] = useState<String | null>(null);


    return (
        <div className='flex items-center justify-center flex-col'>
            {
                !data ? (
                    <Scanner data={data} setData={setData} />
                ) : (
                    <OrderComponent table={data} />
                )
            }
        </div>
    )
}

export default Order;