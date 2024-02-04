import React, { Dispatch, SetStateAction } from 'react'
import { QrScanner } from '@yudiel/react-qr-scanner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { KitchenData } from '@/pages/order';

const Scanner = ({ data, setData }: { data: string | null, setData: Dispatch<SetStateAction<KitchenData | null>> }) => {
    const [table, setTable] = React.useState<string | null>(null)
    const [kitchen, setKitchen] = React.useState<string | null>(null)
    return (
        <div className='text-center'>
            <QrScanner
                onError={(err) => console.log(err)}
                onDecode={(result) => setTable(result)}
            />
            <p className='my-4'>Please scan your QR at your table</p>
            <p>or</p>
            <Input onChange={(e) => setTable(e.target.value)} placeholder='Enter Table Number' className='my-4' />
            <Input onChange={(e) => setKitchen(e.target.value)} placeholder='Enter Kitchen Name' className='my-4' required={true} />
            <Button onClick={(e) => setData({
                table: table as string,
                kitchen: kitchen as string
            })}>Start ordering!</Button>
        </div>
    )
}

export default Scanner