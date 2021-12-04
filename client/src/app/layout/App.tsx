import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts([...products, 
      {
        id: 1,
        name: 'product3', 
        price: 300.00,
        brand: 'some brand',
        description: 'some description',
        type: 'some type',
        pictureUrl: 'http://picsim.photos/200',
        quantityInStock: 20
      }])
  }

  return (
    <>
      <Typography variant='h2'>WildHillsOutdoors</Typography>
      <Catalog products={products} addProduct={addProduct}/>
    </>
  );
}

export default App;
