import {useEffect, useState} from "react";
import Menu from "./menu.jsx";



const Footer = () => {

    const [data, setData]=useState();

    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
            .then(res=>res.json())
            .then(json=>setData(json));
    }, []);

    return (
        <div>
            <Menu/>
            <h6>{JSON.stringify(data)}</h6>
        </div>
    );
};

export default Footer;