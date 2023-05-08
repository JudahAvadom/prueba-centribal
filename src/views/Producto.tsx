import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../types/ProductType";
import itemsContext from "../context/itemsContext";

const Producto = () => {
    const [item, setItem] = useState<ProductType | null>(null)
    const count = useRef()
    let { id } = useParams()
    const ItemsContext = useContext(itemsContext)
    useEffect(() => {
        axios.get("http://localhost:4000/products/" + id).then((response) => {
            setItem(response.data)
        })
    }, [])
    const handleBtn = () => {
        const value : number = count.current.value;
        if (!value || value == 0) {
            alert("Cantidad invalida")
        }
        else {
            if (localStorage.getItem("countProducts") == null || localStorage.getItem("countProducts") == "NaN") {
                localStorage.setItem("countProducts", value)    
            }
            else {
                const currentCount = parseInt(localStorage.getItem("countProducts")) + Number(value)
                localStorage.setItem("countProducts", currentCount)
            }
            if (localStorage.getItem("price")) {
                const countPrice = parseInt(localStorage.getItem("price")) + Number(item.precio)
                localStorage.setItem("price", countPrice)
            } else {
                localStorage.setItem("price", item.total)
            }
            
            ItemsContext.setCounter()
        }
    }
    if (!item) return null;
    return (
        <div className="p-4">
            <div className="align-center text-2xl">
                {item.title}
            </div>
            <div className="flex">
                <img
                    src={"/img/" + item.img}
                    alt="product"
                    width={200}
                    className="p-2"
                />
                <div className="mx-2 flex flex-col">
                    <span>Producto: {item.title}</span>
                    <span>Descripcion: {item.description}</span>
                    <span>Identificador del pedido: {parseInt(Math.random() * (9999999 - 1) + 1)}</span>
                    <span>Precio: $ {item.precio}</span>
                    <span>Precio con impuestos: $ {item.total}</span>
                    <div>
                        <button 
                            className="bg-green-400 p-2 rounded-lg" 
                            onClick={handleBtn}
                        >
                            Hacer pedido
                        </button>
                        <input type="number" className="p-2 mx-2 border-2 border-slate-600 rounded-xl" min={0} ref={count} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producto
