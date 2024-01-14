import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Item from "./Item.component"
import { Order } from "@/lib/types"

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
    return (
        <div className='p-4'>
            <h2 className='text-lg font-medium'>Table: {table}</h2>
            <div>
                <Carousel>
                    <CarouselContent>
                        {items.map((item, index) => (
                            <CarouselItem key={index}>
                                <Item title={item.title} price={item.price} />
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