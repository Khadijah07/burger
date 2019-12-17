var mysql = require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burger_db"
});
connection.connect(function (err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});
connection.connect();
module.exports = connection;

