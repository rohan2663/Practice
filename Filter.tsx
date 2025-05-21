import React, { useEffect, useState } from "react";

// Define a TypeScript interface for product type
interface Product {
  id: number;
  title: string;
  category: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("electronics");
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then((data: Product[]) => {
          const electronics = data.filter(p => p.category === "electronics");
          setProducts(electronics);
          localStorage.setItem("electronics", JSON.stringify(electronics));
        });
    }
  }, []);

  const handleRemove = (id: number) => {
    const updated = products.filter(product => product.id !== id);
    setProducts(updated);
    localStorage.setItem("electronics", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Electronics</h1>
      {products.map(product => (
        <div key={product.id} style={{ margin: 10, border: "1px solid #ccc", padding: 10 }}>
          <h3>{product.title}</h3>
          <button onClick={() => handleRemove(product.id)}>Remove</button>
        </div>
      ))}
      <p>Total displayed products: {products.length}</p>
    </div>
  );
};

export default App;
