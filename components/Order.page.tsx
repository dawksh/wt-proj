import React from 'react'

const Order = ({ table }: { table: String }) => {
    return (
        <div className='p-4'>
            <h2 className='text-lg font-medium'>Table: {table}</h2>
        </div>
    )
}

export default Order