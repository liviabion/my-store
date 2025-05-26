import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function Home() {
  return (
    <div className="pt-24 min-h-screen flex flex-col">

      <Header />

        <main className="flex-1 px-6">
            <h1 className="text-2xl font-bold mb-2">Página Inicial</h1>
            <p className="text-gray-dark font-poppins">
                Explore nossos produtos incríveis ✨
            </p>
        </main>


      <Footer />
    </div>
  )
}
