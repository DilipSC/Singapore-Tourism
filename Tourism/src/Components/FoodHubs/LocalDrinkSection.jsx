import React from "react";

const LocalDrinksSection = () => {
  const drinks = [
    {
      image: "https://i.ibb.co/Mh0Qx5t/Kopi-Coffee.jpg",
      title: "Kopi (Coffee)",
      description: "A rich, traditional coffee brewed with intense flavors.",
    },
    {
      image: "https://i.ibb.co/ySTCqv7/Sugar-Cane-Juice.jpg",
      title: "Sugar Cane Juice",
      description: "Refreshing juice extracted from fresh sugar cane.",
    },
    {
      image: "https://i.ibb.co/dg4s3rf/Teh-Tarik.jpg",
      title: "Teh Tarik",
      description: "Pulled tea with condensed milk, creating a frothy top.",
    },
    {
      image: "https://i.ibb.co/6XQjFnZ/barley.jpg",
      title: "Barley Water",
      description: "A soothing drink made from boiled barley, often sweetened.",
    },
    {
      image: "https://i.ibb.co/TYxfBfV/band.jpg",
      title: "Bandung",
      description: "A sweet drink made from rose syrup and milk.",
    },
  ];

  return (
    <section
      id="local-drinks"
      className="relative text-white py-16 px-6"
      style={{
        backgroundImage: "url('https://i.ibb.co/zZhkhqK/Whats-App-Image-2024-10-31-at-17-09-02.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Wrapper to layer content above the overlay */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">
          Refresh Yourself with Local Drinks
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Drink Cards */}
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden animate-slide-up transition-transform duration-500 transform hover:scale-105"
            >
              <img
                src={drink.image}
                alt={drink.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-4 text-center">
                <h3 className="text-xl font-semibold text-white">{drink.title}</h3>
                <p className="text-gray-300 mt-2">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalDrinksSection;
