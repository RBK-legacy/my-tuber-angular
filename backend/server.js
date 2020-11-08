const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./database/index');

app.use(express.json());
app.use(cors());

const port = 5000;

app.use("/drivers",require('./routes/driver'))
app.use("/history",require('./routes/history'))
app.use("/request",require('./routes/requests'))
app.use("/car",require('./routes/cars'))

app.listen(port, () => {
    console.log(`listening at port at http://localhost:${port}`);
})
