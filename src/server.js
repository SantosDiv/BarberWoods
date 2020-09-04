const express = require("express")
const server = express()

const {pageHome, pageBarber, pageRegisterSchedule, saveClients, pageSucess} = require('./pages');

//Config nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


//Servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))

// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

//rotas da aplicação
.get("/", pageHome)
.get("/page-barber", pageBarber)
.get("/page-registerSchedule", pageRegisterSchedule)
.get("/sucess", pageSucess)
.post("/save-client", saveClients)

.listen(5500)

//console.log(__dirname+"/views/index.html")