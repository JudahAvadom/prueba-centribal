import { useContext } from "react"
import ShoppingCar from "../icons/ShoppingCar"
import itemsContext from "../context/itemsContext"

const Navbar = () => {
  const ItemsContext = useContext(itemsContext)
  return (
    <div className="bg-slate-800 p-3 flex justify-between">
      <div>
        <a href="/" className="text-white text-3xl">Inicio</a>
      </div>
      <div className="flex">
        <ShoppingCar />
        <div className="text-white text-3xl mx-1">
          {ItemsContext.counter}
        </div>
        <button className="bg-green-600 px-4 rounded-lg font-medium text-white">
          <a href="/envio">Hacer envio</a>
        </button>
      </div>
    </div>
  )
}

export default Navbar
