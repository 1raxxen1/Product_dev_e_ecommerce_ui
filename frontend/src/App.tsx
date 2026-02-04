import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import Blogs from "./pages/Blogs"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
