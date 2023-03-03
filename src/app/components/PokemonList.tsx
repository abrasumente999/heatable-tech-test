import PokemonCard from "./PokemonCard";

export type PokemonType = {
  name: string;
  url: string;
};

export async function getAllPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function PokemonList() {
  const data = getAllPokemon();
  const [allPokemon] = await Promise.all([data]);

  return (
    <>
      <section className="flex flex-col md:flex-row m-auto flex-wrap justify-center content-center ">
        {allPokemon.results.map((pokemon: PokemonType) => {
          return (
            /* @ts-expect-error Server Component */
            <PokemonCard key={pokemon.name} pokemonData={pokemon} />
          );
        })}
      </section>
    </>
  );
}

//Search function Code that didnt work!

// "use client";
// import PokemonCard from "./PokemonCard";

// import { useState, DetailedHTMLProps, InputHTMLAttributes } from "react";
// import { getPokemon } from "./PokemonCard";
// import ServerComp from "./ServerComp";

// interface ResultsProps {
//   results: PokemonType[];
// }
// export type PokemonType = {
//   name: string;
//   url: string;
// };

// export default function PokemonList(results: ResultsProps) {
//   const data = results.results;

//   const [search, setSearch] = useState<string>("");
//   const [pokemonList, setPokemonList] = useState<PokemonType[]>(data);
//   const [err, setErr] = useState<string>("");

//   const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//   };

//   const handleSubmit = () => {
//     getPokemon(search).then((res) => {
//       setPokemonList(res);
//     });
//   };

//   const handleKeyPress = (
//     event: DetailedHTMLProps<
//       InputHTMLAttributes<HTMLInputElement>,
//       HTMLInputElement
//     >
//   ) => {
//     if (event.key === "Enter") {
//       if (search.trim() !== "") {
//         getPokemon(search.toLowerCase())
//           .then((data) => {
//             setPokemonList(data);
//           })
//           .catch(() => setErr("Sorry! Could not retrieve Pokemon."))
//           .then(() => {
//             setSearch("");
//           });
//       }
//     }
//   };

//   // const filteredPokemon = pokemon.filter((pokemon) => {
//   //   return pokemon.name.toLowerCase().includes(search.toLowerCase());
//   // });

//   const pokemonCard = pokemonList.map((poke) => {
//     return (
//       <ServerComp key={poke.name}>
//         {/* @ts-expect-error Server Component */}
//         <PokemonCard pokemonData={poke} />
//       </ServerComp>
//     );
//   });

//   const pokemonCardSearch = pokemonList.map((poke) => {
//     return (
//       <ServerComp key={poke.name}>
//         {/* @ts-expect-error Server Component */}
//         <PokemonCard pokemonData={poke} />
//       </ServerComp>
//     );
//   });

//   if (err) {
//     return <p>Sorry, no pokemon found.</p>;
//   }

//   return (
//     <>
//       <div>
//         <div className="pt-2 relative mx-auto text-gray-600">
//           <input
//             className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
//             type="text"
//             name="search"
//             placeholder="Search"
//             onKeyDown={(e) => {
//               handleKeyPress(e);
//             }}
//             onChange={(e) => {
//               handleUserInput(e);
//             }}
//           />

//           <button
//             type="submit"
//             onSubmit={() => {
//               handleSubmit();
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <section className="flex flex-col md:flex-row m-auto flex-wrap justify-center content-center ">
//           {!search ? pokemonCard : pokemonCardSearch}
//         </section>
//       </div>
//     </>
//   );
// }
