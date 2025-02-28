"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            MonLogo
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Accueil
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Bouton du menu mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-64 py-4" : "max-h-0 py-0 overflow-hidden"
        }`}
      >
        <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
          Accueil
        </Link>
        <Link href="/services" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
          Services
        </Link>
        <Link href="/about" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
          À propos
        </Link>
        <Link href="/contact" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
          Contact
        </Link>
      </div>
    </nav>
  );
}
