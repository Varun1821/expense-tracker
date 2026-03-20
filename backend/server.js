const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/expenseDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

const ExpenseSchema = new mongoose.Schema({
title:String,
amount:Number,
category:String
})

const Expense = mongoose.model("Expense", ExpenseSchema)

app.post("/addExpense", async (req,res)=>{

const expense = new Expense(req.body)
await expense.save()

res.json({message:"Expense Saved"})

})

app.get("/expenses", async (req,res)=>{

const data = await Expense.find()
res.json(data)

})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})