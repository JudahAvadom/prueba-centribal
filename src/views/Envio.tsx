import { useContext } from "react"
import itemsContext from "../context/itemsContext"

const Envio = () => {
    const ItemsContext = useContext(itemsContext)
    const vaciar = () => {
        localStorage.setItem("countProducts", "0")
        localStorage.setItem("price", "0")
        ItemsContext.setCounter()
    }
    return (
        <div className="p-4">
            <div className="flex flex-col">
                <span className="text-semibold text-3xl">Pedidos: {ItemsContext.counter}</span>
                <span className="text-semibold text-3xl">Total: ${localStorage.getItem("price")}</span>
            </div>
            <div>
                <button onClick={vaciar} className="bg-slate-400 p-2 rounded-xl shadow-lg">Vaciar carro</button>
                <button onClick={() => alert("Se ha realizado el envio")} className="bg-green-400 p-2 rounded-xl shadow-lg">Aceptar</button>
            </div>
        </div>
    )
}

export default Envio
