import React, { useState } from "react";
import { useParams } from "react-router";
const PeopleDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState({});

  const getPeopleData = async () => {
    const qes = await fetch(`https://ghibliapi.herokuapp.com/people/${id}`);
    const allPeopleData = await qes.json();
    setPerson(allPeopleData);
  };
  getPeopleData();

  return (
    <div>
      <div class="people-info container">
        <section className="row justify-content-center mt-5">
          <div class="card" style={{ width: "36rem" }}>
            <div class="card-body" key={`people-name-${person.id}`}>
              <h4 class="card-title">Name:{person.name}</h4>
              <h5 class="card-text">Gender:{person.gender}</h5>
              <h5 class="card-text">Age:{person.age}</h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PeopleDetails;
