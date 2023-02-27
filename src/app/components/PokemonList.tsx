import Link from "next/link";
import Image from "next/image";
async function getPokemon() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`, {});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
}

async function getPokemonByUrl(name: string) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch data for ${name}`);
  }
  const data = await res.json();
  return data;
}

type PokemonType = {
  name: string;
  url: string;
};

export default async function PokemonList() {
  const pokemonList = getPokemon();
  const [allPokemon] = await Promise.all([pokemonList]);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {allPokemon.map((pokemon: PokemonType) => {
        const data = getPokemonByUrl(pokemon.name).then((pokemon) => {
          return pokemon;
        });

        return (
          <Link
            key={pokemon.name}
            href="#"
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
                {pokemon.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
