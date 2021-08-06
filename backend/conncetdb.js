let connectdb = mysql.createConnection({ 
    host: 'localhost', 
    user: 'root', 
    password: 'dragon29', 
    database: '../groupomania_database', 
    
});


connectdb.connect(function(err) { 
    if (err) throw err;
    console.log('Connecté!')
});