const express = require("express")
require("dotenv").config({ path: "./config/.env" })
const mongoose = require("mongoose")
const { connectMongo } = require("./config/db")
connectMongo()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(cookieParser())

app.use(express.json())

app.use("/admin", require("./routers/adminRoutes"))
app.use("/user", require("./routers/userRoutes"))


mongoose.connection.on("open", () => {
    console.log("DB IS CONNECTED");
    app.listen(process.env.PORT, err => {
        if (err) {
            console.log("UNABLE TO START SERVER", err);
        } else {
            console.log(`SERVER RUNNING http://localhost:${process.env.PORT}`);
        }
    })
})

mongoose.connection.once("error", err => {
    console.log("DB NOT CONNECTED", err);
})




