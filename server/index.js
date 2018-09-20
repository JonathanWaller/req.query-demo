const express = require("express");
const bodyParser = require("body-parser");
const ctrl = require("./controllers/controller");

const app = express();
app.use(bodyParser.json());

app.get("/api/music", ctrl.getMusic);
app.get("/api/filter", ctrl.getFilteredSong);

const port = 3005;
app.listen(port, () => console.log(`hi i'm listening on ${port}`));
