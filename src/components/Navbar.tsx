"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaCookie } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="bg-white dark:bg-black shadow-md py-4 px-8 flex justify-between items-center">
      <Link href="/" legacyBehavior>
        <a className="flex items-center text-gray-900 dark:text-white">
          <FaCookie className="mr-2 text-gray-900 dark:text-white" />
          MY NEXTCOOKIE SESSIONS
        </a>
      </Link>
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="flex items-center text-gray-900 dark:text-white rounded-full p-2 transition-all mr-2"
        >
          {theme === "light" ? (
            <FiMoon className="ml-2 text-gray-700 dark:text-white" />
          ) : (
            <FiSun className="ml-2 text-gray-700 dark:text-white" />
          )}
          {theme === "light" ? " " : " "}
        </button>
        <Link href="/premium" legacyBehavior>
          <a className=" text-gray-900 dark:text-white rounded-full p-2 transition-all">
            Premium
          </a>
        </Link>
        <Link href="/profile" legacyBehavior>
          <a className=" text-gray-900 dark:text-white rounded-full p-2 transition-all">
            Profile
          </a>
        </Link>
        <Link href="/login" legacyBehavior>
          <a className=" text-gray-900 dark:text-white rounded-full p-2 transition-all">
            Login
          </a>
        </Link>
        <Link href="/logout" legacyBehavior>
          <a className=" text-gray-900 dark:text-white rounded-full p-2 transition-all">
            Logout
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
