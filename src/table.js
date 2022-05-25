import React, {useState} from 'react'
import Hand from './Hand';
const Table = () => {
  const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

  const [deckID, setDeckID] = useState('')

  const [hand,setHand] = useState ([])

  const getNewDeck =() =>{
      fetch(url)
      .then(response => response.json())
      .then(data => {setDeckID(data.deck_id)});
  }


  const drawHand = () => {
    const apiURL = 'https://deckofcardsapi.com/api/deck/' + deckID+'/draw/?count=2'
    fetch(apiURL)
    .then(response => response.json())
    .then(data=> {setHand(data.cards); console.log(data)})
  }

  const drawNewCard = () =>{
    const apiURL = 'https://deckofcardsapi.com/api/deck/' + deckID+'/draw/?count=1'
    fetch(apiURL)
    .then(response => response.json())
    .then(data=> {setHand([...hand, data.cards [0] ]); console.log(data)})

  }
  
  return (

    <div>
        
        <button className='btn btn-secondary' onClick={getNewDeck}> Reshuffle deck</button>
        
        <br/>
        {deckID}
        <br/>
        <button className='btn btn-secondary' onClick={drawHand}>Start Hand</button>
        <button  className='btn btn-secondary' onClick ={drawNewCard}>Draw new card</button>
        <button className='btn btn-secondary' onClick={deletecard}>remove card</button>

        <Hand cards ={hand}/>
    </div>
  )
}
export default Table
