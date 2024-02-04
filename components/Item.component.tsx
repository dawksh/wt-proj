import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Button } from "./ui/button";
import { Order } from "@/lib/types";
import Image from "next/image";

const Item = ({
    title,
    price,
    setOrder,
    image,
    table
}: {
    title: string;
    price: Number;
    image: string;
    table: string;
    setOrder: Dispatch<SetStateAction<Order[]>>;
}) => {
    const [label, setLabel] = React.useState<String>("Add to cart");
    useEffect(() => {
        setTimeout(() => {
            setLabel("Add to cart");
        }, 2000);
    }, [label]);
    return (
        <div className="w-full my-8 flex items-center justify-center border-2 border-slate-700 flex-col rounded-md">
            <Image src={image} alt={`${title} Image`} width={200} height={200} className="rounded-sm mt-8"></Image>
            <span className=" font-semibold mt-4">
                {title}
            </span>
            Rs. {price.toString()}
            <Button
                className="my-2 mb-8 w-32"
                onClick={(e) => {
                    setOrder((prev: any) => {
                        return [...prev, { title, price,table }];
                    });
                    setLabel("✅");
                }}
            >
                {label}
            </Button>
        </div>
    );
};

export default Item;
