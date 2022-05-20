const express = require("express");
const bodyParser = require("body-Parser");
const app = express();
const {createServer} = require("http");
const {Server} = require("socket.io");
const logger = require("morgan")

//listening port
const server = app.listen(5000, function() {
    console.log("Ready on port %d", server.address().port);
})

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(
        bodyParser.urlencoded({
            extended: false
        })
)

//require API
var LoginAPI = require("./api/Login");
var GetRoomDataAPI = require("./api/GetRoomData");
var ConnectionAPI = require("./api/Connection");

//use API
//app.use("/Login",LoginAPI);
//app.use("/GetRoomData",GetRoomDataAPI);
app.use("/Connection", ConnectionAPI)

//Socket
const httpServer = createServer();
const io = new Server(httpServer, {
  cors:{origin:"*"}
});

io.on("connection", (socket) => {
  console.log("socket on!!");
});

