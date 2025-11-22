import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 mt-[50px] ">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-300 ">
          © {new Date().getFullYear()} Elias Dugasa. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}