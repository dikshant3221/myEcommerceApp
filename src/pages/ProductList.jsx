import React from "react";
import useFetchProducts from "../hooks/useFetchProducts.jsx";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts("https://fakestoreapi.com/products");  // Adjust API URL

  if (loading) return <Loader />;
  if (error) return <p>Error fetching products.</p>;

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
