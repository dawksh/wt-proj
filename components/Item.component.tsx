import React from 'react'
import { Button } from './ui/button'

const Item = ({ title, price }: { title: String, price: Number }) => {
    return (
        <div className='w-full h-64 my-8 flex items-center justify-center border-2 border-slate-700 flex-col rounded-md'>
            {title}
            <br />
            Rs. {price.toString()}
            <Button className='my-2'>Add to cart</Button>
        </div>
    )
}

export default Item