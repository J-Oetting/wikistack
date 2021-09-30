const router = require("express").Router();
const layout = require("../views/layout.js");
const addPage = require("../views/addPage");

router.get("/", (req, res) => {
    res.send(layout());
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.send("this is a post");
});

router.get("/add", (req, res) => {
    res.send(addPage());
});

module.exports = router;
