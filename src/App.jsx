import { useState } from 'react'
import './App.css'
import Modal from './components/Modal';

function App() {
  const [flg, setFlg] = useState(false);

  const onModal = () => {setFlg(true);}
  const offModal = () => {setFlg(false);}

  return (
    <>
      <h1>App</h1>
      <button onClick={onModal}>모달창 생성</button>
      { flg ? <Modal offModal={offModal} /> : null}
      
    </>
  )
}

export default App
