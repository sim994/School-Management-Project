import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { keepPreviousData, useQuery, useQueries } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PokemonCard } from "./PokemonCard";

export function Pokemon() {
  const [searchParams, setSearchParams] = useSearchParams({
    skip: 0,
    limit: 30,
    q: "",
    type: "",
  });

  const limit = parseInt(searchParams.get("limit")) || 30;
  const skip = parseInt(searchParams.get("skip")) || 0;
  const q = searchParams.get("q") || "";
  const type = searchParams.get("type") || "";

  const {
    isLoading,
    error,
    data: pokemon,
  } = useQuery({
    queryKey: ["pokemon", limit, skip, q, type],
    queryFn: async () => {
      if (type) {
        const typeRes = await axios.get(
          `https://pokeapi.co/api/v2/type/${type}`,
        );

        const pokemonOfType = typeRes.data.pokemon.map((p) => p.pokemon);

        const detailsResponses = await Promise.all(
          pokemonOfType.map((p) => axios.get(p.url)),
        );

        return detailsResponses.map((res) => res.data);
      }

      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${skip}`,
      );

      const results = res.data.results;

      const detailsResponses = await Promise.all(
        results.map((pokemon) => axios.get(pokemon.url)),
      );

      return detailsResponses.map((res) => res.data);
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  const filteredPokemon = pokemon?.filter((poke) =>
    poke.name.toLowerCase().includes(q.toLowerCase()),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="pokemon-container">
      <header>
        <input
          type="search"
          name="search"
          placeholder="Search Pokemon..."
          onChange={(e) => {
            e.preventDefault();
            setSearchParams({
              ...Object.fromEntries(searchParams),
              q: e.target.value,
            });
          }}
        />
        <select
          name="PokemonType"
          onChange={(e) => {
            e.preventDefault();
            setSearchParams({
              ...Object.fromEntries(searchParams),
              type: e.target.value,
            });
          }}
        >
          <option value="">Select Pokemon Type</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
        </select>
      </header>
      <div className="pokemon-list">
        <PokemonCard props={filteredPokemon} />
      </div>
    </div>
  );
}
