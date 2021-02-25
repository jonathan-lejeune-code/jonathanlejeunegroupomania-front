const mysql = require ('mysql')

class UserModels  {
    constructor(){}
    signup(sqlInserts){
        let sql = 'INSERT INTO users VALUES(NULL, ?, ?, ?, ?, NULL)';
        sql = mysql.format(sql, sqlInserts);}
    login(sqlInserts){
            let sql = 'SELECT * FROM users WHERE email = ?';
            sql = mysql.format(sql, sqlInserts);}
    updateUser(sqlInserts){
                let sql = 'UPDATE users SET firstName = ?, lastName = ?, email = ? WHERE id = ?';
                sql = mysql.format(sql,sqlInserts);} 
    deleteUser(sqlInserts){
                    let sql = 'DELETE FROM users WHERE id = ?'; 
                    sql = mysql.format(sql,sqlInserts);}     
}
       
module.exports = UserModels;