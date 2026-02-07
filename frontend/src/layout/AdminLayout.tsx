import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/6 min-h-screen">
        <Sidebar />
      </div>

      <div className="w-5/6">
        <Outlet />
      </div>
      
    </div>
  )
}

export default AdminLayout