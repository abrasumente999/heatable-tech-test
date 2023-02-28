import Image from "next/image";
import Link from "next/link";
import capitaliseFirstLetter from "../utils/utils";

export async function getPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch data`);
  }
  const data = await res.json();
  return data;
}

type PokemonCardProps = {
  pokemonName: { name: string; url: string };
};

export type TypeProps = {
  slot: number;
  type: { name: string; url: string };
};

export default async function PokemonCard({ pokemonName }: PokemonCardProps) {
  const data = getPokemon(pokemonName.name);
  const [pokemon] = await Promise.all([data]);

  return (
    <Link
      key={pokemon.id}
      href={`/pokemon/${pokemon.name}`}
      className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow  lg:w-1/4 m-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-80 lg:h-96  w-4/6 sm:w-2/6"
    >
      <div className="leading-normal">
        <h5 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white text-center">
          {capitaliseFirstLetter(pokemon.name)}
        </h5>

        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={`Sprite of ${pokemon.name}`}
          width={200}
          height={200}
        />

        <div className="flex justify-center">
          <h6 className="mb-1 font-semibold text-gray-700 dark:text-gray-400 mr-3">
            {"Type:"}
          </h6>

          <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {pokemon.types.map((type: TypeProps) => {
              const pokemonType = type.type.name;
              return (
                <li key={type.slot}>{capitaliseFirstLetter(pokemonType)}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </Link>
  );
}
