import React, { useState } from "react";
import "./styles.css";

let dataBase = {
  Comedy: [
    { name: "Ace Ventura", imdb: "8.5", src: "/Images/aceVentura.jpg" },
    { name: "The Mask", imdb: "8.9", src: "/Images/themask.jpg" },
    { name: "Shazam", imdb: "8.3", src: "/Images/shazam.jpg" }
  ],

  Horror: [
    { name: "The Conjuring", imdb: "8.4", src: "/Images/conjuring.jpg" },
    { name: "IT", imdb: "4.5", src: "/Images/it.jpg" },
    { name: "The Grudge", imdb: "7.5", src: "/Images/grudge.jpg" }
  ],

  SciFi: [
    { name: "Inception", imdb: "8.6", src: "/Images/inception.jpg" },
    { name: "Interstellar", imdb: "8.9", src: "/Images/interstellar.jpg" },
    { name: "Arrival", imdb: "7.9", src: "/Images/arrival.jpg" }
  ],

  Romance: [
    { name: "La La Land", imdb: "8.6", src: "/Images/lalaland.jpg" },
    { name: "Me Before you", imdb: "7.8", src: "/Images/mebeforeyou.jpg" },
    { name: "Titanic", imdb: "8.8", src: "/Images/titanic.jpg" }
  ],

  Animation: [
    { name: "Big Hero 6", imdb: "8.6", src: "/Images/bighero6.jpg" },
    { name: "Toy story 4", imdb: "7.9", src: "/Images/toystory4.jpeg" },
    { name: "Cars", imdb: "8.7", src: "/Images/cars.jpg" }
  ]
};

let movies = Object.keys(dataBase);

export default function App() {
  const [movieGenre, setMovieGenre] = useState("Comedy");

  function clickEventHandler(genre) {
    setMovieGenre(genre);
  }

  return (
    <div className="App">
      <header
        style={{
          marginBottom: "10px",
          height: "70px",
          paddingTop: "5px",
          paddingBottom: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          // borderBottom: "1px solid white",
          outline: "3px solid black",
          outlineOffset: "-3px"
        }}
      >
        <h1 style={{ textAlign: "center" }}>Movie Recommendations</h1>
      </header>
      <h3 style={{ marginTop: "30px", marginBottom: "3px" }}>
        " I'll make him an offer he can't refuse "
      </h3>
      <small style={{ marginLeft: "150px", borderBottom: "1px solid white" }}>
        -(The Godfather,1972)
      </small>

      <div
        style={{
          margin: "50px",
          borderBottom: "1px solid white",
          borderTop: "1px solid white",
          padding: "15px"
        }}
      >
        {movies.map(function (e) {
          return (
            <button
              onClick={() => clickEventHandler(e)}
              key={e}
              style={{
                fontSize: "17px",
                marginRight: "20px",
                marginBottom: "15px",
                marginTop: "15px",
                borderRadius: "5px",
                padding: "6px"
              }}
            >
              {e}
            </button>
          );
        })}
      </div>

      <ul>
        {dataBase[movieGenre].map((e) => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "400px",
              listStyle: "none",
              padding: "30px",
              paddingRight: "70px",
              margin: "20px auto",
              border: "2px solid #413535"
            }}
          >
            <div>
              <img
                style={{
                  height: "240px",
                  width: "190px",
                  border: "1px solid white"
                }}
                src={e.src}
                alt="ERROR 404"
              />
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "10px"
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  borderBottom: "1px solid white",
                  marginBottom: "10px"
                }}
              >
                {e.name}
              </span>
              <span>IMDB Rating- {e.imdb}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
