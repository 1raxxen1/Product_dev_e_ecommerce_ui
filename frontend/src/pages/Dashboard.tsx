const Dashboard = () => {
  return (
    <div className="h-full w-full bg-gray-300 p-10 border">
      <div className="h-full  grid grid-cols-3 grid-rows-7 gap-4">
        <div className="bg-white row-span-2 p-5 rounded-md">Total Blog Views</div>
        <div className="bg-white row-span-2 p-5 rounded-md">Total Blog Articles</div>
        <div className="bg-white row-span-2 p-5 rounded-md">Total Products</div>

        <div className="col-span-2 row-span-3 bg-white p-5 rounded-md">
          Blog Views Trends
        </div>

        <div className="row-span-5 bg-white p-5 rounded-md">
          Recent Comments
        </div>

        <div className="col-span-2 row-span-2 bg-white p-5 rounded-md">
          Recent Articles
        </div>
      </div>
    </div>
  )
}


export default Dashboard