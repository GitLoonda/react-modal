import { useState } from 'react'
import './App.css'

function App() {
  const posts = [
    '첫번째 글', '두번째 글', '세번째 글', '네번째 글'
  ]
  const [likes, setLikes] = useState([0, 0, 0]);

  const btnLike = (i) => {
    let copy = [...likes];
    copy[i] += 1;
    setLikes(copy);
  }
 
  return (
    <>
      <h1>App</h1>
      {
        posts.map((post, i) => {
          return (
          <p key={i}>{post}</p>
          )
        })
      }
      {
        likes.map((like, i) => {
          return (
            <div key={i}>
              <button onClick={() => btnLike(i)}>좋아요</button>
              <span>{likes[i]}</span>
            </div>
          )
        })
      }
    </>
  )
}

export default App
