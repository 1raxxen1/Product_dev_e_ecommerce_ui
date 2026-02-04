import Navbar from '../components/Navbar'
import HomepageCarousel from '../components/HomepageCarousel'
import ShopByCategory from '../components/ShopByCategory'
import HomepageFooter from '../components/HomepageFooter'

const Homepage = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <HomepageCarousel />
      <ShopByCategory />
      <HomepageFooter />
      
    </div>
  )
}

export default Homepage