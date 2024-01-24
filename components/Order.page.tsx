import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import Item from "./Item.component"
import { Order } from "@/lib/types"
import { useState } from "react"

const items: Array<Order> = [
    {
        title: 'Chicken',
        price: 100
    },
    {
        title: "Prawns",
        price: 200
    },
    {
        title: "Fish",
        price: 150
    }
]

const Order = ({ table }: { table: String }) => {
    const [order, setOrder] = useState<Array<Order>>([]);
    const renderCart = () => {
        const total = order.reduce((acc, curr) => acc + Number(curr.price), 0)
        return (
            <div className="mx-4">
                {order.map((item, index) => (
                    <div key={index}>
                        {item.title} - {item.price.toString()}
                    </div>
                ))}
                <p className="font-semibold">Total: {total}</p>
            </div>
        )
    }

    return (
        <div className='p-4'>
            <div className="flex flex-row justify-between">
                <h2 className='text-lg font-medium'>Table: {table}</h2>
                <Drawer>
                    <Button><DrawerTrigger>View Cart</DrawerTrigger></Button>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Cart</DrawerTitle>
                        </DrawerHeader>
                        <DrawerDescription>
                            {renderCart()}
                        </DrawerDescription>
                        <DrawerFooter>
                            <Button>Confirm</Button>
                            <DrawerClose>
                                <Button variant="outline">Close</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
            <div>
                <Carousel>
                    <CarouselContent>
                        {items.map((item, index) => (
                            <CarouselItem key={index}>
                                <Item title={item.title} price={item.price} setOrder={setOrder} />
                            </CarouselItem>
                        )
                        )}
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                </Carousel>

            </div>
        </div>
    )
}

export default Order