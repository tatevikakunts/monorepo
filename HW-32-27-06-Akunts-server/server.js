const express = require("express")
const cors = require("cors")
const PORT = 8080
const db = require("./models")
//const bodyParser = require("body-parser")
const authRoutes = require("./routes/auth.routes")

const {authJwt} = require("./midddleware")

const app = express()

let corsOptions = {
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

db.sequelize.sync()

authRoutes(app)

require("./routes/user.routes")(app)
require("./routes/album.routes")(app)
require("./routes/photo.routes")(app)
require("./routes/post.routes")(app)

app.get("/", (req,res)=>{
    res.json({message:"Hello World"})
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})