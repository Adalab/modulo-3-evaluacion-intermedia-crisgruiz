import "../StyleSheets/Pokemon.scss";

const Pokemon = (props) => {
  console.log(props.PokeProp);
  const PokemonTypes = props.PokeProp.types.map((types, i) => {
    return <li key={i}>{types}</li>;
  });
  return (
    <article>
      <h2 className="name">{props.PokeProp.name}</h2>
      <img className="img" src={props.PokeProp.url} alt="Pokemon"></img>
      <ul className="types">{PokemonTypes}</ul>
    </article>
  );
};
export default Pokemon;
