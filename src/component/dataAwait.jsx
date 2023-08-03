import {useEffect, useState} from "react";
import Menu from "./menu.jsx";


const DataAwait = () => {

    const [data, setData] = useState();

    useEffect(() => {
        (async ()=>{
           const response = await fetch('https://dummyjson.com/products')
            let json = await response.json()
            setData(json)
        })()
    }, []);


    return (
        <div>
            <Menu/>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default DataAwait;