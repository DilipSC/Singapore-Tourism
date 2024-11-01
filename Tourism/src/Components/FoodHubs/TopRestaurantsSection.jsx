import React from "react";

const TopRestaurantsSection = () => {
  const restaurants = [
    {
      image: "https://i.ibb.co/0s2VMsZ/pangium.jpg",
      name: "Pangium",
      link: "https://www.restaurantpangium.sg/",
    },
    {
      image: "https://i.ibb.co/SNh2kyq/Labyrinth.jpg",
      name: "Labyrinth",
      link: "https://www.restaurantlabyrinth.com/",
    },
    {
      image: "https://i.ibb.co/CB4Qw2s/Born.jpg",
      name: "Born",
      link: "https://restaurantborn.com/",
    },
    {
      image: "https://i.ibb.co/FJrsStF/Thevar.jpg",
      name: "Thevar",
      link: "https://thevar.sg/",
    },
    {
      image: "https://i.ibb.co/23Q49Gd/Odette.jpg",
      name: "Odette",
      link: "https://odette.sg/",
    },
    {
      image: "https://i.ibb.co/R3jkRf8/Zalora.jpg",
      name: "Zalora",
      link: "https://zalora.sg/",
    },
    {
      image: "https://i.ibb.co/wC3D1f4/Mikuni.jpg",
      name: "Mikuni",
      link: "https://mikuni.sg/",
    },
    {
      image: "https://i.ibb.co/0q2MY27/Les-Amis.jpg",
      name: "Les Amis",
      link: "https://lesamis.com.sg/",
    },
  ];

  return (
    <section id="top-restaurants" className="container mx-auto py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up text-white-600">
        Experience Fine Dining
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Restaurant Cards */}
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg h-64 overflow-hidden animate-slide-up hover-zoom transition-transform duration-500"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 flex flex-col justify-start h-full">
              <h3 className="text-2xl font-semibold text-green-600 mb-0">
                {restaurant.name}
              </h3>
              <a
                href={restaurant.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visit {restaurant.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRestaurantsSection;
