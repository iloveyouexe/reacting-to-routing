import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);

  const getPeopleData = async () => {
    const pes = await fetch("https://ghibliapi.herokuapp.com/people");
    const allPeople = await pes.json();
    setPeople(allPeople);
  };
  getPeopleData();
  return (
    <div>
      <h1 class="home">People</h1>
      <div class="people-info container">
        <section className="row justify-content-center mt-5">
          {people.map((people) => (
            <div class="card" style={{ width: "36rem" }}>
              <div class="card-body" key={`people-name-${people.id}`}>
                <h4 class="card-title">{people.name}</h4>

                <Link to={`/People/${people.id}`} ClassName="btn btn-primary">
                  More Details
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default People;
