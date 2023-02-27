// import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2  dark:bg-gray-800 text-gray-800 sticky w-full top-0 left-0 border-b border-gray-200 dark:border-gray-700 block">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Pokémon
          </span>
        </a>
        <div className="flex md:order-2 ">
          Search Pokemon <input type="search" placeholder="Pokemon"></input>
        </div>
      </div>
    </nav>
  );
}
