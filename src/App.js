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
import Offers from './components/Offers';
import Gourmet from './pages/Gourmet';
import PackagedFoods from './pages/PackagedFoods';
import Groceries from './pages/Groceries';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/skdslider.css'
import HouseHold from './pages/Household';

function App() {
  return (
    <div>
    <Router>
    <Header/>
    <Navigation/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/gourmet' element={<Gourmet/>}/>
      <Route path='/packagedfoods' element={<PackagedFoods/>}/>
      <Route path='/groceries' element={<Groceries/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/household' element={<HouseHold/>}/>
    </Routes>
    <Footer/>
    <BottomFooter/>
    </Router>
    </div>
  );
}

export default App;
