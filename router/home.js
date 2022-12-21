const express = require("express");

const insertHandler = require("../services/insertService");
const selectHandler = require("../services/selectService");
const deleteHandler = require("../services/deleteService");

const pingpongHandler = require("../services/pingpongService");

const router = express.Router(); // get an instance of the express Router


router.post("/insert", insertHandler); // use the router to handle the route
router.post("/select", selectHandler);
router.post("/delete", deleteHandler);

router.post("/pingpong", pingpongHandler);
module.exports=router;
