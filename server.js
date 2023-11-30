const express = require("express");
const usersRoutes = require("./src/users/routes");

const app = express();
const port = 3030;

app.use(express.json());

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://9qqfkwvjdd.ap-southeast-1.awsapprunner.com/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1/users", usersRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
