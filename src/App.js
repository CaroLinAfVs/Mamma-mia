import Home from "./views/Home";
import MyContext from "./Mycontext";
import Carrito from "./views/Carrito";
import Navbar from "./components/Navbar";
import Pizzas from "./components/Pizzas";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    let total = 0
    for (let item of carrito) {
      total = total + (item.price * item.quantity)
    }
    setCount(total)
  }, [carrito])

  console.log(count)
  const GlobalValue = { pizzas, setPizzas, carrito, setCarrito, count, setCount };

  useEffect(() => {
    async function listPizzas() {
      const response = await fetch("/pizzas.json");
      const data = await response.json();
      console.log(data);
      setPizzas(data);
    }
    listPizzas();
  }, []);

  return (
    <div className="App">
      <MyContext.Provider value={GlobalValue}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizzas/:id" element={<Pizzas />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
