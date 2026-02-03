import HomepageCarousel from "./components/HomepageCarousel"
import HomepageFooter from "./components/HomepageFooter"
import Navbar from "./components/Navbar"
import ShopByCategory from "./components/ShopByCategory"

function App() {

  return (
    <div className="w-full h-screen">
      <Navbar />
      <HomepageCarousel />
      <ShopByCategory />
      <HomepageFooter />
      
    </div>
  )
}

export default App
