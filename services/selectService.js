const { execute } = require("../utils/execute");

/* GET users listing. */

async function selectHandler(req, res){
    let asteriskRX = `asterisk -rx "database show"`;
    let selectDB = await execute(asteriskRX)
    let selectLine = selectDB.split("\r\n")
    obj = selectLine

    let result = {
	data : obj,
	result : "success",
    }
    return res.json(result)
}

module.exports = selectHandler;
