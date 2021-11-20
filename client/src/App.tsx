import { useEffect, useState } from "react";


function App() {
  const [products, setProducts] = useState([
    {name:'product1', price: 100.00},
    {name:'product2', price: 200.00}
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts([...products, {name: 'product3', price: 300.00}])
  }

  return (
    <div className="App">
      <h1>WildHillsOutdoors</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
