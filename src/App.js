import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './myComponents/Nav';
import Home from './myComponents/Home';
import ProductDetails from './myComponents/ProductDetails';
import About from './myComponents/About';
import AddProduct from './myComponents/AddProduct';
import Buynow from './myComponents/Buynow';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Nav />
          <section>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products/:id' element={<ProductDetails />} />
              <Route path='/productEdit/:id' element={<AddProduct />} />
              <Route path='/addProduct' element={<AddProduct />} />
              <Route path='/about' element={<About />} />
              <Route path='/buynow' element={<Buynow />} />
            </Routes>
          </section>
        </main>
      </Router>
    </div>
  );
}

export default App;
