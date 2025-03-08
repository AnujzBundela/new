// const express = require("express");
// const { handleContactForm } = require("../controllers/contactController");
// // const contactController = require("../controllers/contactController");


// const router = express.Router();

// router.post("/send", handleContactForm);

// module.exports = router;


const express = require("express");
const { handleContactForm } = require("../controllers/contactController");

const router = express.Router();

// Route for handling form submission
router.post("/send", handleContactForm);

module.exports = router;