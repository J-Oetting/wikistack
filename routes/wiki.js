const router = require("express").Router();
const layout = require("../views/layout.js");
const addPage = require("../views/addPage");
const { Page } = require("../models");

router.get("/", (req, res) => {
    res.send(layout());
});

router.post("/", async (req, res, next) => {
    let body = req.body;
    
    try {
        const page = await Page.create({
            title: body.title,
            content: body.content
        })
        
        res.redirect("/");
    
        
    } catch (error){
        next(error);
    }
    
    
});

router.get("/add", (req, res) => {
    res.send(addPage());
});

module.exports = router;
