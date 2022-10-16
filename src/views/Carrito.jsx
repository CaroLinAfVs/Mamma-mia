
import { useContext } from "react"
import MyContext from "../Mycontext";

function Carrito() {
    const { carrito, count, setCount, setCarrito } = useContext(MyContext)


    function sumar(id) {
        const pizza = carrito.find((item) => item.id === id)
        const newPizza = { src: pizza.src, name: pizza.name, ingredients: pizza.ingredients, price: pizza.price, id: pizza.id, quantity: pizza.quantity + 1 }

        const newCart = carrito.filter((item) => item.id !== id)
        newCart.push(newPizza)
        setCarrito(newCart)

    }

    function restar(id) {
        const pizza = carrito.find((item) => item.id === id)
        if (pizza.quantity === 1) {
            const deleteCart = carrito.filter((item) => item.id !== id)
            setCarrito(deleteCart)
            return
        }

        const newPizza = { src: pizza.src, name: pizza.name, ingredients: pizza.ingredients, price: pizza.price, id: pizza.id, quantity: pizza.quantity - 1 }

        const newCart = carrito.filter((item) => item.id !== id)
        newCart.push(newPizza)
        setCarrito(newCart)
    }



    return (
        <div className="conteiner">
            <div className="listaCompra">
                <h5>Lista de compra:</h5>
                <div className="listaCarrito">
                    {carrito.map((product) => {
                        return <div className="pizaaAdded">
                            <img src={product.src} />
                            <p>{product.name}</p>
                            <div className="botones">
                                <p>${product.price * product.quantity}</p>
                                <button className="restar" onClick={() => restar(product.id)} >-</button>
                                <span>{product.quantity}</span>
                                <button className="sumar" onClick={() => sumar(product.id)}>+</button>
                            </div>
                        </div>
                    })}

                </div>
                <div><h3>Total: $<span>{count}</span></h3></div>

            </div>
        </div>
    );
}
export default Carrito;
