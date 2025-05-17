const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

const todo = [];

app.get("/todo", (req, res) => {

	res.header({
        "Access-Control-Allow-Origin": "http://localhost:5173",
    })
    .json({todo:todo});
});

app.post("/todo", (req, res) => {
	const body = req.body;
	todo.push({
        id:body.id,
        test:body.text,
        isCompleted: body.isCompleted
    });
	res.json({todo: todo});
});


app.listen(port, () => {
    console.log(`server listen on port ${port}`);
});