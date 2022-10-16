import { FaPizzaSlice } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import MyContext from "../Mycontext";
import Pizzas from "./Pizzas";

function Card({ src = "", name = "", ingredients = [], price = 0, id = "", key = 0 }) {
    const navigate = useNavigate();
    const { carrito, setCarrito } = useContext(MyContext)
    const goToPizzaDetail = () => {
        navigate(`./pizzas/${id}`);
    };

    return (
        <div key={key} className="cards">
            <div className="card">
                <img src={src} alt={name} />
                <h3>{name}</h3>
                <div className="Ingredients">
                    <p>Ingredientes:</p>
                    <ul className="listStyle">
                        {ingredients.map((ingredient) => {
                            return <li>{ingredient}</li>
                        })}
                    </ul>
                </div>
                <div className="shopping">
                    <h3>${price}</h3>
                    <div className="buttons">
                        <button onClick={goToPizzaDetail}>Ver mas</button>
                        <button onClick={() => {
                            if (!carrito.find((pizza) => pizza.id === id)) {
                                const newPizza = { quantity: 1, src, name, ingredients, price, id }
                                setCarrito([...carrito, newPizza]);
                            }

                        }}>
                            Agregar <IoIosCart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
