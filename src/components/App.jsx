import './App.css';
import { ItemListContainer } from './Container/ItemListContainer';
import { ItemsDetailContainer } from './Detail/ItemsDetailContainer';
import NavBar from './NavBar/NavBar';




function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    <hr />
    <ItemsDetailContainer/>
    </>
  );
}

export default App;
