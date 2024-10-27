import AllPlayers from "./Components/AllPlayers/AllPlayers"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Newsletter from "./Components/Newsletter/Newsletter"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [players, SetPlayer] = useState([])
  const [playerQueue, SetPlayerQueue] = useState([])

  const [price, SetPrice] = useState(0)


  const handleRemove = (id) => {
    const play = players.find((p) => p.playerId === id)
    SetPrice(play.biddingPrice + price)


  }


  const addMoney = (coin) => {
    toast.success("Credit Added to your Account", { position: "top-center" });

    const newPrice = price + Number(coin)
    SetPrice(newPrice)
  }


  // !Delete 
  const handleDelete = (id) => {
    handleRemove(id)
    const updatedQueue = playerQueue.filter(player => player.playerId !== id);
    SetPlayerQueue(updatedQueue);
    toast.warn("Remove Player");
    
  };



  useEffect(() => {
    fetch('player.json')
      .then(res => res.json())
      .then(data => SetPlayer(data))

  }, [])


  const handlePlayer = (player) => {
    console.log(player)
  
  

    const isExist = playerQueue.find(PreviousPlayers => PreviousPlayers.playerId === player.playerId)

    



    if (!isExist) {
      if (price <player.biddingPrice) {
        toast.error("Not enough coins to select this player!", { position: "top-center" });
      }
      else if(playerQueue.length>=6){
        toast.error("You Can't Select More Then 6 Players", { position: "top-center" });
       
        return


      }
  
      else {
        SetPlayerQueue([...playerQueue, player])
        SetPrice(price - player.biddingPrice)
        toast.success("Congrates! "+ `${player.name}` + " is now in your squad", { position: "top-center" });
     
          
  
      }
    }
    else {
      
      toast.error("Player Already Taken")

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
      
      if(status === "AddMore"){

        SetIsActive({
          Available: false
        })


      }



    }
    else {
      SetIsActive({
        Available: false
      })
    }


  }


  return (
    <div>
      <ToastContainer />

      <Navbar price={price} />
      <Hero addMoney={addMoney} />

      <AllPlayers handleDelete={handleDelete} players={players} playerQueue={playerQueue} handlePlayer={handlePlayer} isActive={isActive} handleIsActiveState={handleIsActiveState} />

      <Newsletter />
      <Footer />

    </div>
  )
}

export default App
