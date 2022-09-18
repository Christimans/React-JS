import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./Container/ItemListContainer";
import {CarritoProvider} from "./Context/CarritoContexts";
import { ItemsDetailContainer } from "./Detail/ItemsDetailContainer";
import NavBar from "./NavBar/NavBar";
import { CartContainer } from "./Cart/CartContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemsDetailContainer />} />
            <Route path="/Cart" element={<CartContainer/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
