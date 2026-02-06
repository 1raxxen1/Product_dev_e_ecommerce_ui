
const Sidebar = () => {
  return (
    <div className="h-full w-full border-r flex flex-col justify-between">
      <div>
        <div className="p-3 text-xl font-bold ">Fried Carboretor</div>

      <div className="mt-5 px-5">
        <button className="border rounded w-full p-1 text-left text-sm my-1">Your Blogs</button>
        <button className="border rounded w-full p-1 text-left text-sm my-1">Your Products</button>
      </div>
      </div>

      <div className="p-5 border m-2 rounded-xl">
        <button>Mr. Paplet</button>
      </div>
      
    </div>
  )
}

export default Sidebar