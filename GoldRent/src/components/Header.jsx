import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <header className="flex justify-between items-center text-black py-4 px-8 md:px-32 bg-gray-50 shadow-md">
        <a href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-24 h-auto object-contain"
          />
        </a>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li>
            <a
              href="/Services"
              className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all"
            >
              Usługi
            </a>
          </li>
          <li>
            <a
              href="/Investors"
              className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all"
            >
              Dla inwestorów
            </a>
          </li>
          <li>
            <a
              href="/Owner"
              className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all"
            >
              Dla właścicieli
            </a>
          </li>
          <li>
            <a
              href="/Developers"
              className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all"
            >
              Dla deweloperów
            </a>
          </li>
        </ul>
        <div className="hidden md:flex items-center justify-center gap-6 font-semibold text-base">
          <a
            href="/Reservations"
            className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all"
          >
            Rezerwacje
          </a>
          <a
            href="/Contact"
            className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all"
          >
            Kontakt
          </a>
        </div>

        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer z-50"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        ></i>
        <div
          className={`fixed xl:hidden top-0 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100 z-50"
              : "-translate-y-full opacity-0 z-40"
          }`}
        >
          <div className="flex justify-between items-center w-full px-4 py-2">
            <a href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-20 h-auto object-contain"
              />
            </a>
            <i
              className="bx bx-x text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            ></i>
          </div>
          <ul className="w-full flex flex-col items-center">
            <li className="w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
              <a href="/">Strona główna</a>
            </li>
            <li className="w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
              <a href="/Services">Usługi</a>
            </li>
            <li className="w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
              <a href="/Investors">Dla inwestorów</a>
            </li>
            <li className="w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
              <a href="/Owner">Dla właścicieli</a>
            </li>
            <li className="w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
              <a href="/Developers">Dla deweloperów</a>
            </li>
            <li className="w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
              <a href="/Reservations">Rezerwacje</a>
            </li>
            <li className="w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
              <a href="/Contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
