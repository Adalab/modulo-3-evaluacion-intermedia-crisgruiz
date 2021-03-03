import React from "react";
import PokemonList from "./PokemonList";
import data from "../data/data.json";
import "../StyleSheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data,
    };
  }
  render() {
    return <PokemonList pokemonData={this.state.pokemons} />;
  }
}
export default App;
