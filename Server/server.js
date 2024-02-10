const express = require('express')
const app = express()

app.get("/", (req, res) =>{
    res.json({"users": ["user1", "user2", "user3"]})
})

app.listen(5000, () => {
    console.log("Server started listening on port 5000")
})