const express = require("express");
const bodyParser = require("body-Parser");
const app = express();
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
var RoomDataAPI = require("./api/ManageRoomData");
var ConnectionAPI = require("./api/Connection");
const { emit } = require("nodemon");

//use API
//app.use("/Login",LoginAPI);
app.use("/RoomData",RoomDataAPI);
app.use("/Connection", ConnectionAPI)

//Socket
const io = require("socket.io")(server, { cors: { origin: "*" } });

io.on("connection", (client) => {
  client.on("data", function(resp,){
    let IP = JSON.stringify(resp.ip_address)
    console.log(IP);
  });
  

  client.on("disconnect", (response) => {
    console.log('Client Disconnectd...');
  })
});

