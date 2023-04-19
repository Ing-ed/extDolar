let puppeteer = require('puppeteer')
let scrap = async () =>{
    let browser = await puppeteer.launch({headless:false});
    let page = await browser.newPage();
    await page.goto("https://www.bna.com.ar/Personas");
    await page.screenshot({ path:"img.png"})
    let algo = await page.evaluate(() =>{
        
        let aa = document.querySelectorAll("#billetes table tbody tr td")
        let arr = []
        for (let elem of aa){
            arr.push(elem.innerHTML)
        }
        return arr
    })
    console.log(algo)
    await browser.close();
    // return data;
}
scrap().then((data) => console.log("data",data)).catch((err) => console.log(err))