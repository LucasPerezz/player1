import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import Navbar from '../Navbar/Navbar';


const GameDetail = () => {

  const gameId = useParams();
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${gameId.id}?key=74f43bc3e23a4ee9aba6d030c19eddd6`)
        .then(res => res.json())
        .then(data => setGame(data))
        .finally(() => setLoading(false))
    }, [gameId]);


  return (
    <>
    {loading ? <Loader active /> 
    :
    <>
    <Navbar />
    <div className='fixed top-0 -z-50 bg-cover w-screen brightness-[0.2] lg:min-h-screen'><img src={game.background_image_additional} alt="" className='w-screen min-h-screen lg:max-h-max object-cover max-h-max'/></div>
    <div className='w-4/5 flex flex-col items-center justify-center gap-4 lg:grid lg:grid-cols-2 lg:container m-auto min-h-screen'>
      <div className='w-3/4 mx-auto'>
        <img src={game.background_image} alt="" className='mx-auto'/>
      </div>
      <div>
          <h2 className='text-white font-bold mb-4'>{game.name} <span className='text-gray-400 text-xl ml-5'>{game.released}</span></h2>
          <p className='text-white mb-4'>VALORACION {game.metacritic}</p>
          <p className='text-white'>{game.description_raw}</p>
      </div>
    </div>
    </>
    }
    
    </>
  )
}

export default GameDetail