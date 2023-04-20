// /*global chrome*/
// import { createProxyMiddleware } from 'http-proxy-middleware';
import { useState, useEffect } from 'react'
import  Cheerio  from 'cheerio';
import "./App.css"



function Form(){
  let [getOfi,setOfi] = useState(1);
  let [getBlue,setBlue] = useState(1);
  let [getValD, setValD] = useState(0)
  let [getValP, setValP] = useState(0)

  function onchange(evt){
    setValD(evt.target.value)
  }
  function onchange2(evt){
    setValP(evt.target.value)
  }

  // useEffect(() =>{
  let url = "https://api.estadisticasbcra.com/base_usd";
  // chrome.webRequest.onHeadersReceived.addListener(
  //   function(details){
  //     details.responseHeaders.push({name: "Access-Control-Allow_Origin",value:"*"});
  //     return {responseHeaders:details.responseHeaders};
  //   },
  //   {urls: ["<all_urls>"], tabId: -1},
  //   ["blocking","responseHeaders"]
  // )
    
  useEffect(() => {
    fetch("https://bna.com.ar/Personas")
    .then((r) => r.text())
    .then((r) => {
      let i = r.indexOf("Dolar U.S.A")
      let bloque = r.substring(i)
      let f = bloque.indexOf("tr")
      let bloque2 = bloque.substring(0,f)
      let arr = bloque2.split("\n")
      let val = arr[2].trim().replace("<td>","").replace("</td>","").replace(",",".")
      console.log(arr[2].trim().replace("<td>","").replace("</td>",""))
      console.log(arr, typeof arr)
      console.log(val,"val")
      console.log(bloque2)
      setOfi(val)
    })
    .then((r) => console.log(r))
  },[])


  useEffect(() =>{
    fetch("https://www.dolarsi.com/api/api.php?type=dolar").then(res => res.json())
    .then((res) => {
      // setOfi(res[0].casa.venta.replace(",","."))
      setBlue(res[1].casa.venta.replace(",","."))
  })
    .then((res) => console.log(res[0].casa.venta))
    .catch((err) => console.log(err))
  },[])
  return(
    <section>
      <label>dolar-Of - ${getOfi}</label>
      <label>dolar-Bl - ${getBlue}</label>
      <div>
        <label>Dolar a pesos</label>
        <input onChange = {onchange} type='number' placeholder='u$s'/>
        <h3>Oficial ${(+getValD * +getOfi).toFixed(2)}</h3>
        <h3>Blue ${(+getValD * +getBlue).toFixed(2)}</h3>
      </div>
      <hr/>
      <div>
        <label>Pesos a dolar</label>
        <input onChange = {onchange2} type = 'number' placeholder='a$r'/>
        <h3>Oficial ${(getValP / +getOfi).toFixed(2)}</h3>
        <h3>Blue ${(getValP / +getBlue).toFixed(2)}</h3>
      </div>
    </section>
  )
}

function App() {
  let jjjj = "Hola"
  // jjjj = getDolarOfi[0]["casa"]["venta"].split(",")[0]
    return(
      <>
        <Form/>
      </>
    )
}

export default App

// Authorization: BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTIyNTYxNzMsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlZG92aWNoaUBnbWFpbC5jb20ifQ.LoQdAKeT4ioTpM80qPuuI-ZVaGwRCvQtjSuM8foRwOIo0vL4V4NbeBiByrWqTs7xH5G8BOFyKDBhj-iJvlZoHw