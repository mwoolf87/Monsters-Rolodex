import "./card.styles.css";

const Card = ({ robot }) => {
  const { id, name, email } = robot;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
        alt={`robot ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
