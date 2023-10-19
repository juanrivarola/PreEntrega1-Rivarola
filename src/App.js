import logo from './logo.svg';
import './App.css';
import './Components/ItemListContainer/ItemListContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import CartWidget from './Components/CartWidget/CartWidget';

function App() {
  return (
    <div className="App">
     
     <NavBar /> 
     
     <ItemListContainer greeting={'Bienvenidos a Shai'} />

    </div>
  );
}

export default App;
