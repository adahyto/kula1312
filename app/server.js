const express = require("express");
const app = express();
// No "X-Powered-By: Express" in the answers
app.disable("x-powered-by");
const path = require("path");

app.use(express.static(__dirname + "/public"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(3009);
