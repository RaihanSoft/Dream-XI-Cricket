/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Available = ({ handlePlayer, players  }) => {



    return (
        <>

            <div>
                <h2 className="font-bold text-2xl ">Available Players</h2>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 mt-10 ">


                {players.map(player =>


                    <div key={player.playerId} className="card bg-base-100 border-2  ">

                        <figure className="h-60 p-4 " >
                            <img
                            className="object-cover h-full rounded-xl w-full "
                                src={player.image}
                                alt="Player" />
                        </figure>


                        <div className=" px-5 pb-5 space-y-3 ">


                            <h2 className="flex gap-2 items-center font-bold "><img className="h-8" src="https://image.shutterstock.com/image-vector/businessman-icon-260nw-564112600.jpg" alt="" /> {player.name} </h2>


                            <div className="flex justify-between">
                                <h2  className="flex gap-4 items-center"> <img className="w-5" src="https://img.icons8.com/?size=24&id=VmXtzMvxPd9w&format=png" alt="" /> {player.country}</h2>
                                <h2 className="bg-gray-100 px-4 p-1 rounded-lg " >{player.role}</h2>
                            </div>

                            <h2 className="font-bold" >Rating</h2>

                            <div className="flex justify-between">
                                <h2 className="font-medium" >{player.battingType}</h2>
                                <h2>{player.bowlingType}</h2>
                            </div>


                            <div className="flex justify-between items-center ">
                                <h2 className="font-medium">Price: ${player.biddingPrice}</h2>
                                <button onClick={() => handlePlayer(player)} className="btn hover:bg-[#E7FE29] ">Choose Player</button>
                            </div>



                        </div>
                    </div>




                )}


            </div>

        </>

    )
}

export default Available
