import React, { useState } from "react";

const ProductDetail: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(4);
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
  ];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* Left Image Section */}
      <div>
        <img src={mainImage} alt="Main Product" className="w-full rounded" />
        <div className="flex mt-4 gap-3">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Thumbnail"
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 object-cover border-2 ${
                mainImage === img ? "border-red-500" : "border-gray-200"
              } cursor-pointer rounded`}
            />
          ))}
        </div>
      </div>

      {/* Right Info Section */}
      <div>
        <h1 className="text-2xl font-bold mb-2">MEN'S ADIDAS COURTSMASH</h1>
        <p className="text-yellow-500">★★★★★ <span className="text-gray-600 text-sm">(50 Reviews)</span></p>
        
        <div className="mt-4 text-sm space-y-1">
          <p><strong>Availability:</strong> <span className="text-green-600">In Stock</span></p>
          <p><strong>Brand:</strong> Bata</p>
          <p><strong>Category:</strong> Clothing</p>
          <p><strong>SKU:</strong> BE45VGRT</p>
        </div>

        <div className="mt-4">
          <p className="line-through text-gray-400 text-sm">₹5000.00</p>
          <p className="text-red-600 text-2xl font-semibold">₹4500.00 <span className="bg-red-500 text-white text-sm px-2 py-1 rounded ml-2">-30%</span></p>
        </div>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis.
        </p>

        {/* Sizes */}
        <div className="mt-4">
          <p className="font-semibold">Size</p>
          <div className="flex gap-2 mt-2">
            {["XS", "S", "M", "L", "XL"].map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border px-3 py-1 rounded ${
                  selectedSize === size ? "bg-red-500 text-white" : "bg-white"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="mt-4">
          <p className="font-semibold">Color:</p>
          <div className="flex gap-2 mt-2">
            {["red", "white", "black"].map(color => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                  selectedColor === color ? "border-red-600" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mt-4">
          <p className="font-semibold">Quantity</p>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 border rounded"
            >
              −
            </button>
            <span className="px-3">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 border rounded"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
            🛒 ADD TO CART
          </button>
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-50">
            ♥ WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
