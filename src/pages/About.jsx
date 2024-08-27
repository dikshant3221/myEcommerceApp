import React, { useState, useEffect } from 'react';

const About = () => {
  // List of random image URLs
  const imageUrls = [
    'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=600&h=400&q=80'
  ];

  // State to hold the selected random image URL
  const [randomImage, setRandomImage] = useState('');

  // Select a random image when the component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setRandomImage(imageUrls[randomIndex]);
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row">
        <div className="col-lg-6">
          <img
            src={randomImage}
            alt="About us"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-6">
          <h2>Our Story</h2>
          <p>
            We started our e-commerce journey with a mission to provide quality
            products at affordable prices. From humble beginnings, we have grown
            into a platform that values customer satisfaction and seamless
            shopping experiences.
          </p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Wide range of high-quality products</li>
            <li>Fast and reliable delivery</li>
            <li>Easy returns and exchanges</li>
            <li>Customer-first approach</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
