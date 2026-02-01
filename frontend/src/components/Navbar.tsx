import { useState } from "react"

type HoverCategory = "fried" | "kobe" | "henessy" | "denzel" | "pickels"


const Navbar = () => {
  const [hoverCategory, setHoverCategory] = useState<HoverCategory | null>(null);
  return (
    <div className="relative flex flex-col">
    <div className="w-full px-4 py-5 flex justify-between">

      <div className="font-bold text-xl">Fried Carboretor</div>
      <div className="flex justify-center gap-4">
        <button className="hover:underline cursor-pointer" onMouseEnter={() => setHoverCategory("fried")}
          onMouseLeave={() => setHoverCategory(null)}>Fried Chicken</button>
        <button className="hover:underline" onMouseEnter={() => setHoverCategory("kobe")}
          onMouseLeave={() => setHoverCategory(null)}>Kobe Bryant</button>
        <button className="hover:underline" onMouseEnter={() => setHoverCategory("henessy")}
          onMouseLeave={() => setHoverCategory(null)}>Henessy</button>
        <button className="hover:underline" onMouseEnter={() => setHoverCategory("denzel")}
          onMouseLeave={() => setHoverCategory(null)}>Denzel Washington</button>
        <button className="hover:underline" onMouseEnter={() => setHoverCategory("pickels")}
          onMouseLeave={() => setHoverCategory(null)}>Pickels</button>
      </div>

      <div className="flex justify-center gap-2 font-thin">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>

    {hoverCategory === "fried" && 
      <div className="absolute left-0 top-full w-full z-50 bg-white px-20 py-10">
        <div className="grid grid-cols-4">
          <div className="flex flex-col">
            <div className="font-bold mb-3">Slutty Sauce</div>
            <div>Marinera Sauce</div>
            <div>BBQ Sauce</div>
            <div>Hot n Sour</div>
          </div>

          <div className="flex flex-col">
            <div className="font-bold mb-3">Slutty Sauce</div>
            <div>Marinera Sauce</div>
            <div>BBQ Sauce</div>
            <div>Hot n Sour</div>
          </div>

          <div className="flex flex-col">
            <div className="font-bold mb-3">Slutty Sauce</div>
            <div>Marinera Sauce</div>
            <div>BBQ Sauce</div>
            <div>Hot n Sour</div>
          </div>

          <div className="flex flex-col">
            <div className="font-bold mb-3">Slutty Sauce</div>
            <div>Marinera Sauce</div>
            <div>BBQ Sauce</div>
            <div>Hot n Sour</div>
          </div>
        </div>
      </div>
    }
    </div>
  )
}

export default Navbar