import Image from "next/image";
import Link from "next/link";
import capitaliseFirstLetter from "../utils/utils";

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

type PokemonCardProps = {
  pokemonName: { name: string; url: string };
};

type TypeProps = {
  slot: number;
  type: { name: string; url: string };
};

export default async function PokemonCard({ pokemonName }: PokemonCardProps) {
  const data = getPokemonByUrl(pokemonName.name);
  const [pokemon] = await Promise.all([data]);

  return (
    <Link
      key={pokemon.id}
      href="#"
      className="flex flex-row bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="flex justify-between p-4 leading-normal">
        <Image
          src={pokemon.sprites.front_default}
          alt={`Sprite of ${pokemon.name}`}
          width={200}
          height={200}
        />
        <div className="flex flex-col">
          <h5 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
            {capitaliseFirstLetter(pokemon.name)}
          </h5>

          <h6 className="mb-1 font-semibold text-gray-700 dark:text-gray-400">
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
