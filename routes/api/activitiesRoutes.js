const router = require("express").Router();
const activitiesController = require("../../controllers/activitiesController");

// Matches with "/api/activitiesRoutes" 
router.route("/")
    .get(activitiesController.findAll)
    .post(activitiesController.postEvent);

 // Matches with "/api/activitiesRoutes/:id" 
router.route("/:id")
    .delete(activitiesController.remove)


module.exports = router; 