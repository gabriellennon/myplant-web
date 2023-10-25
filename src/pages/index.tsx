import { Button } from '@/components/ui/button'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen p-24 ${jost.className}`}
    >
      <h1>Hello</h1>
      <Button>Click me</Button>
    </main>
  )
}
