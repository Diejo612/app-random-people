import React from "react";
import Card from "./Card";
import './card.css';

const Cards = ({data}) => {

  return (
    <div className="cards">
      {data.map( person => (
          <Card
            key={person.login.uuid}
            firstName={person.name.first}
            lastName={person.name.last}
            city={person.location.city}
            state={person.location.state}
            country={person.location.country}
            photo={person.picture.large}
            email={person.email}
            phone={person.phone}
            age={person.dob.age}
          ></Card>
        )
      )}
    </div>
  );
}

export default Cards;
