import Link from "next/link";
import Image from "next/image";
import { TypeProps } from "@/app/components/PokemonCard";
import { getPokemon } from "@/app/components/PokemonCard";
import capitaliseFirstLetter from "@/app/utils/utils";
import { lazy } from "react";

interface Props {
  params: {
    name: string;
  };
}
type MoveProps = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: [];
};
export default async function PokemonStats({ params }: Props) {
  const pokemon = await getPokemon(params.name);

  const name = capitaliseFirstLetter(pokemon.name);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-auto my-6 mx-auto max-w-3xl bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">{name}</h3>
          </div>
          <div className="relative p-6 flex-auto">
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={`Sprite of ${pokemon.name}`}
              width={400}
              height={400}
            />

            <Image
              src={pokemon.sprites.front_default}
              alt={`Sprite of ${pokemon.name}`}
              width={100}
              height={100}
            />
            <div className="flex">
              <h5 className="mb-1 font-semibold text-gray-700 dark:text-gray-400 mr-3">
                {"Types:"}
              </h5>
              <ul>
                {pokemon.types.map((type: TypeProps) => {
                  const pokemonType = type.type.name;
                  return (
                    <li key={type.slot}>
                      {capitaliseFirstLetter(pokemonType)}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className=" flex">
              <h5 className="mb-1 font-semibold text-gray-700 dark:text-gray-400 mr-3">
                {"Moves"}
              </h5>
              <ul className="inline-flex">
                {pokemon.moves.map((move: MoveProps) => {
                  const moveName = move.move.name;
                  return (
                    <li key={moveName}>{capitaliseFirstLetter(moveName)}</li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"></div>
        </div>
      </div>
    </>
  );
}
