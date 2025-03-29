import { useEffect, useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

 // Fetch Data from API
 useEffect(() => {

  async function fetchData() {
    try {
      const response = await fetch("https://api.softpro.me/CustomersAPIs/1936173471/");
      const data = await response.json();
      console.log(data)

      setCategories(data.categories);
      setProducts(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();
}, []);

  
const filteredProducts = selectedCategory
? products.filter((product) => String(product.idSubC) === String(selectedCategory))
: products;


  return (
    <div className="w-full h-full flex items-center justify-center bg-background relative">
      <div className="bg-white h-full w-[32%] max-md:w-full rounded-lg flex flex-col shadow-lg">
        {/* Header Section */}
        <section className="w-full max-md:h-[33%] h-[48%]">
          <div className="w-full h-[60%] relative">
            <img
              className="w-full h-full object-cover"
              src="https://albaba.softpro.me/static/media/back.2da3ab7220d1529fe02e.jpeg"
              alt="Background"
            />
          </div>
          <div className="w-full pl-46 h-[40%] py-2 flex justify-start relative items-start">
            <div className="border-8 border-border absolute overflow-hidden left-4 max-md:left-0 -top-20 w-40 h-40 rounded-full bg-white">
              <img
                className="w-full object-contain bg-secondary h-full"
                src="https://albaba.softpro.me/static/media/logo.a0dd175fa690fa3f589f.jpg"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col justify-start items-left gap-1">
              <h1 className="text-3xl max-md:text-xl font-bold text-primary">
                Albaba
              </h1>
              
              <p className="text-slate-600 text-sm font-bold">
                The best online store
              </p>
              <p className="text-sm mt-1">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="inline-flex text-[#A17860] my-auto mx-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
                <strong class="  text-[#A17860]">Open Time: </strong>
                <span>(8 am - 3 pm)</span>
                <span> (7 pm - 12 am)</span>
                </p>
            </div>
          </div>
        </section>

        {/* Categories & Products Section */}
        <section className="w-full h-[52%] flex flex-col p-4">
          {/* Category Slider */}
          <div className="w-full overflow-x-auto whitespace-nowrap flex gap-4 pb-3 border-border border-b remove-scroll-bar">
            {categories.map((category) => (
              <button
                key={category.idsubc}
                onClick={() => setSelectedCategory(category.idsubc)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  selectedCategory === category.idsubc
                    ? "bg-primary text-white"
                    : " bg-background text-primary"
                }`}
              >
                {category.description}
              </button>
            ))}
          </div>

          {/* Product List */}
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
                  <h3 className="text-sm font-semibold mt-2">{product.description}</h3>
                  <p className="text-xs text-gray-500">{product.price1} {product.currency}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-2">
                No products available
              </p>
            )}
          </div>
        </section>
      </div>

      {/* Floating Contact Button */}
      <button
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-all"
        onClick={() => setIsModalOpen(true)}
      >
        📞
      </button>

      {/* Contact Info Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-80 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold text-primary mb-4">
              Contact Info
            </h2>
            <p className="text-gray-700">
              📍 <strong>Location:</strong> Beirut, Lebanon
            </p>
            <p className="text-gray-700">
              📞 <strong>Phone:</strong> +961 123 456
            </p>
            <p className="text-gray-700">
              ✉️ <strong>Email:</strong> contact@albaba.com
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
