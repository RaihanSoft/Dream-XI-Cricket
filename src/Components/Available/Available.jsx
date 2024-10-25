
import { useEffect, useState } from "react"
const Available = ({handlePlayer}) => {

    const [players, SetPlayer] = useState([])

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => SetPlayer(data))

    }, [])

    return (
        <>

            <div>
                <h2 className="font-bold text-2xl ">Available Players</h2>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-3 gap-6 mt-10 ">



                {players.map(player =>


                    <div key={player.playerId} className="card bg-base-100 border-2 ">

                        <figure>
                            <img
                                src={player.image}
                                alt="Player" />
                        </figure>


                        <div className="card-body">


                            <h2> {player.name} </h2>


                            <div className="flex justify-between">
                                <h2>{player.country}</h2>
                                <h2>{player.role}</h2>
                            </div>

                            <h2>Rating</h2>

                            <div className="flex justify-between">
                                <h2>{player.battingType}</h2>
                                <h2>{player.bowlingType}</h2>
                            </div>


                            <div className="flex justify-between items-center ">
                                <h2>Price: ${player.biddingPrice}</h2>
                                <button onClick={()=>handlePlayer(player)} className="btn">Choose Player</button>
                            </div>



                        </div>
                    </div>




                )}


            </div>

        </>

    )
}

export default Available
