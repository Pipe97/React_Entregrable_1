import { useState } from 'react'
import phrases from "./assets/phrases.json";
import './App.css'
import { getRandomNumber } from './utils/getRandomNumbers';
import Phrase from './assets/components/Phrase/Phrase';
import Button from './assets/components/Button/Button';
import fortune1 from "./assets/fortune_1.png"
import fortune2 from "./assets/fortune_2.png"
const backgrounds = [fortune1,fortune2, "/fortune_3.png", "/fortune_4.png"]
function App() {
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length-1)]
  const getRandomBackground = () => backgrounds[getRandomNumber(backgrounds.length-1)]
  const [phraseObject, setphraseObject] = useState(getRandomPhrase());
  const  [background, setbackground] = useState(getRandomBackground());
  const ChangePhrase =() => {
    let newPhrase = getRandomPhrase()
   while (newPhrase===phraseObject) {newPhrase = getRandomPhrase()
       };
   setphraseObject(newPhrase);
 }
const changeBackground = () => {
  let newBackground = getRandomBackground()
 while (newBackground===background)
   {newBackground = getRandomBackground()
   };
setbackground(newBackground);
}
const handlerClick = () => {
  changeBackground()
  ChangePhrase()
}
return (
  <div className='container_app'style={{ backgroundImage:`url(${background}`}}>
      <h1>INFOCELEBRITY</h1>
     <Phrase phrase={phraseObject.quote}/>
     <p>
      Author: <mark>{phraseObject.author}</mark> 
      </p>
      <div className='btn_container'>
      <Button handlerClick={handlerClick}/>
      </div>
    </div>
  )
}
export default App
