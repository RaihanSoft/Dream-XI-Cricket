/* eslint-disable react/prop-types */
import Available from "../Available/Available"
import Selected from "../Selected/Selected"


// eslint-disable-next-line react/prop-types
const AllPlayers = ({ handleIsActiveState, isActive , handlePlayer, playerQueue}) => {


    return (
        <div className="w-11/12 mx-auto">



            <div className="gap-6 flex justify-end  mt-5 sticky top-16 z-50">

                <button onClick={() => handleIsActiveState("Available")} className={`${isActive.Available ? "btn primary-color" : "btn"}`} >Available</button>
                <button onClick={() => handleIsActiveState("Selected")} className={`${isActive.Available ? "btn" : "primary-color btn"}`}>Selected ({playerQueue.length})</button>

            </div>



            {


                isActive.Available ? <Available handlePlayer={handlePlayer} /> : <Selected playerQueue={playerQueue} />


            }

        </div>
    )
}

export default AllPlayers
