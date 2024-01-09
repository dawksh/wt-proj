import { Inter } from 'next/font/google'
import HomePage from '@/components/Home.page'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <Head>
        <title>Restaurant</title>
      </Head>
      <HomePage />
    </main>
  )
}
