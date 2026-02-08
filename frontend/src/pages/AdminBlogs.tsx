type Blog = {
  id: string
  title: string
  description: string
}

type BlogCardProps = {
  title: string
  description: string
}

const AdminBlogs = () => {
  const blogs: Blog[] = [
    {
      id: "1",
      title: "Scaling React Apps",
      description: "Learn patterns to scale React apps using modular architecture..."
    },
    {
      id: "2",
      title: "Understanding WebSockets",
      description: "Real-time communication using WebSockets explained simply..."
    },
    {
      id: "3",
      title: "Docker for Beginners",
      description: "Containerization basics every developer should know..."
    }
  ]

  return (
    <div className="h-full w-full bg-gray-300 border flex">
      <div className="h-full w-1/4 border bg-gray-400 flex flex-col">
      <div className="flex justify-between mb-5 m-3 items-center">
        <div className="text-xl font-bold mb-5 m-3">Your Blogs</div>
        <button className="w-10 h-10 bg-gray-700 rounded-md text-white text-2xl">+</button>
      </div>
        
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>

      <div className="w-3/4 flex flex-col bg-white">
        
      </div>
    </div>
  )
}

const BlogCard = ({ title, description }: BlogCardProps) => {
  return (
    <button className="text-left cursor-pointer bg-white flex flex-col my-1 mx-2 p-3 rounded-md ">
      <div className="font-bold text-md">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </button>
  )
}

export default AdminBlogs
