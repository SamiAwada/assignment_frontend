import React from "react";

export default function Cards(props) {
  return (
    <>
      {props.cardsList.map((card, i) => (
        <div className="card mb-2" key={"artist"+i}>
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Followers {card.followers}</h6>
            <a href={""+card.artistURL} className="card-link">
              Visit Profile
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
