
export type Order = {
    title: string,
    price: Number,
    image?: string
}

export type KitchenOrderProps = {
    order: Array<Order>,
    table: string
}

