import { useEffect } from "react";
import Navbar from "../components/Navbar"

const Blogs = () => {
  const BLOGS_BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {

    const fetchBlogs = async () => {
      try{
        const res = await fetch(BLOGS_BACKEND_URL, {
        method: "GET",
        headers: {
          //TODO: add auth headers for protection or we can set allowed origins in backend
        }
      })

      const data = await res.json();
      console.log("data from django backend: ", data); //just for testing
      }catch(error){
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs()
  }, [])

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col">
        <Navbar />

        <div className="grid grid-cols-4 bg--300">

          <div className="col-span-4 p-10 flex justify-start">
            <div className="w-150 h-90 rounded-xl bg-red-300"></div>
            <div className="flex flex-col justify-center mx-10">
              <div className="rounded-xl bg-blue-200 py-2 px-4 my-2 w-40 border border-blue-400 font-bold text-blue-600 text-sm">Featured Article</div>
              <div className="text-3xl font-bold">Fortnite Battlepass</div>
              <div className="text">Neck hurts Neck hurts Neck hurts Neck hurts Neck hurts Neck hurts Neck hurts Neck hurts Neck hurts Neck hurts Neck hurts Neck hurts</div>
              <div className="mt-10 text-blue-700 font-semibold text-xl">Read More</div>
            </div>
          </div>

          <div className="col-span-3 bg--700 p-10 flex flex-col grid grid-cols-3 gap-5 h-100">
            <div className="bg-blue-400 col-span-1 rounded-xl">sdsds</div>
            <div className="bg-blue-400 col-span-1">sdsds</div>
            <div className="bg-blue-400 col-span-1">sdsds</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs