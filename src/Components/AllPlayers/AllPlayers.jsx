/* eslint-disable react/prop-types */
import Available from "../Available/Available"
import Selected from "../Selected/Selected"


// eslint-disable-next-line react/prop-types
const AllPlayers = ({ handleIsActiveState, isActive, handlePlayer, playerQueue, players, handleDelete }) => {


    return (
        <div className="w-11/12 mx-auto mt-5 font-medium">



            <div className=" flex justify-end  mt-5 sticky top-[90px] z-50">
                <p className="border-2 rounded-xl">

                    <button onClick={() => handleIsActiveState("Available")} className={`${isActive.Available ? " p-3 rounded-l-xl primary-color " : "p-3"}`} >Available</button>



                    <button onClick={() => handleIsActiveState("Selected")} className={`${isActive.Available ? "p-3" : "primary-color rounded-r-xl p-3"}`}>Selected ({playerQueue.length})</button>

                </p>
            </div>



            {


                isActive.Available ? <Available players={players} handlePlayer={handlePlayer} /> : <Selected handleDelete={handleDelete} playerQueue={playerQueue} handleIsActiveState={handleIsActiveState} isActive={isActive} />


            }

        </div>
    )
}

export default AllPlayers
