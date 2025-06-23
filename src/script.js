let desc = document.getElementById("desc")
let amount= document.getElementById("amount")
const incomeBtn= document.getElementById("incomeBtn")
const expenseBtn =document.getElementById("expenseBtn")
const incomeList= document.getElementById("incomeList")
const expenseList= document.getElementById("expenseList")
const transactionList= document.getElementById("transactionList")
const balance= document.getElementById("balance")



let income= []

let expenses = []

//hämta info från input fält och belopp
function addTransaction(){
    const description=desc.value
    const amounValue= Number(amount.value)

    const transaction ={
        description: description,
        amount: amounValue,
        type: type //vet inte hur jag ska göra
        
    }
    
    if(transaction.type === "income"){
        income.push(transaction)
        renderList(incomeList,income)
    } else if(transaction.type ==="expense"){
        expenses.push(transaction)
        renderList(expenseList,expenses)
    }

desc.value=""
amount.value=""

}

function renderList(listElement, items){
    listElement.innerHTML=""
    for(let item of items){
        const li= document.createElement("li")
        li.textContent = `${item.description}: ${item.amount}kr`
        listElement.appendChild(li)
    }
}

incomeBtn.addEventListener("click",()=>{
    addTransaction("income")
})
expenseBtn.addEventListener("click", ()=>{
    addTransaction("expense")
})
console.log("Beskrivning:", desc.value);
console.log("Belopp:", amount.value);