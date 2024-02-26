const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Body parser middleware
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.status(201).send({msg : "Hello"});
});

app.get("/api/users", (request, response) => {
    response.send("hello from api users")
})

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})
