// imports express router and api routes 
const router = require("express").router();
const apiRoutes = require("./api");
// use express router for apiRoutes
router.use("./api", apiRoutes);
// exports express router for other files use
module.exports = router 