const express = require("express");
const bodyParser = require("body-Parser");
const { append } = require("express/lib/response");
const app = express();

const server = app.listen(3000, function() {
    console.log("Ready on port %d", server.address().port);
})

app.use(bodyParser.json());
app.use(
        bodyParser.urlencoded({
            extended: false
        })
)