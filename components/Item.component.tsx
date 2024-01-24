import React, { Dispatch, SetStateAction } from 'react'
import { Button } from './ui/button'
import { Order } from '@/lib/types'

const Item = ({ title, price, setOrder }: { title: String, price: Number, setOrder: Dispatch<SetStateAction<Order[]>> }) => {
    return (
        <div className='w-full h-64 my-8 flex items-center justify-center border-2 border-slate-700 flex-col rounded-md'>
            {title}
            <br />
            Rs. {price.toString()}
            <Button className='my-2' onClick={(e) => {
                setOrder((prev: any) => {
                    return [...prev, { title, price }]
                })
            }}>Add to cart</Button>
        </div>
    )
}

export default Item