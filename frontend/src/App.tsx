import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import Blogs from "./pages/Blogs"
import SingleBlogPage from "./pages/SingleBlogPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
