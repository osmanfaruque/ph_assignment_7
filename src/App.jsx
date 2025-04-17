import './App.css'
import TitleSection from './assets/components/title-section'
import Auctions from './assets/components/auctions'

function App() {
  return (
    <section className="flex flex-col gap-10 px-36 py-32 bg-blue-50">
      <TitleSection />
      <Auctions />
    </section>
  )
}

export default App
