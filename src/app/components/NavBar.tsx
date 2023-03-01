import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-4  dark:bg-gray-800 text-gray-800 sticky w-full overflow-x-hidden top-0 left-0 border-b border-gray-200 dark:border-gray-700 block">
      <div className="container flex flex-wrap items-center justify-center md:justify-between">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            Pokémon
          </span>
        </Link>
      </div>
    </nav>
  );
}
