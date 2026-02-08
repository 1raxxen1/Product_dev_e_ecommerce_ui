import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        <Outlet />
      </div>

    </div>
  )
}

export default AdminLayout
