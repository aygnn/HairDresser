const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv=require('dotenv')
const mongoose=require('mongoose')

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config()

PORT=process.env.PORT

url=process.env.CONNECTION.replace('<password>',process.env.PASSWORD)


const Schema = mongoose.Schema;

const product=new Schema({
    image:{type:String,required:true},

    name:{type:String,required:true},
    price:{type:String,required:true},
    stock:{type:Number,required:true}
})
1
const Product = mongoose.model("products", product);
mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
        app.listen(PORT,()=>{
           
                console.log('SERVER WORKING');
            
        })

    }
})

//get product
app.get('/',(req,res)=>{
    res.send('hello')
})

//add product

app.post('/products',(req,res)=>{
    let newproduct=new Product({
        image:req.body.image,

        name:req.body.name,
        price:req.body.price,
        stock:req.body.stock    
    })
    newproduct.save()
    res.send({message:'product added'})
})

//get pro

app.get('/products',(req,res)=>{
    Product.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//delete

app.delete('/products/:id',(req,res)=>{
    const {id}=req.params
    Product.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send({message:'product deleted'})
        }
        else{
            res.status(404).json({message:err})

        }
    })
})

//get by id

app.get('/products/:id',(req,res)=>{
    const {id}=req.params
    Product.findById(id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            res.status(404).json({message:err})

        }
    })
})