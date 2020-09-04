module.exports = async function(db, { clientsData }){
    const insertedClient = await db.run(`
        INSERT INTO client (
            nome,
            telefone,
            email, 
            data,
            time
        ) VALUES (
            "${clientsData.name}",
            "${clientsData.telefone}",
            "${clientsData.email}",
            "${clientsData.date}",
            "${clientsData.time}"
        );
    `)
}