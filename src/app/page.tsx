import React from "react";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen p-8 sm:p-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <main className="flex flex-col gap-8 items-center sm:items-start text-gray-900 dark:text-white">
          <h1>Hello World</h1>
        </main>
      </div>
    </>
  );
};

export default HomePage;
