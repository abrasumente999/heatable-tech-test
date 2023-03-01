import { Inter } from "next/font/google";
import { Search } from "./components/SearchBar";
import PokemonList from "./components/PokemonList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col mx-5 md:mx-20 justify-between">
      {/* @ts-expect-error Server Component */}
      <PokemonList />
    </main>
  );
}
