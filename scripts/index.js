// Store the wallet amount to your local storage with key "amount"


let wallet_amount = JSON.parse(localStorage.getItem("amount")) || []

let wallet_total =  document.getElementById("wallet")
wallet_total .innerText = wallet_amount

function addToWallet(){

 //  let wallet_amount = JSON.parse(localStorage.getItem("amount")) || []
     
   wallet_total .innerText = wallet_amount
    let input_amt = document.getElementById("amount").value 


   var total = Number( wallet_amount) + Number(input_amt);
 
   console.log(total)
       
    //let wallet_total =  document.getElementById("wallet")
     wallet_total .innerText = total
   
     localStorage.setItem("amount",JSON.stringify(total))
}
