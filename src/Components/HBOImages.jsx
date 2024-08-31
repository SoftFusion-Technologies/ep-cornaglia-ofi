import React from 'react'
import ProductCard from '../custom/ProductCard';
import joker1 from '../Images/HBO/Joker1.webp';
import darknigth2 from '../Images/HBO/darkNigth2.webp';
import inception3 from '../Images/HBO/inception3.webp';
import elPadrino4 from '../Images/HBO/elPadrino.webp';
import wonder5 from '../Images/HBO/wonderWoman5.webp';
import little6 from '../Images/HBO/little6.webp';

// import '../styles/benefits.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const HBOImages = () => {
  return (
    <div id="peliculas" className="py-16 bg-shellSilver">
      <div className="container mx-auto px-5">
        <h1
          className="text-center text-5xl font-bold text-gray-800"
          data-aos="fade-left"
        >
          LAS MEJORES PELÍCULAS
        </h1>
        <p
          className="text-center text-lg text-gray-600 mt-4"
          data-aos="fade-left"
        >
          Te regalamos HBO y descubrí nuestra selección exclusiva de alta calidad.
        </p>

        {/* Primera fila de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          <div
            className="col-span-1 flex justify-center img-hover-zoom"
            data-aos="zoom-in"
          >
            <ProductCard
              image={joker1}
              title="The Joker"
            description="La historia de origen del villano más icónico de Gotham, explorando cómo Arthur Fleck se convierte en el Joker."/>
          </div>
           <div
            className="col-span-1 flex justify-center img-hover-zoom"
            data-aos="zoom-in"
          >
            <ProductCard
              image={darknigth2}
              title="El Caballero de la noche"
              description="Una batalla épica entre el bien y el mal, donde el implacable Joker pone a prueba los límites de Batman en una lucha por el alma de Gotham. ."
            />
          </div> 
          <div
            className="col-span-1 flex justify-center img-hover-zoom"
            data-aos="zoom-in"
          >
            <ProductCard
              image={inception3}
              title="Inception"
              description="Un viaje a lo más profundo de la mente humana en una historia de ciencia ficción tan fascinante como compleja."
            />
          </div>
        </div>

        {/* Segunda fila de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          <div
            className="col-span-1 flex justify-center img-hover-zoom"
            data-aos="zoom-in"
          >
            <ProductCard
              image={elPadrino4}
              title="El Padrino"
              description="Adéntrate en la historia de la familia Corleone y vive el ascenso al poder en el submundo criminal con una narrativa tan intensa como elegante."
            />
          </div>
           <div
            className="col-span-1 flex justify-center img-hover-zoom"
            data-aos="zoom-in"
          >
            <ProductCard
              image={wonder5}
              title="Mujer Maravilla"
              description="una princesa guerrera de las Amazonas, en su viaje desde una isla escondida hacia el mundo exterior durante la Primera Guerra Mundial."

            />
          </div>
          <div
            className="col-span-1 flex justify-center img-hover-zoom"
            data-aos="zoom-in"
          >
            <ProductCard
              image={little6}
              title="Mujercitas"
              description="Vive la conmovedora historia de las hermanas March, cuatro mujeres jóvenes que luchan por encontrar su lugar en el mundo mientras persiguen sus sueños y amores en una época de restricciones sociales."
            /> 
          </div>
        </div> 
      </div>
    </div>
  );
}

export default HBOImages