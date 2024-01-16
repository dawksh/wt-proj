import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import backgroundImage from './bg1.jpg';

export default function SeparatorDemo() {
  return (
    <div className="max-w-md mx-auto p-6 bg-overlay rounded-lg shadow-md">
      <div className="bg-overlay-content">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold text-black-300 tracking-tight">Stop n Joy Restaurant</h1>
          <p className="text-lg text-gray-600">A library-based restaurant for students !!!</p>
        </div>

        <Separator className="my-6" />

        <div className="flex items-center justify-center space-x-4">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            <Link href="/kitchen">Kitchen Login</Link>
          </button>
          <Separator orientation="vertical" />
          <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
            <Link href="/order">Scan QR and Order</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
