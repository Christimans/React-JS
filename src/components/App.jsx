import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './Container/ItemListContainer';
import { ItemsDetailContainer } from './Detail/ItemsDetailContainer';
import NavBar from './NavBar/NavBar';




function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:category' element={<ItemListContainer/>}/>
      <Route path='/detail/:id' element={<ItemsDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
