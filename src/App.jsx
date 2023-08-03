import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Home from './component/Home'
import Counter from "./component/counter.jsx";
import Footer from "./component/Footer.jsx";
import DataAwait from "./component/dataAwait.jsx";

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Home" element={<Footer/>}/>
                <Route path="/Footer" element={<Counter/>}/>
                <Route path="/Data" element={<DataAwait/>}/>
                <Route path="*" element={<h1>this is not a api call</h1>}/>
            </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
