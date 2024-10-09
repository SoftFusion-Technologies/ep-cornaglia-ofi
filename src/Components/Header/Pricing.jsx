import React, {useState, useEffect} from "react";
import PricingCard from "../Cards/PricingCard";

const plans = [
    {
        plan: "30 MB + TV",
        price: "$28.000",
        
        mainFeature: "Servicio de hasta 30 MB",
        lastFeature: "2 meses de Paramount,",

        isMostPopular: false,
    },
    {
        plan: "50 MB + TV",
        price: "$28.700",

        mainFeature: "Servicio de hasta 50 MB",
        lastFeature: "2 meses de HBO + Paramount,",

        isMostPopular: false,
    },
    {
        plan: "100 MB + TV",
        price: "$30.200",
        
        mainFeature: "Servicio de hasta 100 MB",
        lastFeature: "2 meses de Fútbol + HBO,",

        isMostPopular: false,
    },
    {
        plan: "300 MB + TV",
        
        mainFeature: "Servicio de hasta 300 MB",
        lastFeature: "2 meses de Fútbol + HBO,",

        isMostPopular: false,
        zone: true
    }
]

const Pricing = () => {
    return (
      <div
        id="planes"
      >
        <div className="mt-10 max-w-xs w-full m-auto" data-aos="zoom-in">
          <h1 className="text-center text-5xl my-8 font-semibold">
            Planes y Servicios
          </h1>
          <p className="text-center text-xl semibold mb-4 px-4">
            Conoce nuestros planes diseñados para satisfacer las diferentes
            necesidades de velocidad y uso, sea en la ciudad o sus aledaños.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-wrap items-center justify-center md:max-w-screen-md xl:max-w-screen-2xl m-auto "
        >
          <PricingCard {...plans[0]}></PricingCard>
          <PricingCard {...plans[1]}></PricingCard>
          <PricingCard {...plans[2]}></PricingCard>
          <PricingCard {...plans[3]}></PricingCard>
        </div>
      </div>
    );
}

export default Pricing;