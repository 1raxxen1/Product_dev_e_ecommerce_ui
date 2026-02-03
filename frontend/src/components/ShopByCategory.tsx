const categories = [
  {
    title: "Electronics",
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?_gl=1*1jlc85*_ga*MTExODYxMDU0OS4xNzY4NTg2MzM4*_ga_8JE65Q40S6*czE3NzAxNDE5NjgkbzMkZzEkdDE3NzAxNDIwMDgkajIwJGwwJGgw",
  },
  {
    title: "Fashion",
    image: "https://images.pexels.com/photos/3780537/pexels-photo-3780537.jpeg",
  },
  {
    title: "Home & Living",
    image: "https://images.pexels.com/photos/28345542/pexels-photo-28345542.jpeg",
  },
]

const ShopByCategory = () => {
  return (
    <div className="flex flex-col m-10 gap-4">
      <div className="text-xl font-bold">Shop by Category</div>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((category, i) => (
          <div
            key={i}
            className="group relative h-64 cursor-pointer overflow-hidden rounded-xl"
          >
            <img
              src={category.image}
              alt={category.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            <div className="absolute inset-0 flex items-end justify-start p-5">
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopByCategory
