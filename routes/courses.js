const ex = require("express");
const { route } = require("express/lib/application");

const router = ex.Router();

//Creating the routers

//get all the courses
router.get("/", (req,res) => {

    res.send("Hello, your courses are here")

});


//get single course




//create course




//update course




//delete course


module.exports = router;