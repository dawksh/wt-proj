
export type Order = {
    title: string,
    price: Number
}

export type KitchenOrderProps = {
    order: Array<Order>,
    table: string
}

