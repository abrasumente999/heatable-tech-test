import Link from "next/link";
import Image from "next/image";
import pokemonHeader from "../../../public/International_Pokemon_logo.png";

export default function NavBar() {
  return (
    <nav className="bg-white px-2 sm:px-36 py-3  text-gray-800 sticky w-full overflow-x-hidden top-0 left-0 border-b border-gray-200 block ">
      <div className="container flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between ">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white sm:pl-3">
            <Image
              src={pokemonHeader}
              alt="Pokemon Logo"
              priority
              height={70}
            />
          </span>
        </Link>
        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
          {"Gotta catch 'em all!"}
        </span>
      </div>
    </nav>
  );
}
