import { useEffect, useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState();

  function getData() {
    setProducts(DataTransfer.data.product);
  }
  useEffect(() => {
    getData();
  }, []);
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Home & Kitchen" },
    { id: 1, name: "Electronics" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Home & Kitchen" },
    { id: 1, name: "Electronics" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Home & Kitchen" },
  ];

  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: "$499",
      image: "https://via.placeholder.com/100",
      categoryId: 1,
    },
    {
      id: 2,
      name: "Laptop",
      price: "$899",
      image: "https://via.placeholder.com/100",
      categoryId: 1,
    },
    {
      id: 1,
      name: "Smartphone",
      price: "$499",
      image: "https://via.placeholder.com/100",
      categoryId: 1,
    },
    {
      id: 2,
      name: "Laptop",
      price: "$899",
      image: "https://via.placeholder.com/100",
      categoryId: 1,
    },
    {
      id: 3,
      name: "T-shirt",
      price: "$25",
      image: "https://via.placeholder.com/100",
      categoryId: 2,
    },
    {
      id: 4,
      name: "Blender",
      price: "$50",
      image: "https://via.placeholder.com/100",
      categoryId: 3,
    },
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory)
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
              <p className="text-mute max-md:text-sm text-lg">
                The best online store
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
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  selectedCategory === category.id
                    ? "bg-primary text-white"
                    : " bg-background text-primary"
                }`}
              >
                {category.name}
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
                    alt={product.name}
                  />
                  <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.price}</p>
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
