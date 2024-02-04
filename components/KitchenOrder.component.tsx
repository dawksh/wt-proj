import { Order } from "@/lib/types"
import { Button } from "./ui/button"

const KitchenOrder = ({ order }: { order: Array<Order> }) => {
    
    return (
        <div className="flex flex-col my-4 items-start border-2 border-gray-800 rounded-md p-4">
            <div className="flex flex-row">
                {order.map((item, index) => {
                    return (
                        <div key={index} className="p-8  border-2 border-gray-800 m-2" >
                            <div>Table No: <span className=" font-semibold">{item.table}</span></div>
                            <div className=" font-medium my-4">{item.title}</div>
                            <Button>Mark Served</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default KitchenOrder