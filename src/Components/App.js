import React from "react";
import PokemonList from "./PokemonList";
import data from "../data/data.json";
import "../StyleSheets/App.scss";

class App extends React.Component {
  render() {
    return <PokemonList pokemonData={data} />;
  }
}
export default App;
