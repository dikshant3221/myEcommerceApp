import React, { useContext,useState,useEffect } from "react";
import { CardContext } from "../context/CardContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CardContext);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);

  // Function to generate random rating and reviews
  const generateRandomRatingAndReviews = () => {
    const randomRating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1); // Random rating between 3.5 and 5
    const randomReviews = Math.floor(Math.random() * (10000 - 500) + 500); // Random reviews between 500 and 10,000
    return { randomRating, randomReviews };
  };

  useEffect(() => {
    if (!product.rating || !product.reviews) {
      const { randomRating, randomReviews } = generateRandomRatingAndReviews();
      setRating(randomRating);
      setReviews(randomReviews);
    } else {
      setRating(product.rating);
      setReviews(product.reviews);
    }
  }, [product.rating, product.reviews]);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h3>{product.title}</h3>
        <div className="product-rating">
          {rating} ★ ({reviews} reviews)
        </div>
        <div className="product-price">
          ₹{product.price} <small>(M.R.P.: ₹{product.mrp})</small>
        </div>
        <p className="product-offer">{product.offer}</p>
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
