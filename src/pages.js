const barbers = [
    {
        name: 'Diogenes Woods',
        avatar: 'https://avatars0.githubusercontent.com/u/68401286?s=460&u=3e1d89dc810f49bad0d7c5fe3d5f028db9e2b270&v=4',
        especialidade: 'Barba / Bigode'
    },
    {
        name: 'Daniel Woods',
        avatar: 'https://avatars0.githubusercontent.com/u/68401286?s=460&u=3e1d89dc810f49bad0d7c5fe3d5f028db9e2b270&v=4',
        especialidade: 'Barba / Bigode'
    }

]

const Database = require('./database/db');

// function of page-home
function pageHome(req, res){
    return res.render("index.html")
}

// function of page-barber
function pageBarber(req,res){
    return res.render("page-barber.html", { barbers })
}

//function of page-client 
function pageRegisterSchedule (req,res) {
    return res.render("page-registerSchedule.html" , { barbers })
}

//funtion of page-registerBarber
function pageRegisterBarber (req, res) {
    return res.render("page-registerBarber.html");
}

//function of page-sucess
function pageSucess (req,res) {
    return res.render("sucess.html")
}

async function saveClients (req,res){
    const createClients = require('./database/createClient.js'); 

    const clientsData = {
        name: req.body.name,
        telefone: req.body.telefone,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time
    }

    try {
        const db = await Database;
        await createClients(db, {clientsData});

        let queryString = "?name=" + req.body.name
        queryString += "&date=" + req.body.date
        queryString += "&time=" + req.body.time
        
        return res.redirect("/sucess" + queryString);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    pageBarber,
    pageRegisterSchedule,
    pageHome,
    pageRegisterBarber,
    saveClients,
    pageSucess
}