const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const rapatRoutes = require('./app/routes/meet.routes');
const notulenRoutes = require('./app/routes/notulen.routes');
// var whitelist = ['http://pjj2022-syahru.s3-website.ap-southeast-3.amazonaws.com', 'https://apr-pens.netlify.app', 'http://localhost:8200']

// var corsOptions = {
//     origin: "http://localhost:8200"
// };

// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions));

app.use(cors({credentials: true, origin:"http://localhost:8200"}))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
db.sequelize.sync();
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to syahru aplication" });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.use('/meet', rapatRoutes);
app.use('/notulen', notulenRoutes);

const PORT = process.env.PORT || 9200;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.create({
      id: 1,
      name: "kaprodi"
    });
   
    Role.create({
      id: 2,
      name: "kadep"
    });
   
    Role.create({
      id: 3,
      name: "wadir"
    });

    Role.create({
      id: 4,
      name: "director"
    });

    Role.create({
      id: 5,
      name: "staff"
    });

    Role.create({
      id: 6,
      name: "admin"
    });
}