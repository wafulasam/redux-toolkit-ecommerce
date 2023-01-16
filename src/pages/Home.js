import React from "react";
import NavigationTabs from "../components/navigationTabs";
import Counter from "../components/counter";
import Todo from "../components/todo";
import Shop from "../components/shop";
import Cart from "../components/cart";
import { useSelector } from "react-redux";

const Home = () => {
    const navigator = useSelector((state)=> state.navigationTabs.value);
    return (
        <div>
            <NavigationTabs/>
            { navigator === 'counter' ? <Counter/> : 
              navigator === 'todo' ? <Todo/> : 
              navigator === 'shop' ? <Shop/> :
              navigator === 'cart' ? <Cart/> :
              <p>click to navigate</p>
            }
        </div>
    )
}

export default Home;