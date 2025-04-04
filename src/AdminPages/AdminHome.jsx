import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import AdminNav from "./AdminNav"
import Foot from "../UserPages/Foot";

export default function AdminHome() {
  // Initial Products
  const [products, setProducts] = useState([
    {
      title: "Gold Necklace",
      price: "2999",
      description: "Beautiful 24K gold necklace.",
      image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6751.png",
    },
    {
      title: "Diamond Ring",
      price: "4999",
      description: "Elegant diamond-studded ring.",
      image: "https://tse3.mm.bing.net/th?id=OIP.fdUW6d4G3FENYASdDUDQQQHaHG&pid=Api&P=0&h=180",
    },
    {
        "title": "Gold Necklace",
        "price": "2999",
        "description": "Beautiful 24K gold necklace.",
        "image": "https://pngimg.com/uploads/jewelry/jewelry_PNG6751.png"
      },
      {
        "title": "Diamond Ring",
        "price": "4999",
        "description": "Elegant diamond-studded ring.",
        "image": "https://tse3.mm.bing.net/th?id=OIP.fdUW6d4G3FENYASdDUDQQQHaHG&pid=Api&P=0&h=180"
      },
      {
        "title": "Silver Bangles",
        "price": "1999",
        "description": "Pure silver designer bangles.",
        "image": "https://tse1.mm.bing.net/th?id=OIP.R0LHEllQEOu2y2uwrv9arwHaGw&pid=Api&P=0&h=180"
      },
      {
        "title": "Ruby Pendant",
        "price": "3499",
        "description": "Gorgeous ruby-studded pendant.",
        "image": "https://pngimg.com/uploads/jewelry/jewelry_PNG6750.png"
      },
      {
        "title": "Sapphire Earrings",
        "price": "2599",
        "description": "Beautiful sapphire gemstone earrings.",
        "image": "https://freepngimg.com/download/jewellery/28086-8-jewellery-necklace-image.png"
      },
      {
        "title": "Pearl Necklace",
        "price": "3999",
        "description": "Elegant pearl necklace for special occasions.",
        "image": "https://pngimg.com/uploads/pearl_necklace/pearl_necklace_PNG41.png"
      },
      {
        "title": "Rose Gold Hoop Earrings",
        "price": "2799",
        "description": "Trendy rose gold hoop earrings for everyday wear.",
        "image": "https://pngimg.com/uploads/earrings/earrings_PNG65.png"
      },
      {
        "title": "Black Pearl Necklace",
        "price": "5999",
        "description": "Exotic black pearl necklace with silver chain.",
        "image": "https://pngimg.com/uploads/pearl_necklace/pearl_necklace_PNG42.png"
      },
      {
        "title": "Amethyst Pendant",
        "price": "3499",
        "description": "Elegant amethyst pendant with sterling silver chain.",
        "image": "https://pngimg.com/uploads/jewelry/jewelry_PNG6761.png"
      },
      {
        "title": "Cubic Zirconia Bracelet",
        "price": "1899",
        "description": "Shiny cubic zirconia bracelet for a stylish look.",
        "image": "https://pngimg.com/uploads/jewelry/jewelry_PNG6763.png"
      },
      {
        "title": "Gold Stud Earrings",
        "price": "1999",
        "description": "Classic gold stud earrings for timeless elegance.",
        "image": "https://pngimg.com/uploads/earrings/earrings_PNG64.png"
      },
      {
        "title": "Garnet Cocktail Ring",
        "price": "4599",
        "description": "A bold garnet gemstone ring with gold accents.",
        "image": "https://pngimg.com/uploads/ring/ring_PNG10697.png"
      },
      {
        "title": "Silver Toe Rings",
        "price": "1299",
        "description": "Beautiful handcrafted silver toe rings.",
        "image": "https://pngimg.com/uploads/jewelry/jewelry_PNG6762.png"
      },
      {
        "title": "Infinity Symbol Necklace",
        "price": "3299",
        "description": "Delicate infinity symbol necklace in sterling silver.",
        "image": "https://pngimg.com/uploads/necklace/necklace_PNG61.png"
      },
      {
        "title": "Vintage Pearl Brooch",
        "price": "2499",
        "description": "A beautiful vintage pearl brooch with gold detailing.",
        "image": "https://pngimg.com/uploads/jewelry/jewelry_PNG6765.png"
      },
      {
        "title": "Swarovski Crystal Ring",
        "price": "3799",
        "description": "A dazzling Swarovski crystal-studded ring.",
        "image": "https://pngimg.com/uploads/ring/ring_PNG10693.png"
      },
      {
        "title": "Platinum Wedding Ring",
        "price": "5999",
        "description": "A stunning platinum wedding band.",
        "image": "https://tse1.mm.bing.net/th?id=OIP.AkKjQEn7OhKI6RLlUlLTzAHaFp&pid=Api&P=0&h=180"
      },
      {
        "title": "Emerald Bracelet",
        "price": "2899",
        "description": "Exquisite emerald gemstone bracelet.",
        "image": "https://pngimg.com/uploads/jewelry/jewelry_PNG6760.png"
      },
      {
        "title": "Antique Gold Earrings",
        "price": "3499",
        "description": "Traditional antique gold earrings.",
        "image": "https://pngimg.com/uploads/earrings/earrings_PNG58.png"
      },
      {
        "title": "Crystal Stud Earrings",
        "price": "1499",
        "description": "Chic crystal stud earrings for daily wear.",
        "image": "https://pngimg.com/uploads/earrings/earrings_PNG61.png"
      },
      {
        "title": "Diamond Tennis Bracelet",
        "price": "6999",
        "description": "Luxury diamond tennis bracelet.",
        "image": "https://pngimg.com/uploads/jewelry/jewelry_PNG6753.png"
      },
      {
        "title": "Gold Anklet",
        "price": "1799",
        "description": "Delicate gold anklet for a trendy look.",
        "image": "https://pngimg.com/uploads/jewelry/jewelry_PNG6756.png"
      },
      {
        "title": "Platinum Chain",
        "price": "4499",
        "description": "Stylish platinum chain for men and women.",
        "image": "https://pngimg.com/uploads/jewelry/jewelry_PNG6759.png"
      },
      {
        "title": "Sapphire and Diamond Ring",
        "price": "7999",
        "description": "A luxurious sapphire ring with diamond accents.",
        "image": "https://pngimg.com/uploads/ring/ring_PNG10689.png"
      },
      {
        "title": "Turquoise Beaded Necklace",
        "price": "2599",
        "description": "Handmade turquoise beaded necklace.",
        "image": "https://pngimg.com/uploads/necklace/necklace_PNG49.png"
      },
      {
        "title": "Traditional Temple Jewelry Set",
        "price": "5499",
        "description": "Authentic Indian temple jewelry set.",
        "image": "https://pngimg.com/uploads/necklace/necklace_PNG53.png"
      },
      {
        "title": "Gold Choker Necklace",
        "price": "3299",
        "description": "Trendy gold choker for a bold statement.",
        "image": "https://pngimg.com/uploads/necklace/necklace_PNG63.png"
      },
      {
        "title": "Opal Engagement Ring",
        "price": "5899",
        "description": "A mesmerizing opal engagement ring.",
        "image": "https://pngimg.com/uploads/ring/ring_PNG10695.png"
      },
      {
        "title": "Pearl Drop Earrings",
        "price": "2399",
        "description": "Elegant pearl drop earrings for formal wear.",
        "image": "https://pngimg.com/uploads/earrings/earrings_PNG60.png"
      },
    {
      title: "Silver Bangles",
      price: "1999",
      description: "Pure silver designer bangles.",
      image: "https://tse1.mm.bing.net/th?id=OIP.R0LHEllQEOu2y2uwrv9arwHaGw&pid=Api&P=0&h=180",
    },
  ]);

  // Form state for new product
  const initialProductState = { title: "", price: "", description: "", image: null };
  const [newProduct, setNewProduct] = useState(initialProductState);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false); // Track form visibility

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setNewProduct((prev) => ({ ...prev, image: imageUrl }));
  };

  // Open add product form
  const openAddProductForm = () => {
    setEditingIndex(null); // Ensure it's not in edit mode
    setNewProduct(initialProductState); // Reset the form
    setIsFormVisible(true); // Show form
  };

  // Add new product
  const addProduct = () => {
    if (!newProduct.title || !newProduct.price || !newProduct.description || !newProduct.image) {
      alert("Please fill all fields and upload an image!");
      return;
    }

    setProducts((prev) => [...prev, newProduct]);
    setNewProduct(initialProductState); // Reset form
    setIsFormVisible(false); // Hide form after adding
  };

  // Remove product
  const removeProduct = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  // Start editing product
  const startEditing = (index) => {
    setEditingIndex(index);
    setNewProduct(products[index]);
    setIsFormVisible(true); // Show form for editing
  };

  // Save edited product
  const saveEditedProduct = () => {
    const updatedProducts = [...products];
    updatedProducts[editingIndex] = newProduct;
    setProducts(updatedProducts);
    setEditingIndex(null);
    setNewProduct(initialProductState); // Reset form
    setIsFormVisible(false); // Hide form after saving
  };

  return (
    <>
    <AdminNav />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Top Section with Title & Add Button */}
      <div className="w-full max-w-5xl flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Panel - Manage Jewelry</h1>
        <button
          onClick={openAddProductForm}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow hover:bg-blue-600"
        >
          <FaPlus /> Add Product
        </button>
      </div>

      {/* Product Form */}
      {isFormVisible && (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingIndex !== null ? "Edit Product" : "Add New Product"}
          </h2>

          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={newProduct.title}
            onChange={handleInputChange}
            className="w-full border p-2 mb-2 rounded"
          />

          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="w-full border p-2 mb-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Product Description"
            value={newProduct.description}
            onChange={handleInputChange}
            className="w-full border p-2 mb-2 rounded"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full mb-2"
          />

          {newProduct.image && (
            <img src={newProduct.image} alt="Preview" className="w-full h-32 object-cover mb-2 rounded" />
          )}

          {editingIndex !== null ? (
            <button onClick={saveEditedProduct} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Save Changes
            </button>
          ) : (
            <button onClick={addProduct} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              ➕ Add Product
            </button>
          )}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md relative group">
            <img src={product.image} alt={product.title} className="w-full h-70 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <p className="text-gray-500">{product.description}</p>

            {/* Floating Edit & Delete Buttons */}
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={() => startEditing(index)}
                className="bg-yellow-500 text-white p-1 rounded-full hover:bg-yellow-600"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => removeProduct(index)}
                className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Foot />
    </>
  );
}
