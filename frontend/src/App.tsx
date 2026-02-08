import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import Blogs from "./pages/Blogs"
import SingleBlogPage from "./pages/SingleBlogPage"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"
import AdminLayout from "./layout/AdminLayout"
import AdminProducts from "./pages/AdminProducts"
import AdminBlogs from "./pages/AdminBlogs"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />

        <Route path="/auth/login" element={<LoginPage />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path="products" element={<AdminProducts/>}/>
            <Route path="blogs" element={<AdminBlogs/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
