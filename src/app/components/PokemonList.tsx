import Link from "next/link";
import Image from "next/image";
import PokemonCard from "./PokemonCard";
import { Search } from "./SearchBar";

async function getAllPokemon(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

type PokemonType = {
  name: string;
  url: string;
};

export default async function PokemonList() {
  const initUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  const pokemonList = getAllPokemon(initUrl);
  const [allPokemon] = await Promise.all([pokemonList]);

  console.log(allPokemon);

  return (
    <>
      <Search allPokemon={allPokemon} />
      <section className="flex flex-col md:flex-row m-auto flex-wrap justify-center content-center ">
        {allPokemon.results.map((pokemon: PokemonType) => {
          return (
            /* @ts-expect-error Server Component */
            <PokemonCard key={pokemon.name} pokemonName={pokemon} />
          );
        })}
      </section>
    </>
  );
}
