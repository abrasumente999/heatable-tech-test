"use client";
import { useState } from "react";
import { PokemonType } from "../page";
import PokemonCard from "./PokemonCard";

type SearchProps = {
  allPokemon: {
    count: number;
    next: string;
    previous: string;
    results: PokemonType[];
  };
};

export const SearchBar = ({ allPokemon }: SearchProps) => {
  const [query, setQuery] = useState<string>("");
  const [pokemonList, setPokemonList] = useState<[]>([]);

  const searchFilter = (array: PokemonType[]) => {
    return array.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query)
    );
  };

  const filteredPokemon = searchFilter(allPokemon.results);

  return (
    <div className="pt-2 relative mx-auto text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="text"
        name="search"
        placeholder="Search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <>
        {filteredPokemon.map((pokemon) => {
          /* @ts-expect-error Server Component */
          <PokemonCard key={pokemon.name} pokemonName={pokemon.name} />;
        })}
      </>
    </div>
  );
};
