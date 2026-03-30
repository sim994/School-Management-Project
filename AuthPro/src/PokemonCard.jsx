import React from "react";

export function PokemonCard({ props }) {
  return (
    <>
      {props?.map((poke) => (
        <div className="pokemon-card" key={poke.name}>
          <div>
            <img src={poke.sprites.front_default} alt={poke.name} />
          </div>
          <ul className="pokiinfo">
            <li>
              <span>Name</span>
              {poke.name}
            </li>
            <li>
              <span>Height</span>
              {poke.height}
            </li>
            <li>
              <span>Weight</span>
              {poke.weight}
            </li>
            <li>
              <span>Abilities</span>
              {poke.abilities?.[2]?.ability.name || "undefined"}
            </li>
            <li>
              <span>Types</span>
              {poke.types?.map((type) => type.type.name).join(", ")}
            </li>
            <li>
              <span>Experience</span>
              {poke.base_experience}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
