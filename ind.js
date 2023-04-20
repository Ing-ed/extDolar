// let cheerio = require('cheerio')
// chrome.webRequest.onHeadersReceived.addListener(
//     function(details){
//       details.responseHeaders.push({name: "Access-Control-Allow_Origin",value:"*"});
//       return {responseHeaders:details.responseHeaders};
//     },
//     {urls: ["<all_urls>"], tabId: -1},
//     ["blocking","responseHeaders"]
//   )
// fetch("https://api.estadisticasbcra.com/base_usd",{
//     headers:{
//         Authorization: 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTM0NTU3MjgsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlbWlkb3ZpY2hpQGdtYWlsLmNvbSJ9.TJoJpzV9IsX5gE2S2miQZGcDluwuvz2TGDSDJr1z1qhS9UeIG7WH_5kXehGzO2WU8Cs2_Vbco9Um7JCDoHv4sw'
//       } 
//   }).then((r) => r.json()).then((r) => console.log(r))
  
// import { Cheerio } from "cheerio";
fetch("https://bna.com.ar/Personas")
.then((r) => r.text())
.then((r) => {
        let i = r.indexOf("Dolar U.S.A")
        let bloque = r.substring(i)
        let f = bloque.indexOf("tr")
        let bloque2 = bloque.substring(0,f)
        let arr = bloque2.split("\n")
        let val = arr[2].trim().replace("<td>","").replace("</td>","")  //valor que me interesa -> precio de venta
        console.log(arr[2].trim().replace("<td>","").replace("</td>",""))
        console.log(arr, typeof arr)
        console.log(val,"val")
        console.log(bloque2)
    })
.then((r) => console.log(r))