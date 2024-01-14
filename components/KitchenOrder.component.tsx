import { KitchenOrderProps } from "@/lib/types"
import { Button } from "./ui/button"

const KitchenOrder = ({ order }: { order: KitchenOrderProps }) => {
    return (
        <div className="flex flex-col my-4 items-start border-2 border-gray-800 rounded-md p-4">
            <div>Table No: <span className=" font-semibold">{order.table}</span></div>
            <div className="flex flex-row">
                {order.order.map((item, index) => {
                    return (
                        <div key={index} className="p-8" >
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