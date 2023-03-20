var userService = require('./userService');

var getDataControllerfn = (request,response)=>
{
    console.log("Inside getDataController");
    var empDetails= userService.getDataFromDBService();
    response.send({"status":true,"data":empDetails});
    
}
module.exports = {
    getDataControllerfn
};