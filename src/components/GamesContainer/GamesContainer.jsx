import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Games from "../Games/Games";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Loader } from "semantic-ui-react";
import BACKGROUND from './../../assets/home1.jpg'

const GamesContainer = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const genre = useParams();

  useEffect(() => {
    fetch(
      "https://api.rawg.io/api/games?page_size=50&key=74f43bc3e23a4ee9aba6d030c19eddd6"
    )
      .then((res) => res.json())
      .then((test) => {
        if (genre.genre.toLowerCase() === "allgames") {
          setGames(test.results);
        } else {
          const allgames = [];
          allgames.push(test.results);
          const gamesFiltered = [];
          allgames[0].forEach((game) => {
            if (
              game.genres.findIndex(
                (gen) => gen.name.toLowerCase() === genre.genre.toLowerCase()
              ) !== -1
            )
              gamesFiltered.push(game);
          });
          console.log(gamesFiltered);
          setGames(gamesFiltered);
        }
      })
      .finally(() => setLoading(false));
  }, [genre]);

  console.log(genre, typeof genre.name);


  return (
    <div className="w-full">
      <div className='fixed -z-50 bg-cover w-screen brightness-[0.2] lg:min-h-screen'><img src={BACKGROUND} alt="" className='w-screen min-h-screen lg:max-h-max object-cover'/></div>
      {loading ? (
        <Loader active />
      ) : (
        <div>
          <Navbar />
          <div className="min-h-screen w-full lg:w-4/5 lg:mx-auto mt-40 container">
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto lg:w-4/4 lg:justify-end">
              {games.map((game) => {
                return (
                  <Link to={`/allgames/${game.id}`}>
                    <Games game={game} key={game.id} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesContainer;
