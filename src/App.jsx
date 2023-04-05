import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let [getDolarOfi,setDolarOfi] = useState([]);
  let jjjj = "Hola"
  useEffect(() =>{
    fetch("https://www.dolarsi.com/api/api.php?type=dolar").then(res => res.json()).then((res) => setDolarOfi(res)).catch((err) => console.log(err))
  },[])
  console.log(getDolarOfi[0])
  return (
    <h1>{jjjj}</h1>
  )
}

export default App

// Authorization: BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTIyNTYxNzMsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlZG92aWNoaUBnbWFpbC5jb20ifQ.LoQdAKeT4ioTpM80qPuuI-ZVaGwRCvQtjSuM8foRwOIo0vL4V4NbeBiByrWqTs7xH5G8BOFyKDBhj-iJvlZoHw