import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Require from './components/Require/Require';
import Service from './components/Service/Service';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/shipment' element={<Shipment></Shipment>}></Route>
        <Route path='inventory' element={
          <Require>
            <Inventory></Inventory>
          </Require>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={component=><p>404</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
