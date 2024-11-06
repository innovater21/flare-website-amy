import { Menu, Music, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Music className="h-8 w-8" />
            <span className="font-bold text-xl">Harmony House</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-indigo-200 transition">Home</Link>
            <Link to="/products" className="hover:text-indigo-200 transition">Products</Link>
            <Link to="/courses" className="hover:text-indigo-200 transition">Courses</Link>
            <Link to="/contact" className="hover:text-indigo-200 transition">Contact</Link>
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-indigo-200"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-indigo-200">Home</Link>
              <Link to="/products" className="hover:text-indigo-200">Products</Link>
              <Link to="/courses" className="hover:text-indigo-200">Courses</Link>
              <Link to="/contact" className="hover:text-indigo-200">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}