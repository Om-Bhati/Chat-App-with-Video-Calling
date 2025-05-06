import express from "express"
import "dotenv/config" 
import authRoutes from "./routes/auth.route.js"

// instead of using previous methods we can also do : 
// import dotenv from "dotenv"
// dotenv.config() 

const app = express()
const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send("Hello from backend ... ") ;
})

// bad practice because 

// app.get('/api/auth/signup',(req,res)=>{
//     res.send("Signup route") ;
// })

// app.get('/api/auth/login',(req,res)=>{
//     res.send("Login route") ;
// })

// app.get('/api/auth/logout',(req,res)=>{
//     res.send("Logout route") ;
// })

app.use("/api/auth",authRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on PORT : http://localhost:${PORT}`);
})