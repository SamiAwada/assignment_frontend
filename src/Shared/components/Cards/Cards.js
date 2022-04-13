import React from "react";

export default function Cards(props) {
  return (
    <>
      {props.cardsList.map((card, i) => (
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">{card.userName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{card.Talent}</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <span className="card-link">{card.phoneNumber}</span>
          </div>
        </div>
      ))}
    </>
  );
}
