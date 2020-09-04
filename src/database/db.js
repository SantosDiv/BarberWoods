const Database = require('sqlite-async');

function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS client (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            telefone TEXT,
            email TEXT,
            data TEXT,
            time TEXT
        );
    `)
}
module.exports = Database.open(__dirname + '/database.sqlite').then(execute);