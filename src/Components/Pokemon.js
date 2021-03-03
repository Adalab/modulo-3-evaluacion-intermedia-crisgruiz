import "../StyleSheets/Pokemon.scss";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const PokemonTypes = props.PokeProp.types.map((types, id) => {
    return (
      <li key={id} className="typesList">
        {types}
      </li>
    );
  });
  Pokemon.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
  };
  return (
    <article>
      <h2 className="name">{props.PokeProp.name}</h2>
      <img
        className="img"
        src={props.PokeProp.url}
        alt={props.PokeProp.name}
      ></img>
      <ul className="types">{PokemonTypes}</ul>
    </article>
  );
};
export default Pokemon;
