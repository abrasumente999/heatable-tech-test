import { Inter } from "next/font/google";

import PokemonList from "./components/PokemonList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col mx-20">
      <h1 className="text-xl font-bold text-gray-800">Pokémon</h1>
      {/* @ts-expect-error Server Component */}
      <PokemonList />
    </main>
  );
}
