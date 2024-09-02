import React, {useState, useEffect} from "react";
import PricingCard from "../Cards/PricingCard";

const plans = [
    {
        plan: "30 MB + TV",
        price: "$25.000",
        
        mainFeature: "Servicio de hasta 30 MB",

        isMostPopular: false,
        contract: "+ Paramount"
    },
    {
        plan: "50 MB + TV",
        price: "$25.700",

        mainFeature: "Servicio de hasta 50 MB",
        
        isMostPopular: true,
        contract: "+ HBO + Paramount"
    },
    {
        plan: "100 MB + TV",
        price: "$27.200",
        
        mainFeature: "Servicio de hasta 100 MB",

        isMostPopular: false,
        contract: "+ Fútbol + HBO"
    }
]

const Pricing = () => {
    return (
      <div
        id="planes"
      >
        <div className="mt-10 max-w-xl m-auto" data-aos="zoom-in">
          <h1 className="text-center text-5xl my-8 font-semibold">
            Planes y Servicios
          </h1>
          <p className="text-center text-xl semibold mb-4">
            Conoce nuestros planes diseñados para satisfacer las diferentes
            necesidades de velocidad y uso, sea en la ciudad o sus aledaños.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-wrap items-center justify-center max-w-5xl m-auto"
        >
          <PricingCard {...plans[0]}></PricingCard>
          <PricingCard {...plans[1]}></PricingCard>
          <PricingCard {...plans[2]}></PricingCard>
        </div>
      </div>
    );
}

export default Pricing;