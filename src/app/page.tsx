import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import Library from '@/components/Library'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="flex flex-col items-center justify-between w-full ">
        <Masthead />
        <Library />
      </main>

      <Footer />
    </div>
  )
}
