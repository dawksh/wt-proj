import { Separator } from "@/components/ui/separator"

export default function SeparatorDemo() {
    return (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Stop n Joy Restaurant</h4>
                <p className="text-sm text-muted-foreground">
                    A library based restaurant for students.
                </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Kitchen</div>
                <Separator orientation="vertical" />
                <div>Order</div>

            </div>
        </div>
    )
}
