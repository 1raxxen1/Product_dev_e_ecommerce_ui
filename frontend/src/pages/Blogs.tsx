import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HomepageFooter from "../components/HomepageFooter";

const Blogs = () => {
  const BLOGS_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(BLOGS_BACKEND_URL, {
          method: "GET",
        });

        const data = await res.json();
        console.log("data from django backend: ", data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    if (BLOGS_BACKEND_URL) fetchBlogs();
  }, [BLOGS_BACKEND_URL]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-col flex-grow">
        <Navbar />

        <div className="grid grid-cols-4 gap-6">

          <div className="col-span-4 p-10 flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-[600px] h-[360px]">
              <img
                src="https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="rounded-xl bg-blue-100 py-2 px-4 my-2 w-fit border border-blue-300 font-bold text-blue-600 text-sm">
                Featured Article
              </div>

              <div className="text-3xl font-bold mb-4">
                Fortnite Battlepass
              </div>

              <div className="text-gray-600 max-w-xl">
                Neck hurts Neck hurts Neck hurts Neck hurts Neck hurts
                Neck hurts Neck hurts Neck hurts Neck hurts Neck hurts.
              </div>

              <div className="mt-6 text-blue-700 font-semibold text-lg cursor-pointer hover:underline">
                Read More →
              </div>
            </div>
          </div>

          <div className="col-span-3 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-full text-xl font-bold">
              More Featured Articles
            </div>

            {[
              "https://images.pexels.com/photos/8427984/pexels-photo-8427984.jpeg",
              "https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg",
              "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
            ].map((img, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden">
                <img
                  src={img}
                  className="h-[380px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-white text-black w-fit rounded-md px-2 py-1 text-xs mb-2">
                    Health and Nutrition
                  </div>

                  <div className="text-lg font-semibold">
                    Mountain lowkey nice
                  </div>

                  <div className="text-sm opacity-90">
                    Mountains are fun to hangout and this article tells why.
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-1 pt-10 pr-10">
            <div className="text-xl mb-4 font-bold">Other Articles</div>

            {[1, 2, 3].map((item) => (
              <div key={item} className="w-full flex gap-3 my-4">
                <img
                  src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
                  className="w-20 h-20 rounded-md object-cover"
                />

                <div className="flex flex-col justify-center">
                  <div className="text-gray-400 text-sm">
                    Feb 5, 2026
                  </div>

                  <div className="text-gray-800 text-sm font-semibold">
                    Top 10 spots to go on this year
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <HomepageFooter />
    </div>
  );
};

export default Blogs;
