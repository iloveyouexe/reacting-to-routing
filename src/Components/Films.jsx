import React from "react";
import { useEffect, useState } from "react";

const Films = () => {
  const [films, setFilms] = useState([]);

  const getFilmData = async () => {
    const res = await fetch("https://ghibliapi.herokuapp.com/films");
    const allFilms = await res.json();
    setFilms(allFilms);
  };
  getFilmData();
  return (
    <div>
      <div className="film-info container">
        <section className="row justify-content-center mt-5">
          {films.map((films) => (
            <div class="card" style={{ width: "36rem" }}>
              <div class="card-body" key={`film-name-${films.id}`}>
                <h4 class="card-title">Title:{films.title}</h4>
                <h5 class="card-text">Release Date:{films.release_date}</h5>
                <h5 class="card-text">Rotten Tomato Score:{films.rt_score}</h5>
                <h5 class="card-text">About This Film:{films.description}</h5>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Films;
