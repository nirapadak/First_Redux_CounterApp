import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../redux/silce/counter.js";
import Menu from "./menu.jsx";



const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector((state)=>state.counter.countingValue)

    return (
        <div>
            <Menu/>
            <h1 className="text-bg-success">{value}</h1>
            <button className="text-bg-success m-2" onClick={()=>dispatch(increment())}>Add</button>
            <button onMouseOver={()=>dispatch(decrement())}>Sub</button>
        </div>
    );
};

export default Counter;