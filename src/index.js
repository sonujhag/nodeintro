const express = require("express");
// {} []

let products = [{id:1,name:"sonu",price:200},
            {id:2,name:"sunny",price:400},
            {id:3,name:"kaushal",price:300}
            ];

const app = express();
app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send(data);
// })

//query paramater
app.get("/",(req,res)=>{
    let {price}  = req.query;
    let result = products.filter((p)=>{
        if(price){
            return p.price ===parseInt(price);
        }
        return true;
    });
    res.send(result);
});

app.post("/user/login",(req,res)=>{
    console.log(req.body)
    res.send({message:"Registerd successfully"});
})



//path parameter
app.get("/:id",(req,res)=>{
    let {id} = req.params;
    let numId = parseInt(id);
    let product = products.find((p)=>(p.id === numId));
    res.send(product);
})


app.listen(8000,()=>{
    console.log("i am listening123");
}); 
