const express = require("express");
const router = express.Router();

const homeHTML = `/Users/parkwoorim/Desktop/node/todolist/app/src/views/home.html`;

router.get("/", (req, res) => res.sendFile(homeHTML));

module.exports = router;
