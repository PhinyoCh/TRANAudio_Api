const db = require("../dbconnection");

var GetRoomdata ={
    getAllDataRoom: function (callback){
        return db.query(
            "SELECT * FROM `room` AS r WHERE r.active = 0", 
            callback
        );
    }
}

module.exports = GetRoomdata;