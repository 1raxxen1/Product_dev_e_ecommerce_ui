import Navbar from '../components/Navbar'
import HomepageCarousel from '../components/HomepageCarousel'
import ShopByCategory from '../components/ShopByCategory'
import HomepageFooter from '../components/HomepageFooter'

type Props = {}

const Homepage = (props: Props) => {
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