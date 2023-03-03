import Link from "next/link";
import Image from "next/image";
import { getPokemon } from "@/app/components/PokemonCard";
import { capitaliseFirstLetter, previousId, nextId } from "@/app/utils/utils";
import arrowNext from "../../../../public/arrow-next.png";
import arrowPrev from "../../../../public/prev-arrow.png";

interface Props {
  params: {
    id: string | number;
  };
}
type AbilityType = {
  ability: {
    name: string;
    url: string;
  };
  isHidden: boolean;
  slot: number;
};

export type PokeTypesType = {
  slot: number;
  type: { name: string; url: string };
};

export default async function PokemonStats({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  const name = capitaliseFirstLetter(pokemon.name);

  return (
    <div className="justify-center items-center content-center w-full flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <Link
        href={`/pokemon/${previousId(pokemon.id)}`}
        className="rounded-full bg-red-100 w-20 h-20 absolute left-5"
      >
        <Image src={arrowPrev} alt={"previous page"} fill={true} />
      </Link>
      <div className="border-0 rounded-2xl shadow-lg justify-center flex flex-col -z-10 w-auto my-6 mx-auto max-w-3xl bg-white outline-none focus:outline-none p-6">
        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
          <h3 className="text-3xl font-semibold">{name}</h3>
          <Link
            className="text-3xl font-extra-bold font hover:text-gray-400 transition ease-in-out duration-300"
            href="/"
          >
            x
          </Link>
        </div>
        <div className="relative p-4 flex-auto w-full">
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={`Official artwork sprite of ${pokemon.name}`}
            width={300}
            height={300}
          />
          <section className="flex justify-evenly items-center pb-4">
            <Image
              src={
                pokemon.sprites.versions["generation-ii"]["gold"].front_default
              }
              alt={`Generation II sprite of ${pokemon.name}`}
              width={100}
              height={100}
            />
            <Image
              src={
                pokemon.sprites.versions["generation-iii"]["emerald"]
                  .front_default
              }
              alt={`Generation III sprite of ${pokemon.name}`}
              width={100}
              height={100}
            />
            <Image
              src={
                pokemon.sprites.versions["generation-vi"]["x-y"].front_default
              }
              alt={`Generation VII sprite of ${pokemon.name}`}
              width={100}
              height={100}
            />
          </section>
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h4 className="text-2xl font-semibold">Stats</h4>
          </div>
          <div className="relative p-4 flex-auto w-full"></div>
          <section className="flex justify-evenly">
            <section className="flex-col justify-start">
              <div className="flex pb-2">
                <h5 className="mb-1 font-semibold text-gray-700 dark:text-gray-400 mr-3">
                  {"Type: "}
                </h5>
                <ul className="pl-6">
                  {pokemon.types.map((type: PokeTypesType) => {
                    const pokemonType = type.type.name;
                    return (
                      <li key={type.slot}>
                        {capitaliseFirstLetter(pokemonType)}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className=" flex justify-start">
                <h5 className="mb-1 font-semibold text-gray-700 dark:text-gray-400 mr-3">
                  {"Abilities: "}
                </h5>
                <ul>
                  {pokemon.abilities.map((ability: AbilityType) => {
                    const abilityName = ability.ability.name;
                    return (
                      <li key={abilityName}>
                        {capitaliseFirstLetter(abilityName)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
            <section className="flexjustify-start">
              <div className="flex  pb-2">
                <h5 className="mb-1 font-semibold text-gray-700 dark:text-gray-400 mr-3">
                  {"Height: "}
                </h5>
                <p> {pokemon.height * 10}cm</p>
              </div>
              <div className="flex pb-2">
                <h5 className="mb-1 font-semibold text-gray-700 dark:text-gray-400 mr-3">
                  {"Weight: "}
                </h5>
                <p> {pokemon.weight / 10}kg</p>
              </div>
            </section>
          </section>
        </div>

        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"></div>
      </div>
      <Link
        href={`/pokemon/${nextId(pokemon.id)}`}
        className=" rounded-full bg-red-100 w-20 h-20 absolute right-5"
      >
        <Image src={arrowNext} alt={"next page"} fill={true} />
      </Link>
    </div>
  );
}
