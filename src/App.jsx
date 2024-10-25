import { useState } from "react"
import AllPlayers from "./Components/AllPlayers/AllPlayers"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Newsletter from "./Components/Newsletter/Newsletter"

const App = () => {

  const [playerQueue, SetPlayerQueue] = useState([])

  const handlePlayer = (player) => {

    const isExist = playerQueue.find(PreviousPlayers => PreviousPlayers.playerId === player.playerId)


    if (!isExist) {
      SetPlayerQueue([...playerQueue, player])
    }
    else {
      alert("Player Already Taken")
    }

  }


  const [isActive, SetIsActive] = useState({
    Available: true
  })


  const handleIsActiveState = (status) => {
    if (status === "Available") {
      SetIsActive({
        Available: true
      })

    }
    else {
      SetIsActive({
        Available: false
      })
    }


  }


  return (
    <div>

      <Navbar />
      <Hero />

      <AllPlayers playerQueue={playerQueue}  handlePlayer={handlePlayer} isActive={isActive} handleIsActiveState={handleIsActiveState} />

      <Newsletter />
      <Footer />

    </div>
  )
}

export default App
