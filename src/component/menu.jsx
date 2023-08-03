import {NavLink} from "react-router-dom";


const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={(isActive)=>isActive?"active":"pending"} to="/">Home</NavLink></li>
                <li><NavLink className={(isActive)=>isActive?"active":"pending"} to="/Home">Profile</NavLink></li>
                <li><NavLink className={(isActive)=>isActive?"active":"pending"} to="/Footer">Footer</NavLink></li>
                <li><NavLink className={(isActive)=>isActive?"active":"pending"} to="/Data">Data</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;