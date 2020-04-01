const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asana',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connected.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(4000, () => console.log('Server is runnig at port no : 4000'));


//Get all tasks
app.get('/tasks', (req, res) => {
    mysqlConnection.query('SELECT * FROM tasks WHERE status = 1 ', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Get a task
app.get('/tasks/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM tasks WHERE task_id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete a task
app.delete('/tasks/:id', (req, res) => {
    mysqlConnection.query('update tasks SET status = 0 WHERE task_id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert a task
app.post('/tasks', (req, res) => {
    let task = req.body;
    var sql = "Insert into tasks SET task_name = ?, task_description = ?, status = ?";
    mysqlConnection.query(sql, [task.name, task.description, 1], (err, rows, fields) => {
        if (!err)
            res.send('Inserted');
        else
            console.log(err);
    })
});

//Update a task
app.put('/tasks/:id', (req, res) => {
    let task = req.body;
    var sql = "update tasks SET task_name = ?, task_description = ? where task_id=?";
    mysqlConnection.query(sql, [task.name, task.description, req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
});
