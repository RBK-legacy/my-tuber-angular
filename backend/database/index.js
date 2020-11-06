const Sequelize = require('sequelize');


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "tuber",
  insecureAuth: true,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected successfully");
});

// get all drivers
const getAllDrivers = (callback) => {
  let syntax = `SELECT * FROM drivers`;
  connection.query(syntax, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

// get one driver
const getADriver = (email, callback) => {
  let syntax = `SELECT email FROM drivers WHERE email= '${email}' `;
  connection.query(syntax, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

// add new driver
const addNewDriver = (
  firstName,
  lastName,
  email,
  password,
  yearOfBirth,
  idCard,
  driveLicense,
  car,
  location,
  km,
  gender,
  rate,
  callback
) => {
  let syntax = `INSERT INTO drivers(firstName,lastName,email,password,yearOfBirth,idCard,driveLicense,car,location,km,gender,rate) VALUES('${firstName}','${lastName}','${email}','${password}',${yearOfBirth},${idCard},${driveLicense},'${car}','${location}',${km},'${gender}',${rate})`;
  connection.query(syntax, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

// put email password to the driver
const getEmailAndPassword = (email, password, callback) => {
  let syntax = `SELECT * FROM drivers WHERE email= '${email}' AND password = '${password}' `;
  connection.query(syntax, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

// history of driver
const getHistory = (driver_id, callback) => {
  let syntax = `SELECT * FROM history WHERE driver_id="${driver_id}"`;
  connection.query(syntax, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

// Getting hestory location of drivers
const createHistory = (longtitude, lattitude, idCard, callback) => {
  let syntax = `INSERT INTO history(longitude, lattitude,driver_id) VALUES ("${longtitude}","${lattitude}",(SELECT id FROM drivers WHERE idCard=${idCard}))`;
  connection.query(syntax, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};


//Getting a preview position for the online drivers
const getInfo = (email, info, callback) => {
  let syntax = ` UPDATE history SET available = '${info}' WHERE driver_id=(SELECT id FROM drivers WHERE email= '${email}')`;
  connection.query(syntax, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};


const sequelize = new Sequelize('tuber1', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'

});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    sequelize.sync();

    module.exports = sequelize;
