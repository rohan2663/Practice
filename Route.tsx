import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './features/products/ProductList';
import About from './About';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Product App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
