const { execute } = require("../utils/execute");

/* GET users listing. */

async function insertHandler(req, res){

    let called = req.body.called
    let mcalled = req.body.mcalled
    let emergency = req.body.emergency
    let asteriskRX = `asterisk -rx "database put ${mcalled} code ${called}"`;
    let mcalledInsert = await execute(asteriskRX)
    
    if( mcalledInsert.includes("Usage")){
	//실패
	return res.json("false")
    }else{
	let asteriskRX_emergency = `asterisk -rx "database put ${called} emergency_call ${emergency}"`
	let emergencyInsert = await execute(asteriskRX_emergency);
	if (emergencyInsert.includes("Usage")){
	    //실패 이전꺼 rollback
	    let asteriskRB = `asterisk -rx "database del ${mcalled} code"`;
	    let RBresult = await execute(asteriskRB)
	    return res.json("false")
	}else{
	    //success
	    return res.json("success")
	}
    }
}

module.exports = insertHandler;
