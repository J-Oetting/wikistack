const express = require("express");
const app = express();
const morgan = require("morgan");
const layout = require("./views/layout.js");
const {db, Page, User} = require('./models');

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    });

app.use(morgan("dev"));
app.use(express.static("/home/ec2-user/environment/PairExercises/wikistack/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send(layout());
});


const init = async () => {
    await db.sync({force: true});

    let PORT = 8080 ;
    
    app.listen(PORT, ()=>{
        console.log(`Server is listening on port ${PORT}`);
    });
    
} 

init();