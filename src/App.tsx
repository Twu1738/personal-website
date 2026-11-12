import { Navbar } from "./Navbar";
import { Footer } from "./Footer";



export default function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="bg-paper flex-1 p-5">
        Body
      </main>

      <Footer />
    </div>
    </>
  )
}