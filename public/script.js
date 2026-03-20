let expenses = []

const expenseList = document.getElementById("expenseList")
const totalDisplay = document.getElementById("total")
const transactionCount = document.getElementById("transactionCount")
const monthTotal = document.getElementById("monthTotal")

/* ---------------- CATEGORY CHART ---------------- */

const ctx = document.getElementById("expenseChart").getContext("2d")

let categoryChart = new Chart(ctx,{
type:"doughnut",
data:{
labels:[],
datasets:[{
data:[],
backgroundColor:[
"#ff6b6b",
"#4ecdc4",
"#45b7d1",
"#f9ca24",
"#a29bfe",
"#ff9ff3"
]
}]
},
options:{
responsive:true,
maintainAspectRatio:false
}
})

/* ---------------- MONTHLY CHART ---------------- */

const ctx2 = document.getElementById("monthlyChart").getContext("2d")

let monthlyChart = new Chart(ctx2,{
type:"bar",
data:{
labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
datasets:[{
data:new Array(12).fill(0),
backgroundColor:"#667eea"
}]
},
options:{
responsive:true,
maintainAspectRatio:false
}
})

/* ---------------- LOAD EXPENSES FROM MONGODB ---------------- */

async function loadExpenses(){

try{

const res = await fetch("http://localhost:3000/expenses")

const data = await res.json()

expenses = data.map(e => ({
title: e.title,
amount: e.amount,
category: e.category,
month: new Date().getMonth()
}))

renderExpenses()
updateSummary()
updateCharts()

}catch(err){

console.error("Error loading expenses:", err)

}

}

loadExpenses()

/* ---------------- ADD EXPENSE ---------------- */

async function addExpense(){

const title = document.getElementById("title").value
const amount = Number(document.getElementById("amount").value)
const category = document.getElementById("category").value

if(!title || !amount || !category){
alert("Fill all fields")
return
}

const expense = {
title,
amount,
category
}

try{

await fetch("http://localhost:3000/addExpense",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(expense)
})

/* reload from database */
loadExpenses()

document.getElementById("title").value=""
document.getElementById("amount").value=""
document.getElementById("category").value=""

}catch(err){

console.error("Error saving expense:", err)

}

}

/* ---------------- RENDER LIST ---------------- */

function renderExpenses(){

expenseList.innerHTML=""

expenses.forEach((e,index)=>{

const li = document.createElement("li")

li.innerHTML = `
${e.title} - ₹${e.amount}
<button onclick="deleteExpense(${index})">Delete</button>
`

expenseList.appendChild(li)

})

}

/* ---------------- DELETE (UI ONLY) ---------------- */

function deleteExpense(i){

expenses.splice(i,1)

renderExpenses()
updateSummary()
updateCharts()

}

/* ---------------- SUMMARY ---------------- */

function updateSummary(){

let total = 0

expenses.forEach(e => total += e.amount)

totalDisplay.textContent = "₹" + total
transactionCount.textContent = expenses.length
monthTotal.textContent = "₹" + total

}

/* ---------------- UPDATE CHARTS ---------------- */

function updateCharts(){

let categoryTotals = {}

expenses.forEach(e=>{

if(!categoryTotals[e.category]){
categoryTotals[e.category] = 0
}

categoryTotals[e.category] += e.amount

})

categoryChart.data.labels = Object.keys(categoryTotals)
categoryChart.data.datasets[0].data = Object.values(categoryTotals)
categoryChart.update()

let monthlyTotals = new Array(12).fill(0)

expenses.forEach(e=>{
monthlyTotals[e.month] += e.amount
})

monthlyChart.data.datasets[0].data = monthlyTotals
monthlyChart.update()

}

/* ---------------- DARK MODE ---------------- */

const toggle = document.getElementById("darkToggle")

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){
toggle.textContent="☀ Light Mode"
}else{
toggle.textContent="🌙 Dark Mode"
}

})