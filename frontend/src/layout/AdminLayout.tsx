import Sidebar from "../components/Sidebar"

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/6 min-h-screen">
        <Sidebar />
      </div>
      
    </div>
  )
}

export default AdminLayout