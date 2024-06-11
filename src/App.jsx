import { Routes,Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Catalog } from "./Components/Catalog";
import { Clients } from "./Components/Clients/Clients.jsx";
import './index.js'

export const  App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Catalog/>}></Route>
      <Route path="/Clients" element={<Clients/>}></Route>
    </Routes>
    </>
  );
}

export default App;
