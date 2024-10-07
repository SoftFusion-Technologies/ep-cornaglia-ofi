import React from 'react';
import ProductCard from '../custom/ProductCard';
import grilla from '../Images/grilla.webp';

// HBO 
import joker1 from '../Images/HBO/Joker1.webp';
import wonder5 from '../Images/HBO/wonderWoman5.webp';
import little6 from '../Images/HBO/little6.webp';

// FUTBOL 
import messi1 from '../Images/Futbol/messiarg.webp';
import futarg from '../Images/Futbol/imgFut2.webp';
import messi3 from '../Images/Futbol/imgMessi3.webp';

// PARAMOUNT 
import paramount1 from '../Images/Paramount/topgun.webp';
import paramount2 from '../Images/Paramount/Aquiet.webp';
import paramount3 from '../Images/Paramount/Fallout3.webp';

import ProductCardSlider from './ProductCardSlider';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const HBOImages = () => {
  return (
    <div id="peliculas" className="py-16 bg-shellSilver max-w-full overflow-hidden">
      <div className="container mx-auto px-5">
        <h1
          className="text-center text-5xl font-bold text-gray-800"
          data-aos="fade-left"
        >
          SERVICIO DE TV
        </h1>
        <p
          className="text-center text-lg text-gray-600 mt-4"
          data-aos="fade-left"
        >
          CANALES DISPONIBLES
        </p>

        {/* Imagen centrada */}
        <div className="flex justify-center my-8">
          <img src={grilla} alt="Descripción de la imagen" className="max-w-full h-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md">
              <ProductCardSlider
                title="FÚTBOL"
                images={[
                  { src: messi1, alt: 'Argentina Messi' },
                  { src: futarg, alt: 'Boca river' },
                  { src: messi3, alt: 'Messi 3' },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md">
              <ProductCardSlider
                title="HBO"
                images={[
                  { src: joker1, alt: 'The Joker' },
                  { src: wonder5, alt: 'Mujer Maravilla' },
                  { src: little6, alt: 'Mujercitas' },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md">
              <ProductCardSlider
                title="PARAMOUNT"
                images={[
                  { src: paramount1, alt: 'paramount1' },
                  { src: paramount2, alt: 'paramount2' },
                  { src: paramount3, alt: 'paramount3' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HBOImages;
