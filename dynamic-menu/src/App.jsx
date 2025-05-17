import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import bg from "./assets/bg.jpeg";
import {
  FaArrowLeft,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showContactTab, setShowContactTab] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch Data from API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.softpro.me/CustomersAPIs/1936173471/index.php"
        );
        const data = await response.json();
        setCategories(data.categories);
        setSelectedCategory(data.categories[0]?.idsubc); // Safely access first category
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => String(product.idSubC) === String(selectedCategory)
      )
    : products;

  return (
    <div className="w-full h-full flex items-center justify-center bg-background relative">
      <div className="bg-white h-full w-[32%] max-md:w-full rounded-lg flex flex-col shadow-lg border-2 border-primary overflow-y-auto">
        {/* Header Section */}
        <section className="w-full relative">
          <div className="w-full h-[10%] relative">
            <img
              className="w-full h-44 object-cover"
              src={bg}
              alt="Background"
            />
          </div>
          <div className="w-full pl-46 max-md:pl-32 py-2 flex justify-start relative items-start">
            <div className="border-8 border-border absolute overflow-hidden left-4 max-md:left-0 -top-20 w-32 h-32 rounded-full bg-white">
              <img
                className="w-full object-contain bg-secondary h-full"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="flex flex-col justify-start items-left gap-1">
              <h1 className="text-3xl max-md:text-xl font-bold text-primary">
                Gega Bite
              </h1>
              <p className="text-slate-600 text-sm font-bold">
                Welcome in our restaurant
              </p>
              <p className="text-sm mt-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="inline-flex text-primary my-auto mx-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                </svg>
                <strong className="text-primary">Open Time: </strong>
                <span>(8 am - 3 pm)</span> <span> (7 pm - 12 am)</span>
              </p>
            </div>
          </div>
        </section>

        {/* Main Section Toggle */}
        {showContactTab ? (
          <section className="w-full px-4 py-3 border-t border-b bg-gray-50">
            <h2 className="text-xl font-semibold text-primary mb-2">
              <button onClick={() => setShowContactTab(false)}>
                <FaArrowLeft className="inline-block mr-2" />
              </button>
              Contact Us
            </h2>
            <p className="text-sm text-gray-700 mb-1 flex items-center gap-2">
              <FaPhone className="text-primary" />
              <strong>Phone:</strong>
              <a href="tel:+961123456" className="text-blue-600 underline">
                +961 123 456
              </a>
            </p>

            <p className="text-sm text-gray-700 mb-1 flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <strong>Email:</strong>
              <a
                href="mailto:restgegabite11@gmail.com"
                className="text-blue-600 underline"
              >
                restgegabite11@gmail.com
              </a>
            </p>

            <p className="text-sm text-gray-700 mb-1 flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <strong>Location:</strong> Menieh, Lebanon
            </p>

            <div className="flex gap-4 mt-3 mb-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 underline"
              >
                <FaFacebook />
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-600 underline"
              >
                <FaInstagram />
                Instagram
              </a>
            </div>
            <div className="w-full h-48 my-2">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2997484561825!2d35.5018!3d33.8886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f170d48e5dbab%3A0xd60e5753efc577f0!2sBeirut!5e0!3m2!1sen!2slb!4v1687777777777"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent!");
              }}
              className="flex flex-col gap-2"
            >
              <input
                type="text"
                placeholder="Your name"
                className="p-2 border rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Your email"
                className="p-2 border rounded-md"
                required
              />
              <textarea
                placeholder="Your message"
                className="p-2 border rounded-md"
                rows={3}
                required
              />
              <button
                type="submit"
                className="bg-primary text-white py-2 rounded-md hover:bg-opacity-80"
              >
                Send Message
              </button>
            </form>
          </section>
        ) : (
          <section className="w-full flex flex-col p-4">
            {/* Categories */}
            <div className="w-full overflow-x-auto whitespace-nowrap flex gap-4 pb-3 border-border border-b remove-scroll-bar">
              {categories.map((category) => (
                <button
                  key={category.idsubc}
                  onClick={() => setSelectedCategory(category.idsubc)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    selectedCategory === category.idsubc
                      ? "bg-primary text-white"
                      : "bg-background text-primary"
                  }`}
                >
                  {category.description}
                </button>
              ))}
            </div>

            {/* Products */}
            <div className="w-full grid grid-cols-2 gap-4 mt-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-100 p-3 rounded-lg shadow-sm flex flex-col items-center"
                  >
                    <img
                      className="w-20 h-20 object-cover rounded-md"
                      src={product.image}
                      alt={product.description}
                    />
                    <h3 className="text-sm font-semibold mt-2">
                      {product.description}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {product.price1} {product.currency}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-2">
                  No products available
                </p>
              )}
            </div>
          </section>
        )}
      </div>

      {/* Floating Contact Button */}
      <button
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-all"
        onClick={() => setShowContactTab((prev) => !prev)}
      >
        {showContactTab ? <FaX /> : <FaPhone />}
      </button>
    </div>
  );
}

export default App;
