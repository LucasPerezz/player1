import React from "react";
import { Card, Image } from "semantic-ui-react";

const Games = ({ game }) => {
  const metacritic_positive =
    "bg-white p-2 rounded-[50%] text-green-400 text-3xl absolute -top-4 -right-3 shadow-lg";
  const metacritic_variate =
    "bg-white p-2 rounded-[50%] text-yellow-400 text-3xl absolute -top-4 -right-3 shadow-lg";
  const metacritic_negative =
    "bg-white p-2 rounded-[50%] text-red-400 text-3xl absolute -top-4 -right-3 shadow-lg";

  return (
    <div>
      <Card color="yellow" className="w-3/4 md:w-full relative bg-dark">
        <Image
          src={game.background_image}
          ui={false}
          className="object-cover aspect-square"
        />
        <Card.Content>
          <Card.Header className="h-24 text-white">{game.name}</Card.Header>
          <Card.Meta>
            <span className="date text-gray-300">{game.released}</span>
          </Card.Meta>
          <div
            className={
              game.metacritic >= 70
                ? metacritic_positive
                : game.metacritic > 40 && game.metacritic < 70
                ? metacritic_variate
                : metacritic_negative
            }
          >
            {game.metacritic}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Games;
