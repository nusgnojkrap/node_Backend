const { execute } = require("../utils/execute");

/* GET users listing. */

async function deleteHandler(req, res){
    let called = req.body.called
    let mcalled = req.body.mcalled

    let asteriskRX = `asterisk -rx "database del ${mcalled} code"`;
    let mcalleddelete = await execute(asteriskRX)
    
    if (mcalleddelete.includes("Database entry removed")){
	//성공
	let asteriskRX_emergency = `asterisk -rx "database del ${called} emergency_call"`
	let emergencydelete = await execute(asteriskRX_emergency);
	if(emergencydelete.includes("Database entry removed")){
	    //성공
	    return res.json("success");
	}else{
	    let asteriskRB = `asterisk -rx "database put ${mcalled} code"`;
	    let RBresult = await execute(asteriskRB)
	    return res.json("false");
	}
    }else{
	return res.json("false")
    }
}

module.exports = deleteHandler;
