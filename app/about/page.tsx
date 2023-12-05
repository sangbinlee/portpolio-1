import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
export default function About() {
  return (
    // <main>
    <main className={inter.className}>
      <h1>about</h1>
    </main>
  )
}
