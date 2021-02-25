const mysql = require('mysql');


class ModModels {
    constructor() {}
    getAllPosts(){
        let sql = "SELECT posts.id, posts.userId, DATE_FORMAT(DATE(posts.date), '%d/%m/%Y') AS date, TIME(posts.date) AS time, posts.tittle, posts.content, users.lastName, users.firstName FROM posts JOIN users ON posts.userId = users.id ORDER BY posts.date DESC";
        sql = mysql.format(sql, sqlInserts);}
    deletePost(sqlInserts){
        let sql = 'DELETE FROM posts WHERE id = ?';
        sql = mysql.format(sql, sqlInserts);}
    getAllComments(){
        let sql = "SELECT comments.id, comments.userId, comments.postid, DATE_FORMAT(comments.date, '%d/%m/%Y à %H:%i:%s') AS date, comments.comContent, users.firstName, users.lastName FROM comments JOIN users on comments.userId = users.id ORDER BY date";
        sql = mysql.format(sql, sqlInserts);}
     deleteComment(sqlInserts){
        let sql = 'DELETE FROM comments WHERE id = ?';}

}

module.exports = ModModels;