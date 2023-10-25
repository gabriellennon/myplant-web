import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen p-24 ${inter.className}`}
    >
      <h1>Hello</h1>
    </main>
  )
}
