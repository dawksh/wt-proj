import React, { Dispatch, SetStateAction } from 'react'
import { QrScanner } from '@yudiel/react-qr-scanner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Scanner = ({ data, setData }: { data: string | null, setData: Dispatch<SetStateAction<String | null>> }) => {
    const [table, setTable] = React.useState<string | null>(null)
    return (
        <div className='text-center'>
            <QrScanner
                onError={(err) => console.log(err)}
                onDecode={(result) => setData(result)}
            />
            <p className='my-4'>Please scan your QR at your table</p>
            <p>or</p>
            <Input onChange={(e) => setTable(e.target.value)} placeholder='Enter Table Number' className='my-4' />
            <Button onClick={(e) => setData(table)}>Start ordering!</Button>
        </div>
    )
}

export default Scanner