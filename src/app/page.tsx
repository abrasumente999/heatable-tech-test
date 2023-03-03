import { Inter } from "next/font/google";

import PokemonList from "./components/PokemonList";

export default async function Home() {
  return (
    <main className="flex flex-col mx-5 md:mx-20 justify-between">
      {/* @ts-expect-error Server Component */}
      <PokemonList />
    </main>
  );
}
