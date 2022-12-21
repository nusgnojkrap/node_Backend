const expressApp = require("./express");
  
const { SERVER_PORT } = require("./const/const");
//const jsName = getCurrentFileName(PARENT_PATH);

expressApp.listen(SERVER_PORT, () => {
    //logger.info(jsName, null, `The Sejong RESTAPI service has been started. The port numbers are as follows: ${SERVER_PORT}`);
    //logger.info(jsName, null, `restAPI Service Start - port : 9997`)
    console.log("start server")
});
