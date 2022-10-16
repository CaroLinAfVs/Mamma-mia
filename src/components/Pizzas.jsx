import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import MyContext from "../Mycontext";

function Pizzas(ingredients) {
    const { id } = useParams();
    const { pizzas } = useContext(MyContext);

    const pizzaSelected = pizzas.find((pizza) => pizza.id === id);

    if (!pizzaSelected) return <h1>Cargando...</h1>

    return (
        <div className="description">
            <img src={pizzaSelected.img} />
            <div>
                <div>
                    <h3>{pizzaSelected.name}</h3>
                    <h6>{pizzaSelected.desc}</h6>
                </div>
                <div>
                    <ul className="listStyle">
                        {ingredients.map((ingredient) => {
                            return <li>{ingredient}</li>
                        })}
                    </ul>
                    <h5>{pizzaSelected.price}</h5>
                </div>
            </div>


        </div>
    );
}
export default Pizzas;
