import React from 'react';

const PricingCard = ({
    plan = "Ejemplo",
    price = "$000.00/mes",
    description = "Lore ipsum",
    featuresList = [1, 2, 3, 4],
    isMostPopular = false
}) => {
    return (
        <div className={`bg-gray-50 border border-gray-100 border-opacity-10 rounded-lg 
            shadow-xl my-8 max-w-80 ${
            isMostPopular ? "scale-105 transform z-10 bg-gray-200" : "scale-95 transform"
        }`}>
            <div className="text-3xl font-semibold">
                <h1 className='p-2'>{plan}</h1>
                <h2 className='p-2'>{price}</h2>
            </div>
            <div className='text-lg bg-gray-100 border-gray-200 border-opacity-10 rounded-lg shadow-xl py-4'>
                <p className='p-2'>{description}</p>
                <ul>
                    <li className='p-2'>&#128200; {featuresList[0]}</li>
                    <li className='p-2'>&#128201; {featuresList[1]}</li>
                    <li className='p-2'>&#128222; {featuresList[2]}</li>
                    <li className='p-2'>&#128220; {featuresList[3]}</li>
                </ul>
                <div className='flex justify-center items-center'>
                    <button className={`m-4 py-4 w-full bg-sky-200 rounded-xl text-2xl hover:bg-sky-300 
                    focus:ring-2 focus:ring-sky-400 ${
                        isMostPopular ? "bg-sky-400 hover:bg-fuchsia-400 focus:ring-2 focus:ring-sky-500" : null
                    }`}>Contratar</button>
                </div>
            </div>
        </div>
    )
}

export default PricingCard;