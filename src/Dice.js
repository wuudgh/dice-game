import React, { useState } from 'react'

import Img1 from "./Images/Dice1-PNG.png";
import Img2 from "./Images/Dice2-PNG.png";
import Img3 from "./Images/Dice3-PNG.png";
import Img4 from "./Images/Dice4PNG.png";
import Img5 from "./Images/Dice5-PNG.png";
import Img6 from "./Images/Dice6-PNG.png";



const Dice = () =>{
   const diceImages =[
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
       
    ]
    console.log(diceImages[0])
    
    
    const [image1, setImage1] = useState(diceImages[0])
    const [image2, setImage2] = useState(diceImages[1])


   const rollDice = () => {
      const randomNum1 = Math.floor(Math.random ()* 6);
      const  randomNum2 = Math.floor(Math.random() * 6)
     setImage1(diceImages[randomNum1]);
     setImage2(diceImages[randomNum2]);

   }


  return (
    <div>
        
        <center>
            <img src ={image1} alt=""/>
            <img src ={image2} alt="" className=''/> <br/>
            <button type="button" onClick={rollDice}>ROLLDICE</button>

        </center>
        
    </div>

  )
}
export default Dice