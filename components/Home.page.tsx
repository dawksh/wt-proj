import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from 'react';

export default function SeparatorDemo() {
    const backgroundImageStyle = {
        backgroundImage: `url('/ui/bg1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div style={backgroundImageStyle}>
            {/* Navigation Bar */}
            <div className="bg-blue-300 p-4">
                <nav className="flex items-center justify-between">
                    <h1 className="text-white text-2xl font-bold">
                        <img src="/bg1.jpg" alt="Logo" className="h-8" />
                    </h1>
                    <div className="space-x-4">
                        <Link href="/">Home</Link>
                    </div>
                </nav>
            </div>

            {/* Content */}
            <div className="max-w-md mx-auto p-6 bg-overlay rounded-lg shadow-md">
                <div className="bg-overlay-content">
                    <div className="space-y-6 text-center">
                        <h1 className="text-3xl font-bold text-black-300 tracking-tight">Stop n Joy Restaurant</h1>
                        <p className="text-lg text-gray-600">A library-based restaurant for students !!!</p>
                    </div>

                    <Separator className="my-6" />

                    <div className="flex items-center justify-center space-x-4">
                        <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                            <Link href="/signin">Kitchen Login</Link>
                        </button>
                        <Separator orientation="vertical" />
                        <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
                            <Link href="/order">Scan QR and Order</Link>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-blue-150 p-20 mt-20">
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <p className="text-gray-600">For inquiries and more information</p>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-center space-x-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/x-logo.png" alt="Twitter" className="w-8 h-8 rounded-sm" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.png" alt="Facebook" className="w-8 h-8 rounded-sm" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram-icon.png" alt="Instagram" className="w-8 h-8 rounded-sm" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

