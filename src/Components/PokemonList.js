import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import "../StyleSheets/PokemonList.scss";

class PokemonList extends React.Component {
  render() {
    const PokeFromData = this.props.pokemonData;
    const Poke = PokeFromData.map((PokeItem, id) => {
      return (
        <li key={id} className="pokemonElement">
          {<Pokemon PokeProp={PokeItem} />}
        </li>
      );
    });
    PokemonList.propTypes = {
      PokeFromData: PropTypes.array,
    };
    return (
      <div className="container">
        <h1 className="title">Mi lista de Pokemon</h1>
        <ul className="pokemonList">{Poke}</ul>
      </div>
    );
  }
}

export default PokemonList;
