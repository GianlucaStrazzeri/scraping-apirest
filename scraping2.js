const express=require("express");//requiero libreria express
const app=express();//inicializo express

const axios=require("axios");//requiero libreria axios
const cheerio=require("cheerio");//requiero libreria cheerio

const port=3000;//defino el puerto en el que quiero que escuche

app.use(express.json()); // Middleware para manejar datos JSON

const url=`https://elpais.com/ultimas-noticias/`//creo variable url para escrapear



app.get("/", async (req,res)=>{//Read de CRUD asincrono
    try{ //prueba
const response = await axios.get(url) //cuando recibas la información de la url crea la constante respuesta
const html=response.data// además crea una constante llamada html = a la información de la respuesta
const $=cheerio.load(html)//y una constante dolar para inicializar cheerio en la respuesta const html
//y poder modificar el dom

let noticias=[];//Creo un array vacío donde tendré que poner cada noticia

//la noticia estará en formato objeto así como pone en el readme
const noticia = {
    titulo: titulo,
    imagen: imagen,
    descripcion: descripcion,
    enlace: enlace,
  };

// Creo una constante elementos =cheerio( article con la clase c c-d c--m) que es lo que debe 
//aparecer en el inspector de elementos
const elementos = $('article.c.c-d.c--m');

//Itero sobre elementos para sacar un header.c_h , un p.c_d" enlace e imagen
elementos.each(elemento=>{
    const titulo=$(elemento.find( "header.c_h").text())//tengo que incluir $porque sino no puedo acceder al html utilizo el .find para buscar y luego tengo que decirle que tipo de documento es .text() 
    const descripcion=$(elemento.find("p.c_d").text())

})












//Envio a la pagina la respuesta que vaya a sacar desde el scrapping
        res.send(`<h1>Home</h1> <h2><a href="/scraping">Scraping</a></h2> ${$} `)
    } catch (error) {
        console.log(error)
    }
    })





app.listen(port,()=>{// Escucho la terminal en el puerto 3000
    console.log(`express escuchando en el puerto http://localhost:${port}`)
})

module.exports = {//exporto todo lo que he creado al exterior de este documento con un destructuring
    app,axios,cheerio,url,port
  };