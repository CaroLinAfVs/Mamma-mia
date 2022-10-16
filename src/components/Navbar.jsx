import { useContext } from "react";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";
import MyContext from "../Mycontext";

function Navbar() {
    const { count } = useContext(MyContext)
    return (
        <div className="Navbar">
            <p>
                <IoIosCart /> Pizzería Mamma Mia!
            </p>
            <div className="views">

                <Link to="/">Home</Link>{" "}
                <Link to="/carrito">
                    <IoIosCart /><p>$<span>{count}</span></p>
                </Link>
            </div>
        </div>
    );
}
export default Navbar;
