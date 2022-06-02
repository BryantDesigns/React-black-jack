import React, {useState} from 'react'

const Hand = ({cards}) => {


    return(
        <>
        <div className='d-flex justify-content-start'>
        {cards.length > 0 && cards.map(x=> {
            return (
                <div>
                     <img src = {x.image} alt = {x.code}  className = 'w-50'/>
                </div>
            )
        })}
        </div>

        
        </>
    )
}
export default Hand
