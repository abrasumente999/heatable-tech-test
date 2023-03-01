import { Inter } from "next/font/google";
import PokemonCard from "./components/PokemonCard";
import { SearchBar } from "./components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

async function getAllPokemon(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export type PokemonType = {
  name: string;
  url: string;
};

export default async function Home() {
  const initUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  const pokemonList = getAllPokemon(initUrl);
  const [allPokemon] = await Promise.all([pokemonList]);
  console.log(allPokemon);

  return (
    <main className="flex flex-col mx-5 md:mx-20 justify-between">
      <section className="flex flex-col md:flex-row m-auto flex-wrap justify-center content-center ">
        <SearchBar allPokemon={allPokemon} />
      </section>
    </main>
  );
}
