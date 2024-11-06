import React from "react";
import { Link } from "react-router-dom";
import LocalDrinksSection from "./LocalDrinkSection";
import TopRestaurantsSection from "./TopRestaurantsSection";

const Navbar = () => (
  <nav className="bg-black bg-opacity-50 fixed top-0 left-0 right-0 z-50 py-4">
    <div className="container mx-auto flex justify-center items-center space-x-10">
      <a href="/home" className="text-white font-semibold text-lg hover:text-green-400 transition">Home</a>
      <a href="#local-foods" className="text-white font-semibold text-lg hover:text-green-400 transition">Local Foods</a>
      <a href="#local-drinks" className="text-white font-semibold text-lg hover:text-green-400 transition">Local Drinks</a>
      <a href="#top-restaurants" className="text-white font-semibold text-lg hover:text-green-400 transition">Top Restaurants</a>
      <a href="#contact" className="text-white font-semibold text-lg hover:text-green-400 transition">Contact</a>
    </div>
  </nav>
);

const HeroSection = () => (
    <section
    id="home"
    className="h-screen flex items-center justify-center text-center relative"
    style={{ paddingTop: "80px" }}
  >
    {/* First Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-fade"
      style={{
        backgroundImage: "url('https://i.ibb.co/CVtDXnn/Whats-App-Image-2024-10-31-at-12-39-40.jpg')",
        animationDelay: "2s",
      }}
    ></div>

    {/* Second Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-fade"
      style={{
        backgroundImage: "url('https://i.ibb.co/tZTbqFK/Whats-App-Image-2024-10-31-at-13-08-32.jpg')",
        animationDelay: "4s",
      }}
    ></div>

    {/* Dark Overlay for Readability */}
    <div className="absolute inset-0 bg-black opacity-60"></div>

    {/* Hero Content */}
    <div className="relative z-10 hero-text text-white p-6">
      <h1 className="text-5xl font-bold mb-4 animate-bounce">
        Dive into Singapore's Finest Flavors!
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Discover the heart of Singapore through its iconic dishes and drinks.
      </p>
      <Link
        to="#local-foods"
        className="bg-green-600 hover:bg-green-700 transition px-8 py-3 rounded-full text-white font-semibold"
      >
        Explore Local Flavors
      </Link>
    </div>
  </section>
);

const LocalFoodsSection = () => (
  <section id="local-foods" className="flex flex-col md:flex-row items-start md:items-center min-h-screen">
    <div className="w-full md:w-2/3 pr-8 mb-8 md:mb-0">
      <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">Our Beloved Local Foods</h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[
          { image: "https://i.ibb.co/THV66Pz/hainese.jpg", title: "Hainanese Chicken Rice", description: "Tender chicken served with aromatic rice and a flavorful sauce." },
          { image: "https://i.ibb.co/kQFg2GP/chilli.jpg", title: "Chilli Crab", description: "Savory, spicy crab dish loved by locals and tourists alike." },
          { image: "https://i.ibb.co/yP8G6XM/Char-Kway-Teow.jpg", title: "Char Kway Teow", description: "Stir-fried flat rice noodles with prawns, Chinese sausage, and bean sprouts." },
          { image: "https://i.ibb.co/6gDqLVD/Nasi-Lemak.jpg", title: "Nasi Lemak", description: "Fragrant rice cooked in coconut milk served with sambal, egg, and cucumber." },
          { image: "https://i.ibb.co/D912zZw/Kaya-Toast.jpg", title: "Kaya Toast", description: "Toasted bread spread with kaya (coconut jam) and butter, often served with eggs." },
          { image: "https://i.ibb.co/fMwT17x/Roti-Parata.jpg", title: "Roti Parata", description: "Flaky Indian-influenced flatbread served with curry." },
          { image: "https://i.ibb.co/SXstB2B/Laksa.jpg", title: "Laksa", description: "Spicy noodle soup with coconut milk, shrimp, and tofu puffs." },
          { image: "https://i.ibb.co/M2MJ6mr/Satay.jpg", title: "Satay", description: "Grilled skewers of marinated meat served with peanut sauce." },
        ].map((food, index) => (
          <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-slide-up hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-full md:w-64">
            <img src={food.image} className="w-full h-32 object-cover" loading="lazy" alt={food.title} />
            <div className="p-3">
              <h3 className="text-lg font-semibold">{food.title}</h3>
              <p className="text-gray-600 mt-1">{food.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
    <div className="w-full md:w-2/6 flex justify-center items-center mt-8 md:mt-0">
      <div className="bg-gray-100 bg-cover bg-center bg-no-repeat rounded-lg p-8 shadow-md border-l-4 border-yellow-500 fade-in" style={{ backgroundImage: "url('https://i.ibb.co/vQFjk2v/first.jpg')" }}>
        <p className="text-gray-700 leading-relaxed bg-opacity-75 bg-white p-4 rounded-lg">
          Singapore's food scene is a melting pot of cultures, offering a delightful array of flavors and dishes...
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-green-600 text-white py-8">
    <div className="container mx-auto text-center">
      <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
      <p className="mb-4">Questions? Reach us at: <a href="mailto:info@foodhubsg.com" className="underline">info@foodhubsg.com</a></p>
      <p className="text-sm">&copy; 2024 Food Hub SG. All Rights Reserved.</p>
    </div>
  </footer>
);

const FoodHubs = () => (
  <div className="bg-gray-100 text-gray-800 font-sans">
    <Navbar />
    <HeroSection />
    <LocalFoodsSection />
    <LocalDrinksSection/>
    <TopRestaurantsSection/>
    <Footer />
  </div>
);

export default FoodHubs;
