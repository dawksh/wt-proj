import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Button } from './ui/button'
import { Order } from '@/lib/types'

const Item = ({ title, price, setOrder }: { title: String, price: Number, setOrder: Dispatch<SetStateAction<Order[]>> }) => {
    const [label, setLabel] = React.useState<String>('Add to cart');
    useEffect(() => {
        setTimeout(() => {
            setLabel('Add to cart');
        }, 2000)
    }, [label])
    return (
        <div className='w-full h-64 my-8 flex items-center justify-center border-2 border-slate-700 flex-col rounded-md'>
            {title}
            <br />
            Rs. {price.toString()}
            <Button className='my-2 w-32' onClick={(e) => {
                setOrder((prev: any) => {
                    return [...prev, { title, price }]
                });
                setLabel('✅');
            }}>{label}</Button>
        </div>
    )
}

export default Item