const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const users = require('./users');
const drivers = require('./drivers')
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));


app.use('/users', users);
app.use('/drivers', drivers);

app.listen(port, () => {
	console.log(`server listening on port http://localhost:${port}`);
});
