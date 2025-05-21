import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Top contact + header */}
      <div className="flex justify-between items-center px-4 py-2 text-sm border-b">
        <span className="text-gray-600">Rafcart@Support.Com</span>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-red-500">Track My Order</a>
          <a href="#" className="hover:text-red-500">Login/Register</a>
          <a href="#" className="hover:text-red-500">Language ▼</a>
          <a href="#" className="hover:text-red-500">Currency ▼</a>
        </div>
      </div>

      {/* Middle nav with logo, search and icons */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-red-500">RAFCART</h1>
        <div className="flex w-1/2 border rounded overflow-hidden">
          <select className="px-2 border-r">
            <option>All category</option>
          </select>
          <input type="text" placeholder="Search" className="w-full px-2" />
          <button className="bg-red-500 text-white px-4">Search</button>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <span className="relative">
              ❤
              <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full px-1">6</span>
            </span>
            <div>Wish List</div>
          </div>
          <div className="text-center">
            <span className="relative">
              🛒
              <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full px-1">8</span>
            </span>
            <div>Cart</div>
          </div>
          <div className="text-center">
            👤
            <div>Account</div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-black text-white px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="bg-red-600 px-3 py-1 rounded flex items-center space-x-1">
            <span>☰</span>
            <span>All categories</span>
          </button>
          <a href="#">Home ▼</a>
          <a href="#">Shop ▼</a>
          <a href="#">Pages ▼</a>
          <a href="#">Contact</a>
        </div>
        <div>📞 Call: +123 456 7890</div>
      </div>

      {/* Hero Section */}
      <div className="relative flex items-center justify-between bg-gray-100 px-6 py-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Best Collection For<br />Home Decoration</h2>
          <p className="text-gray-600 mb-6 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate rhoncus pellentesque id integer neque, vel accumsan dolor diam.</p>
          <button className="bg-red-500 text-white px-5 py-2 rounded">Shop Now</button>
        </div>
        <img src="https://img.freepik.com/free-photo/interior-design-living-room-with-pink-armchair_53876-140956.jpg" alt="Chair" className="w-1/3 rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default HeroSection;
