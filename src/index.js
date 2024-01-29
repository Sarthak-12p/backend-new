import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})



connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`SEVER IS RUNNING AT PORT : ${process.env.PORT}`);
    } )
})
.catch((err) =>{
    console.log("MONGO db failed !!!" , err);
})





// const app = express();

// (async () =>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//        app.on("error" , (error) => {console.log("ERRRR :", error)
//        throw error
//     });

    
//     app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`);
//     })

//     }
//     catch(error){
//         console.log("Error: " , error)
//         throw err
//     }
// })()