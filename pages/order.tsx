import Order from '@/components/Order.page';
import Scanner from '@/components/Scanner.component';
import { useState } from 'react'

const order = () => {
    const [data, setData] = useState<String | null>(null);


    return (
        <div className='flex items-center justify-center flex-col'>
            {
                !data ? (
                    <Scanner data={data} setData={setData} />
                ) : (
                    <Order table={data} />
                )
            }
        </div>
    )
}

export default order;