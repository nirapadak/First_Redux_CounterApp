
import {useDispatch, useSelector} from "react-redux";
import {getFunction} from "../../redux/silce/input.js";
import Menu from "./menu.jsx";


const Home = () => {
    const dispatch = useDispatch();
    const myInput = useSelector((state)=>state.setCount.OneValue);

  return (
    <div>
        <Menu/>
        <h1>Counter Application</h1>
        <h1>{myInput}</h1>
        <button onMouseEnter={()=>dispatch(getFunction())}>Hover Now</button>
    </div>
  )
}

export default Home