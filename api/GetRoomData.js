const express = require("express");
const router = express.Router();
const GetRoomData = require("../models/GetRoomData.js");

router.post("/GetRoomDataAll", async function (req, res, next){


    let allDataRoom = await getAllDataRoom();
        console.log("Data ",allDataRoom)
        res.json({data : allDataRoom});



})

async function getAllDataRoom(){
    return new Promise((resolve, reject)=>{
        try {
            GetRoomData.getAllDataRoom( (err, rows) => {
                if (rows != null){
                    resolve(rows);
                }else{
                    resolve(false);
                }
            });
        } catch (err){
            console.log(err);
            resolve(false);
        }
    })

}

module.exports = router;