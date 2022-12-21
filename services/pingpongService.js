const { execute } = require("../utils/execute");

/* GET users listing. */

async function selectHandler(req, res){
    let resultobj = {}

    let asteriskLive = `ps -ef | grep asterisk | wc -l`
    let result = await execute(asteriskLive)

    if (result > 1){
	resultobj.result = "true"
	return res.json(resultobj)
    }else{
	resultobj.result = "false"
	return res.json(resultobj)
    }
}

module.exports = selectHandler;
