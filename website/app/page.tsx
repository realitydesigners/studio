import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Link href="/stream" className='text-white p-3 font-mono bg-gray-600/20'>Stream</Link>
    </main>
  )
}
