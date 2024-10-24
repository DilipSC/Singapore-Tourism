import React, { useEffect, useState } from "react";
import "./Mainpage.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('city');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener on component unmount
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="font-poppins">
      {/* Navbar */}
      <section>
        <nav
          id="navbar"
          className={`fixed w-full z-20 top-0 start-0 border-b border-gray-200 transition-all duration-300 ${
            isScrolled
              ? "bg-white dark:bg-gray-900 shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://i.ibb.co/bJVZLtC/waving-flag-singapore-template-7505-173.jpg"
                className="h-8 size-8 w-12"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Singapore Tourism
              </span>
            </a>

            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Food Hubs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Tourist Attraction
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* Hero Section */}
      <section>
        <section className="bg-cover bg-center bg-[url('https://i.ibb.co/h7fx6rf/sig.jpg')] bg-gray-700 bg-blend-multiply h-full">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Singapore: The Future of Urban Living
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Singapore is a unique blend of cultures, where the East and West converge in harmony. As a multicultural hub, it is home to a rich tapestry of traditions from the Chinese, Malay, Indian, and Eurasian communities, each contributing to the vibrant national identity.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Explore
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
      </section>


      {/*Carousel and Info */}

      <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Section (Carousel) */}
      <div className="w-1/2 p-4">
      <Slider {...settings} className="w-full h-full">
      <div>
        <img src="https://via.placeholder.com/500x300" alt="Slide 1" className="w-full h-full object-cover" />
      </div>
      <div>
        <img src="https://via.placeholder.com/500x300" alt="Slide 2" className="w-full h-full object-cover" />
      </div>
      <div>
        <img src="https://via.placeholder.com/500x300" alt="Slide 3" className="w-full h-full object-cover" />
      </div>
    </Slider>
      </div>

      {/* Right Section (Heading, Subheading, Description) */}
      <div className="w-1/2 flex flex-col justify-center p-10">
        <h1 className="text-4xl font-bold mb-4">Singapore: A Global City of Innovation and Culture</h1>
        <h2 className="text-2xl mb-4">A Harmonious Blend of Tradition and Modernity</h2>
        <p className="text-lg">
        Singapore, often referred to as the "Lion City," is a dynamic global hub known for its rapid growth, cutting-edge innovation, and cultural diversity. Despite its small size, Singapore is a powerhouse in finance, technology, and trade, attracting businesses and tourists from around the world. The city-state seamlessly blends modern skyscrapers with lush greenery and rich cultural heritage, offering a unique experience where tradition meets the future. Whether it's the vibrant food scene, iconic landmarks like Marina Bay Sands, or the efficiency of its public services, Singapore continues to impress as a city of the future.
        </p>
      </div>
    </div>



    {/*changing cards */}

    <div className="min-h-screen bg-gray-900 text-white p-10">
      {/* Buttons */}
      <div className="flex justify-center mb-8 space-x-4">
        {['city', 'nature', 'architecture', 'dine', 'heritage', 'family'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-2xl ${
              selectedCategory === category ? 'bg-blue-500' : 'bg-gray-700'
            } hover:bg-blue-500 transition-colors duration-300`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data[selectedCategory].map((item, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Display Image */}
        <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4" />
    
        {/* Display Title and Description */}
        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
        <p>{item.description}</p>
      </div>
))}
      </div>
    </div>

    {/*Event list */}




      
     







    </div>
  





  );
};

const data = {
  city: [
    {
      title: 'Vibrant City Life',
      description: 'Explore Singapore’s bustling city life, filled with modern skyscrapers and exciting nightlife.',
      image:"https://i.ibb.co/tZJTJMt/Whats-App-Image-2024-10-24-at-20-13-02-1.jpg",
    },
    {
      title: 'Marina Bay Sands',
      description: 'An iconic landmark offering breathtaking views of the city skyline.',
      image:"https://i.ibb.co/Cs5STKw/Whats-App-Image-2024-10-24-at-20-17-12.jpg",
    },
    {
      title: 'Clarke Quay',
      description: 'A riverside quay filled with vibrant restaurants and bars.',
      image:"https://i.ibb.co/NsBth0Z/Whats-App-Image-2024-10-24-at-20-21-17.jpg",
    },
  ],
  nature: [
    {
      title: 'Gardens by the Bay',
      description: 'A futuristic garden in the heart of the city, featuring Supertree Groves and flower domes.',
      image:"https://i.ibb.co/JRJ5Y8W/Whats-App-Image-2024-10-24-at-20-23-38.jpg",
    },
    {
      title: 'Botanic Gardens',
      description: 'A UNESCO World Heritage Site, perfect for a peaceful stroll.',
      image:"https://i.ibb.co/sV78n62/Whats-App-Image-2024-10-24-at-20-24-44.jpg",
    },
    {
      title: 'Pulau Ubin',
      description: 'An island offering a glimpse of Singapore’s past, with lush greenery and wildlife.',
      image:"https://i.ibb.co/fGF6y9D/Whats-App-Image-2024-10-24-at-20-26-25.jpg",
    },
  ],
  architecture: [
    {
      title: 'Marina Bay Sands',
      description: 'A world-renowned architectural marvel and symbol of modern Singapore.',
      image:"https://i.ibb.co/Cs5STKw/Whats-App-Image-2024-10-24-at-20-17-12.jpg",
    },
    {
      title: 'The Esplanade',
      description: 'A striking waterfront theatre complex known for its unique dome structure.',
      image:"https://i.ibb.co/MMwQ6mn/Whats-App-Image-2024-10-24-at-20-27-44.jpg",
    },
    {
      title: 'The Helix Bridge',
      description: 'A pedestrian bridge inspired by the double helix DNA structure.',
      image:"https://i.ibb.co/MpLRcfS/Whats-App-Image-2024-10-24-at-20-28-32.jpg",
    },
  ],
  dine: [
    {
      title: 'Hawker Centers',
      description: 'Savor affordable and authentic local delicacies like Hainanese Chicken Rice.',
      image:"https://i.ibb.co/bvBKGQx/Whats-App-Image-2024-10-24-at-20-29-28.jpg",
    },
    {
      title: 'Fine Dining',
      description: 'Experience Michelin-starred restaurants offering exquisite cuisine.',
      image:"https://i.ibb.co/GVj0jPj/Whats-App-Image-2024-10-24-at-20-30-34.jpg",
    },
    {
      title: 'Chinatown',
      description: 'Discover a mix of traditional and modern eateries serving Chinese delicacies.',
      image:"https://i.ibb.co/CMSXQgp/Whats-App-Image-2024-10-24-at-20-31-42.jpg",
    },
  ],
  heritage: [
    {
      title: 'Chinatown Heritage Center',
      description: 'A museum showcasing the history of Chinese immigrants in Singapore.',
      image:"https://i.ibb.co/WV6PT4T/Whats-App-Image-2024-10-24-at-20-32-34.jpg",
    },
    {
      title: 'Kampong Glam',
      description: 'Explore Malay culture and heritage in this vibrant neighborhood.',
      image:"https://i.ibb.co/jz3k502/Whats-App-Image-2024-10-24-at-20-33-25.jpg",
    },
    {
      title: 'Little India',
      description: 'Experience the rich cultural traditions of Singapore’s Indian community.',
      image:"https://i.ibb.co/fX7Mg4F/Whats-App-Image-2024-10-24-at-20-34-19.jpg",
    },
  ],
  family: [
    {
      title: 'Universal Studios Singapore',
      description: 'Enjoy a fun-filled day with rides, shows, and attractions for all ages.',
      image:"https://i.ibb.co/7bxzDhS/Whats-App-Image-2024-10-24-at-20-35-14.jpg",
    },
    {
      title: 'Singapore Zoo',
      description: 'An award-winning zoo offering a unique wildlife experience.',
      image:"https://i.ibb.co/N3SdTMv/Whats-App-Image-2024-10-24-at-20-36-22.jpg",
    },
    {
      title: 'Sentosa Island',
      description: 'A resort island packed with family-friendly activities and attractions.',
      image:"https://i.ibb.co/Jkj68QH/Whats-App-Image-2024-10-24-at-20-37-41.jpg",
    },
  ],
};



export default Homepage;