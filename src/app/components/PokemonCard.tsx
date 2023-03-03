import Image from "next/image";
import Link from "next/link";
import { PokemonType } from ".././components/PokemonList";
import { capitaliseFirstLetter } from "../utils/utils";

type PokemonCardProps = {
  pokemonData: PokemonType;
};

export type PokemonTypeProps = {
  slot: number;
  type: { name: string; url: string };
};

export async function getPokemon(nameOrId: string | number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch data`);
  }
  const data = await res.json();
  return data;
}

export default async function PokemonCard({ pokemonData }: PokemonCardProps) {
  const data = getPokemon(pokemonData.name);

  const [pokemon] = await Promise.all([data]);

  const types = pokemon.types.map((type: PokemonTypeProps) => {
    return <li key={type.slot}>{capitaliseFirstLetter(type.type.name)}</li>;
  });

  return (
    <>
      <Link
        key={pokemon.id}
        href={`/pokemon/${pokemon.id}`}
        className="flex flex-col justify-start bg-white border p-5 border-gray-200 rounded-2xl shadow h-80  m-2 lg:max-w-md lg:m-4 lg:p-5 transition ease-in-out delay-50 duration-300 hover:bg-slate-50  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="leading-normal ">
          <h5 className=" text-2xl font-bold text-gray-800 dark:text-white text-center">
            {capitaliseFirstLetter(pokemon.name)}
          </h5>

          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={`Sprite of ${pokemon.name}`}
            width={200}
            height={200}
          />

          <div className="flex justify-center py-2">
            <h6 className="mb-1 font-semibold text-gray-700 dark:text-gray-400 mr-3">
              {"Type:"}
            </h6>

            <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {types}
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
}
