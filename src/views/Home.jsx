import Card from "../components/Card";
import { useContext } from "react";
import MyContext from "../Mycontext";
import Banner from "../components/Banner";

function Home() {
    const state = useContext(MyContext);
    return (
        <div>
            <Banner />
            <div className="cards">
                {state.pizzas.map((item, i) => (
                    <Card
                        id={item.id}
                        key={i}
                        src={item.img}
                        name={item.name}
                        desc={item.desc}
                        ingredients={item.ingredients}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}
export default Home;
