const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const mysql = require('mysql2');

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to db
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '!September03!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

//default response for any other requests (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

db.query('SELECT * FROM candidates', (err, rows) => {
    console.log(rows);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});