// import React from "react";

function Hero() {
  return (
    <div className="bg-gradient-to-b text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold">Welcome to our website!</h1>
        <p className="text-lg mt-4">
          Discover amazing things about TailwindCSS.
        </p>
        <a className="bg-purple-500 text-gray-200 px-6 py-2 rounded-full mt-8 inline-block hover:bg-purple-700 hover:text-orange-400 hover:font-bold hover:cursor-pointer">
          Get started
        </a>
      </div>
    </div>
  );
}

export default Hero;

