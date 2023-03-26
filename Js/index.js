const increaseBalance = document.querySelector(".increase-btn") 
let balanceText = document.querySelector(".balance-count")
const info = document.querySelector(".info")
const inputIncrease = document.querySelector(".input-increase") 
const inputIncreaseBalance = document.querySelector(".input-increase-balance")
const emptyInputAlertText = document.querySelector("#error-increase-text")
const confirmIncreaseBtn = document.querySelector(".confirm-increase-btn")
const tbody = document.querySelector(".tbody")
const sort = document.querySelector(".sort")
const cardToCardBtn = document.querySelector(".card-to-card-btn")
const inputCard = document.querySelector(".input-card")
const increaseBalanceArea = document.querySelector(".increase-balance")
const confirmCardBtn = document.querySelector(".confirm-card-btn")
const inputCardNumber = document.querySelector(".input-card-balance")
const cardToCardArea = document.querySelector(".card-to-card")
const inputCardCount = document.querySelector(".input-card-count")
const communalArea = document.querySelector(".communal-area")
const inputCommunal = document.querySelector(".communal-balance")
const communalBtn = document.querySelector(".communal-btn")
const confirmCommunalBtn = document.querySelector(".communal-confirm-btn")
const selectedElement = document.querySelector("#myOptions")

let balance = 50 ;
const details = [ ]
increaseBalanceFunc()
cardToCardFunc()
communalFunc()
reverse()

function increaseBalanceFunc(){

increaseBalance.addEventListener("click",function(){
    inputIncreaseBalance.value = ""
    // emptyInputAlertText.classList.add("d-none")
    inputIncrease.classList.toggle("d-none")

    
})
confirmIncreaseBtn.addEventListener("click",function(){
    const detail = {
        realDate:"",
        category:"Increase Balance",
        count:Number(inputIncreaseBalance.value)
       }
     if(detail.count>0){
        let realDate  = new Date()
        let second = realDate.getSeconds()
        let minute =realDate.getMinutes()
        let hour = realDate.getHours()
        detail.realDate = hour + "." + minute + "."+second
         balance += detail.count
         info.classList.remove("d-none")
         balanceText.innerHTML = '<h4 class="balance-count">' + balance + ' manat</h4>';
         details.push(detail)
         tbody.innerHTML += `<td>${detail.realDate}</td><td>${detail.category}</td><td>${detail.count} manat</td>`
         inputIncrease.classList.add("d-none")
     }
     else{
        alert("Reqem yazin")
        //  emptyInputAlertText.classList.remove("d-none")
     }
    
 })

}

function reverse(){
sort.addEventListener("click",function(){


    if (!(sort.classList.contains("check"))){
        tbody.innerHTML = ""
        let cloneDetails  = [...details]
        cloneDetails.reverse()
        cloneDetails.forEach(function(obj){
        tbody.innerHTML += `<td>${obj.realDate}</td><td>${obj.category}</td><td>${obj.count} manat</td>`
        sort.classList.add("check")
            
        })
    }
    else{
       
        tbody.innerHTML = ""
        // let cloneDetails  = [...details]
        details.reverse()
        details.forEach(function(obj){
        tbody.innerHTML += `<td>${obj.realDate}</td><td>${obj.category}</td><td>${obj.count} manat</td>`
        })
    }
   
})
}

function cardToCardFunc(){

cardToCardBtn.addEventListener("click",function(e){
    e.preventDefault()
    // inputIncreaseBalance.value = ""
    increaseBalanceArea.classList.toggle("d-none")
    inputCard.classList.toggle("d-none")

})
confirmCardBtn.addEventListener("click",function(){
    const cardToCard = {
        realDate:"",
        category:"Card to Card",
        count:""
        
    }
    let inputCardCountCheck = Number(inputCardCount.value)
    if(inputCardNumber.value.length === 4){
        if(inputCardCountCheck>0){
             
        if(inputCardCountCheck > balance){
            alert("balansda kifayet qeder pul yoxdur")
        }
        else{
            // balance -=inputCardCountCheck
            let realDate  = new Date()
            let second = realDate.getSeconds()
            let minute =realDate.getMinutes()
            let hour = realDate.getHours()
            cardToCard.count = inputCardCountCheck
            cardToCard.realDate = hour + "." + minute + "."+second
            info.classList.remove("d-none")
             balance -= inputCardCountCheck
             balanceText.innerHTML = '<h4 class="balance-count">' + balance + ' manat</h4>';
             details.push(cardToCard)
             tbody.innerHTML += `<td>${cardToCard.realDate}</td><td>${cardToCard.category}</td><td>${cardToCard.count} manat</td>`
             inputCard.classList.toggle("d-none")
             increaseBalanceArea.classList.toggle("d-none")

            
        }
        
        }
        else{
            alert("Miqdari duzgun qeyd edin")
        }
    }
    else{
        alert("CARD NOMRESINI DAXIL EDIN")
    }
})

}

function communalFunc(){


communalBtn.addEventListener("click",function(e){
    e.preventDefault()
    communalArea.classList.toggle("d-none")
})


let selectedCheck = "Isig pulu";


selectedElement.addEventListener("change", function() {
    let selectedOption = selectedElement.options[selectedElement.selectedIndex];
    selectedValue = selectedOption.value;
    selectedCheck = selectedValue
   
  });

confirmCommunalBtn.addEventListener("click",function(){
    const camunal = {
        realDate:"",
        category:selectedCheck,
        count:""
    }
    console.log(camunal.category)

    let inputCommunalCheck = Number(inputCommunal.value)

   if(inputCommunalCheck>0){
    if(balance>inputCommunalCheck){
        let realDate  = new Date()
        let second = realDate.getSeconds()
        let minute =realDate.getMinutes()
        let hour = realDate.getHours()
        camunal.count = inputCommunalCheck
        info.classList.remove("d-none")
        camunal.realDate = hour + "." + minute + "."+second
         balance -= inputCommunalCheck
         camunal.category = selectedCheck
         balanceText.innerHTML = '<h4 class="balance-count">' + balance + ' manat</h4>';
         details.push(camunal)
         tbody.innerHTML += `<td>${camunal.realDate}</td><td>${camunal.category}</td><td>${camunal.count} manat</td>`
         inputCommunal.classList.toggle("d-none")

    }
    else{
        alert("Balansda kiafyet qeder pul yoxdur")
    }

   }
   else{
    alert("Bos daxil etmeyin")
   }
})

}


