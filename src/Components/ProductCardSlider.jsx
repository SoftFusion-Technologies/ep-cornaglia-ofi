import React, { useState, useEffect } from 'react';
import '../Styles/ProductCardSlider.css'; // Asegúrate de que este archivo tenga los estilos actualizados

const ProductCardSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="product-card-slider">
      <div className="slider-header">
        <h2 className="slider-title">{title}</h2>
      </div>
      <div className="slider-container">
        <button className="slider-button prev" onClick={handlePrev}>
          ‹
        </button>
        <div className="slider">
          <div
            className="slider-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div className="slide" key={index}>
                <img src={image.src} alt={image.alt} className="slide-image" />
              </div>
            ))}
          </div>
        </div>
        <button className="slider-button next" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
};

export default ProductCardSlider;
