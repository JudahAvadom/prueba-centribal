import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./views/Index"
import Producto from "./views/Producto"
import Navbar from "./components/Navbar"
import { useContext, useEffect } from "react"
import itemsContext from "./context/itemsContext"
import Envio from "./views/Envio"

function App() {
  const ItemsContext = useContext(itemsContext)
  useEffect(() => {
    const number: any = localStorage.getItem("countProducts")
    if (number != "0") {
      ItemsContext.setCounter()
    }
    else {
      localStorage.setItem("countProducts", "0")
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Index />} />
          <Route path="/pedido/:id" element={<Producto />} />
          <Route path="/envio" element={<Envio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
