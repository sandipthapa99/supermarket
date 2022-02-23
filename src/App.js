import React, {useState, useEffect} from 'react'
import Header from './components/Header';
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Offers from './pages/OffersPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/skdslider.css'
import Cart from './pages/Cart';
import About from './pages/About';
import SingleProduct from './components/SingleProduct';
import MomoPage from './pages/MomoPage';
import NoodlesPage from './pages/NoodlesPage';
import ChilliPage from './pages/ChilliPage';
import {ProductsContext} from './context/ProductsContext';
import SandwichPage from './pages/SandwichPage';
import RicePage from './pages/RicePage';
import PizzaPage from './pages/PizzaPage';
import ScroolTop from './components/ScroolTop';
import Profile from './pages/Profile';
import HealthyChoicePage from './pages/HealthyChoicePage';
import Search from './pages/Search';
import ForgotPass from './pages/ForgotPass';

function App() {

  var token = JSON.parse(window.localStorage.getItem('access_token'));
  const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://uat.ordering-boafresh.ekbana.net/api/v4/product", {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Warehouse-Id':'1'
                    
                }
            })
            .then(respose => {
                return respose.json();
            })
            .then(data=>{
                // console.log(data);
                setProducts(data.data);
                setLoading(false);
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
  return (
    <div>
    <Router>
    <ScroolTop/>
    <Header/>
    <Navigation/>
    <ProductsContext.Provider value={products}>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product/:productId' element={<SingleProduct/>}/>
      <Route path='/momo' element={<MomoPage/>}/>
      <Route path='/noodles' element={<NoodlesPage/>}/>
      <Route path='/chilli' element={<ChilliPage/>}/>
      <Route path='/sandwich' element={<SandwichPage/>}/>
      <Route path='/healthy%20choice' element={<HealthyChoicePage/>}/>
      <Route path='/rice' element={<RicePage/>}/>
      <Route path='/pizza' element={<PizzaPage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path="/search/:searchKey" element={<Search/>} />
      <Route path="forgot-password" element={<ForgotPass/>} />
    </Routes>
    </ProductsContext.Provider>
    <Footer/>
    <BottomFooter/>
    
    </Router>
    </div>
  );
}

export default App;
