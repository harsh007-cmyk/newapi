const cors=require("cores")
const app=require('express')();
app.use(cors());
const PORT=process.env.PORT||3000;
const apiData=require("./data.json");
app.listen(PORT,
    ()=>console.log(`run on http://localhost:${PORT}`)
        );


app.get('/',(req,res)=>{
            res.send(apiData)
        })