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
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const items: Array<Order> = [
    {
        title: 'Chicken',
        price: 100,
        image: "https://i.imgur.com/pUWQRu8.jpeg",
        table: "1",
    },
    {
        title: "Prawns",
        price: 200,
        image: "https://i.imgur.com/mpsDXKd.jpeg",
        table: "1",
    },
    {
        title: "Pasta",
        price: 150,
        image: "https://i.imgur.com/FJsDCOD.jpeg",
        table: "1"
    }
]

const Order = ({ table, kitchen }: { table: string, kitchen: string }) => {
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

    const handleConfirm = async () => {
        try {
            const orderWithKitchen = order.map(item => ({ ...item, kitchen }));

            await axios.post('/api/orders', orderWithKitchen); // Replace with your actual API endpoint
            toast.success('Order confirmed');
        } catch (error) {
            console.error(error);
            toast.error('Failed to confirm order');
        }
    };

    return (
        <div className='p-4'>
            <ToastContainer />
            <h2 className=" font-semibold text-xl text-center my-4">{kitchen}</h2>
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
                            <Button onClick={handleConfirm}>Confirm</Button>
                            <DrawerClose>
                                <Button variant="outline">Close</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
            <div className="flex flex-col lg:flex-row">
                {items.map((item, index) => (
                    <Item key={index} title={item.title} price={item.price} image={item.image || ""} table={table} setOrder={setOrder} />
                )
                )}

            </div>
        </div>
    )
}

export default Order