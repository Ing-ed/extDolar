/*global chrome*/
import { useState, useEffect } from 'react'
import "./App.css"



function Form(){
  let [getDolars,setDolars] = useState(1);
  let [getValD, setValD] = useState(0)
  let [getValP, setValP] = useState(0)

  // useEffect(() =>{
  //   console.log("api",chrome);
  // },[])

  function onchange(evt){
    setValD(evt.target.value)
  }
  function onchange2(evt){
    setValP(evt.target.value)
  }
  useEffect(() =>{
    fetch("https://www.dolarsi.com/api/api.php?type=dolar").then(res => res.json())
    .then((res) => setDolars(res[0].casa.venta.replace(",",".")))
    // .then((res) => console.log(res[0].casa.venta))
    .catch((err) => console.log(err))
  },[])
  return(
    <section>
      <label>dolar - ${getDolars}</label>
      <div>
        <label>Dolar a pesos</label>
        <input onChange = {onchange} type='number' placeholder='u$s'/>
        <h3>a$r {(+getValD * +getDolars).toFixed(2)}</h3>
      </div>
      <hr/>
      <div>
        <label>Pesos a dolar</label>
        <input onChange = {onchange2} type = 'number' placeholder='a$r'/>
        <h3>u$s {(getValP / +getDolars).toFixed(2)}</h3>
      </div>
    </section>
  )
}

function App() {
  let jjjj = "Hola"
  // jjjj = getDolarOfi[0]["casa"]["venta"].split(",")[0]
    return(
      <Form/>
    )
}

export default App

// Authorization: BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTIyNTYxNzMsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlZG92aWNoaUBnbWFpbC5jb20ifQ.LoQdAKeT4ioTpM80qPuuI-ZVaGwRCvQtjSuM8foRwOIo0vL4V4NbeBiByrWqTs7xH5G8BOFyKDBhj-iJvlZoHw