import Link from "next/link";
import Image from "next/image";
import PokemonCard from "./PokemonCard";

async function getPokemon() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`, {});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
}

type PokemonType = {
  name: string;
  url: string;
};

export default async function PokemonList() {
  const pokemonList = getPokemon();
  const [allPokemon] = await Promise.all([pokemonList]);

  return (
    <section className="flex flex-col md:flex-row m-auto flex-wrap justify-center content-center w-full">
      {allPokemon.map((pokemon: PokemonType) => {
        return (
          /* @ts-expect-error Server Component */
          <PokemonCard key={pokemon.name} pokemonName={pokemon} />
        );
      })}
    </section>
  );
}
