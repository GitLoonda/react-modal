import { useState } from 'react'
import './App.css'

function App() {
  const data = [
    {
      name : '잠만보',
      type : '노말',
      url : '/images/014301.png'
    },
    {
      name : '깜지곰',
      type : '노말',
      url : '/images/021601.png'
    },
    {
      name : '이븐곰',
      type : '노말, 격투',
      url : '/images/076001.png'
    }
  ]
  const [name, setName] = useState(data[0].name);
  const [type, setType] = useState(data[0].type);
  const [url, setUrl] = useState(data[0].url);

  const setPokemon = (num) => {
    setName(data[num].name);
    setType(data[num].type);
    setUrl(data[num].url);
  }

  return (
    <>
      <div className="header">
        <img src='/images/icon_ball_b.png' alt='Pokeball'/>
        <h1>Pokemon Gallary</h1>
        <img src='/images/icon_ball_b.png' alt='Pokeball'/>
      </div>
     
      <div className="container">
        <div className="color-box">
          <img src={url} alt="Pokemon_image"/>
        </div>
        <div className="desc">
          <p className='pokeName'>{name}</p>
          <p className='pokeType'>타입 : {type}</p>
        </div>
      </div>
      <div className="btn-box">
        <button onClick={() => setPokemon(0)}>잠만보</button>
        <button onClick={() => setPokemon(1)}>깜지곰</button>
        <button onClick={() => setPokemon(2)}>이븐곰</button>
      </div>
    </>
  )
}

export default App
