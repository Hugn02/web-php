
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginPopup from './Pages/LoginPopup';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import { useState } from 'react';
import PlaceShipping from './Components/PlaceShipping/PlaceShipping';
import NewCollections from './Components/NewCollections/NewCollections';
import Popular from './Components/Popular/Popular';


function App() {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div>
      <BrowserRouter>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/inera' element={<ShopCategory banner={men_banner} category="inera"/>}/>
        <Route path='/motornuclear' element={<ShopCategory banner={women_banner} category="motornuclear"/>}/>
        <Route path='/moshow' element={<ShopCategory banner={kid_banner} category="moshow"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/shipping' element={<PlaceShipping/>}/>
      </Routes>
      <Routes>
      <Route path="/newcollections" element={<NewCollections />} />
      <Route path="/populars" element={<Popular />} />
      
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
