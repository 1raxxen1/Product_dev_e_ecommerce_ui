const Navbar = () => {
  return (
    <div className="w-full px-4 py-5 flex justify-between">

      <div className="font-bold text-xl">Fried Carboretor</div>
      <div className="flex justify-center gap-4">
        <button>Fried Chicken</button>
        <button>Kobe Bryant</button>
        <button>Henessy</button>
        <button>Denzel Washington</button>
      </div>

      <div className="flex justify-center gap-2 font-thin">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  )
}

export default Navbar