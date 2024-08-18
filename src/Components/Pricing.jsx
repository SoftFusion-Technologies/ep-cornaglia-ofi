import React, {useState, useEffect} from "react";
import PricingCard from "./PricingCard";

const plans = [
    {
        plan: "Base",
        price: "$24.499,00/mes",
        description: "Ideal para personas que navegan por internet de forma básica.",
        featuresList: [
            "Hasta 15 MBps de Subida",
            "Hasta 3 MBps de Bajada",
            "Soporte Técnico Recurrente",
            "Sin Mínimo de Permanencia"
        ],
        isMostPopular: false
    },
    {
        plan: "Intermedio",
        price: "$34.499,00/mes",
        description: "Perfecto para hogares con uso regular y compartido de internet.",
        featuresList: [
            "Hasta 50 MBps de Subida",
            "Hasta 8 MBps de Bajada",
            "Soporte Técnico Prioritario",
            "Contrato de 12 Meses"
        ],
        isMostPopular: true
    },
    {
        plan: "Avanzado",
        price: "$69.999,00/mes",
        description: "Necesidades de alta velocidad y múltiples dispositivos.",
        featuresList: [
            "Hasta 100 MBps de Subida",
            "Hasta 20 MBps de Bajada",
            "Soporte Técnico 24/7",
            "Sin Contrato Obligatorio"
        ],
        isMostPopular: false
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