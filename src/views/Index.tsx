import axios from "axios"
import { useEffect, useState } from "react"
import { ProductType } from "../types/ProductType"

const Index = () => {
  const [listProducts, setListProducts] = useState(null)
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      setListProducts(response.data)
    })
  }, [])
  if (!listProducts) return null;
  return (
    <div className="p-2">
      <h2 className="text-2xl font-semibold">Articulos</h2>
      {
        listProducts.map((e: ProductType, key: any) => (
          <div
            key={key}
            className="flex bg-slate-300 rounded-2xl shadow-2xl my-2"
          >
            <div>
              <img
                src={"./img/" + e.img}
                alt="product"
                width={150}
                className="p-2"
              />
            </div>
            <div className="flex flex-col mx-2">
              <span className="text-2xl font-semibold">{e.title}</span>
              <span>{e.description}</span>
              <a href={`/pedido/${e.id}`} className="bg-lime-400 p-2 rounded-xl place-self-start">Hacer pedido</a>
            </div>
            <div className="flex flex-col mx-2">
              <span className="">$ {e.precio} sin impuestos</span>
              <span className="text-2xl font-semibold">$ {e.total}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Index
