const express = require("express");
const app = express();

// 미들웨어
app.use(express.static(`${__dirname}/src/public`));

// 라우트
app.get("/", require("./src/routes/home"));

module.exports = app;
