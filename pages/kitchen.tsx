import React, { useEffect, useState } from 'react'
import KitchenPage from "@/components/Kitchen.page";
import { useRouter } from 'next/router';

const Kitchen = () => {
    const [username, setUsername] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (router.query.user) {
            setUsername(router.query.user as string)
        }
    }, [router.query.user])

    return (
        <div>
            <KitchenPage username={username} />
        </div>
    )
}

export default Kitchen;
