import React, { useEffect, useState, useRef} from "react";
import { doc, getDoc } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import "./Mainpage.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from "@material-tailwind/react";
import Chatbot from "../Chatbot/ChatBot";
import { signOut } from "firebase/auth"; // Import signOut from Firebase
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('city');
  const [userUid, setUserUid] = useState(null);
const [userEmail, setUserEmail] = useState("");
const [userFullName, setUserFullName] = useState("");
const navigate = useNavigate();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      setUserUid(user.uid);
      setUserEmail(user.email);

      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData && userData.fullname) {
            setUserFullName(userData.fullname);
          } else {
            console.error("Full name not found in user document.");
          }
        } else {
          // Document does not exist, you may want to create it
          console.error("User document does not exist. Creating a new one...");
          // Example to create a document
          await setDoc(userDocRef, { fullname: "Default Name" }); // Replace "Default Name" as needed
        }
      } catch (error) {
        console.error("Error fetching/creating user data:", error);
      }
    } else {
      setUserUid(null);
      setUserEmail("");
      setUserFullName("");
    }
  });

  return () => unsubscribe();
}, []);






  const LINKS = [
    {
      title: "Tourist Attraction",
      items: ["Architecture", "Beach", "Family & Fun", "Guide"],
    },
    {
      title: "Food Hub",
      items: ["Local Food Hubs", "Michelin Star Restaurants"],
    },
    
  ];
   
  const currentYear = new Date().getFullYear();
   

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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const events = [
    {
      name: 'Studio Ghibli Exhibition',
      dates: 'Oct 4, 2024 – Feb 2, 2025',
      details: 'Explore iconic scenes from Studio Ghibli films at the ArtScience Museum.',
      image: 'https://i.ibb.co/7JBMyvB/ghibliexhibit-main.jpg',
    },
    {
      name: 'Singapore River Festival',
      dates: 'Oct 4 – 13, 2024',
      details: 'Light shows and traditional games along the river.',
      image: 'https://i.ibb.co/W03J5bC/vibrant-river-festival.webp',
    },
    {
      name: 'Halloween Sail: The Sail of Souls',
      dates: 'Oct 26, 29-31, 2024',
      details: 'Spooky dinner cruise with haunted cabins.',
      image: 'https://i.ibb.co/4gMZ7YP/Halloween-Horror-Nights-Singapore-2022.jpg',
    },
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const reviews = [
        {
            id: 1,
            name: 'Alice Johnson',
            initials: 'A',
            color: 'bg-blue-500',
            review: '“This place was absolutely amazing! I loved every part of the experience and will definitely visit again.”',
            rating: 5
        },
        {
            id: 2,
            name: 'Bob Smith',
            initials: 'B',
            color: 'bg-green-500',
            review: '“Great place to visit with family! Loved the attractions and the scenery. Highly recommend.”',
            rating: 4
        },
        {
            id: 3,
            name: 'Charlie Davis',
            initials: 'C',
            color: 'bg-red-500',
            review: '“The tour was fantastic! Everything was organized perfectly. A must-visit!”',
            rating: 5
        }
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [reviews.length]);

    useEffect(() => {
        const updateSlider = () => {
            const slider = sliderRef.current;
            const slideWidth = slider.children[0].offsetWidth;
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        };

        updateSlider();
        window.addEventListener('resize', updateSlider);
        return () => window.removeEventListener('resize', updateSlider);
    }, [currentIndex]);

    const handleLogout = async () => {
      try {
        await signOut(auth);
        setUserUid(null);
        setUserEmail("");
        setUserFullName("");
        console.log("User signed out successfully");
        navigate("/"); // Navigate to the login page
      } catch (error) {
        console.error("Error signing out: ", error);
      }
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
            <div className="relative">
      {/* Check if userEmail is present */}
      {userEmail ? (
        <div className="relative">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center"
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle the dropdown
          >
            {userFullName || "Loading..."} {/* Display 'Loading...' if userFullName is not set */}
            <svg
              className={`w-4 h-4 ml-2 transition-transform ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && ( // Conditionally render the dropdown menu
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
              <ul className="py-1">
                <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  {userEmail}
                </li>
                <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Full Name: {userFullName}
                </li>
                <li
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                  onClick={handleLogout} // Logout functionality
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      )}
    </div>



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
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Guide
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
      <section className="relative h-screen bg-cover bg-center bg-gray-700 bg-blend-multiply" style={{ backgroundImage: "url('https://i.ibb.co/h7fx6rf/sig.jpg')" }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="px-4 mx-auto max-w-screen-xl text-white">
          {/* Heading with animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-4 transform transition duration-500 hover:scale-110 animate-fadeInUp">
            Singapore: The Future of Urban Living
          </h1>

          {/* Paragraph with animation */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:px-16 lg:px-48 transform transition duration-500 hover:scale-105 animate-fadeInUp delay-150">
            Singapore is a unique blend of cultures, where the East and West converge in harmony. As a multicultural hub, it is home to a rich tapestry of traditions from the Chinese, Malay, Indian, and Eurasian communities, each contributing to the vibrant national identity.
          </p>

          {/* Buttons with animation */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transform transition-transform duration-300 hover:scale-105"
            >
              Explore
              <svg
                className="w-4 h-4 ml-2 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
                aria-hidden="true"
              >
                <path
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 px-5 sm:ml-4 text-base font-medium text-white rounded-lg border border-white hover:bg-white hover:text-gray-900 focus:ring-4 focus:ring-gray-400 transform transition-transform duration-300 hover:scale-105"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
      </section>


      {/*Carousel and Info */}

      <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Section (Carousel) */}
      <div className="w-1/2 p-4 pt-20">
      <Slider {...settings} className="w-full h-full">
      <div>
        <img src="https://i.ibb.co/cF4T9h5/Whats-App-Image-2024-10-24-at-19-49-47-2.jpg" alt="Slide 1" className="w-full h-screen align-center object-cover" /> 
      </div>
      <div>
        <img src="https://i.ibb.co/p14vgpz/Whats-App-Image-2024-10-24-at-19-49-48.jpg" alt="Slide 2" className="w-full h-screen align-center object-cover" />
      </div>
      <div>
        <img src="https://i.ibb.co/sQcxMJy/Whats-App-Image-2024-10-24-at-19-49-47-1.jpg" alt="Slide 3" className="w-full h-screen align-center object-cover" />
      </div>
    </Slider>
      </div>

      {/* Right Section (Heading, Subheading, Description) */}
      <div className="w-1/2 flex flex-col justify-center p-10">
        <h1 className="text-4xl font-bold mb-4">Singapore: A Global City of Innovation and Culture</h1>
        <h2 className="text-2xl mb-4"><i>A Harmonious Blend of Tradition and Modernity</i></h2>
        <p className="text-lg">
        Singapore, often referred to as the "Lion City," is a dynamic global hub known for its rapid growth, cutting-edge innovation, and cultural diversity. Despite its small size, Singapore is a powerhouse in finance, technology, and trade, attracting businesses and tourists from around the world. 
        </p>
      </div>
    </div>



    {/*changing cards */}
    <div >

      

    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className='font-bold text-6xl text-center'>Things Yoy Must Do</h1>
      {/* Buttons */}
      <div className="flex justify-center mb-8 space-x-4 pt-16">
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
    </div>

    {/*Event list */}
    <div className='dark:bg-gray-900'>
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
      <h2 className="text-6xl font-bold text-center mb-8 text-white pb-10">Upcoming Events in Singapore</h2>

      <div className="flex flex-col md:flex-row justify-between items-center p-6">
      {/* Left section with text and link */}
      <div className="w-full md:w-1/2 text-left mb-6 md:mb-0 pb-10">
        <h1 className="text-4xl font-bold mb-2 text-white">Singapore Food Festival</h1>
        <p className="mb-4 text-white">
          Experience the vibrant food culture of Singapore at the Singapore Food Festival, featuring
          a variety of local dishes and culinary experiences.
        </p>
        <a 
          href="https://www.singaporefoodfestival.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline"
        >
          Learn More
        </a>
      </div>
      
      {/* Right section with image */}
      <div className="w-full md:w-1/2 overflow-hidden">
  <img
    src="https://i.ibb.co/F3MV79f/featured-image-781x429.jpg"
    alt="Singapore Food Festival"
    className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
  />
</div>

    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className={`transform transition-transform duration-500 ease-in-out shadow-lg rounded-lg overflow-hidden ${
              hoveredIndex === index ? 'scale-105 bg-gray-700 text-white' : 'dark:bg-gray-800 text-white'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
              <p className="text-gray-600">{event.dates}</p>
              <p className="mt-2">{event.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>

<div className="w-full dark:bg-gray-900  relative pt-6 px-6 pb-6">
            <div className="absolute inset-0 background-image opacity-30 dark:bg-gray-900"></div> 
            <div className="relative z-10 overflow-hidden dark:bg-gray-700 rounded-lg shadow-lg">
                <div id="slider" ref={sliderRef} className="flex transition-transform duration-500">
                    {reviews.map((review) => (
                        <div key={review.id} className="p-6 w-full flex-none">
                            <div className="flex items-center mb-3">
                                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-semibold`}>
                                    {review.initials}
                                </div>
                                <h3 className="ml-3 text-lg font-semibold text-white">{review.name}</h3>
                            </div>
                            <p className=" mb-3 text-white">{review.review}</p>
                            <div className="flex items-center text-yellow-400">
                                <span>{'⭐'.repeat(review.rating)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


   
    
     
       
        
        <footer className="relative w-full pt-6 dark:bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            Singapore Tourism
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Singapore Tourism</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>








      
     



<Chatbot/>



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