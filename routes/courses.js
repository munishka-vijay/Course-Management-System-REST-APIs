const ex = require("express");
const { route } = require("express/lib/application");
const Course = require("../models/course")
const router = ex.Router();

//Creating the routers

//get all the courses
router.get("/",async (req,res) => {

    try {
        const courses =await Course.find(); //Once this is done, only then response will be sent
        res.json(courses);

    }
    catch(err){
        res.json(error);
    }

    

});


//get single course




//create course




//update course




//delete course


module.exports = router;