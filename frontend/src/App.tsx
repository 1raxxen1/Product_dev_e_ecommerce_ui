import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import Blogs from "./pages/Blogs"
import SingleBlogPage from "./pages/SingleBlogPage"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />

        <Route path="/auth/login" element={<LoginPage />} />

         <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
