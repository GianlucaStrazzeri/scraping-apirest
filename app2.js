const { express,app,axios,cheerio,url,scrap,port } = require('./scraping2.js'); //exporto los modulos desde el otro js




app.get("/scraping",(req,res)=>{//Read de CRUD
    res.send(`<a href="/">Home</a> ${scrap}`)//me envia un objeto vacio
    })


