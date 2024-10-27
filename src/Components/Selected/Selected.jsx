/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Selected = ({ playerQueue, handleDelete, handleIsActiveState, isActive }) => {

    return (
        <>
            <div>
                <h2 className="font-bold text-2xl ">Selected Player ({playerQueue.length}/12)</h2>
            </div>

            {
                // eslint-disable-next-line react/prop-types 
                playerQueue.map((pq, index) => (
                    <div key={index} className="flex items-center justify-between border-2 rounded-xl mt-5 p-3">

                        <div className="flex gap-2 items-center justify-center">
                            <div>
                                <img className="w-16 rounded-xl" src={pq.image} alt="" />
                            </div>

                            <div>
                                <h2>{pq.name}</h2>
                                <p>{pq.role}</p>
                            </div>
                        </div>

                        <button onClick={() => handleDelete(pq.playerId)}>
                            <img src="https://img.icons8.com/?size=48&id=102550&format=png" alt="" />
                        </button>



                    </div>






                ))
            }


            <button onClick={() => handleIsActiveState("Available")} className={`${isActive.Available ? "btn primary-color" : " primary-color btn mt-5"}`} >Add More Player</button>



        </>
    )
}

export default Selected
