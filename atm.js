let total=10000;
let info=document.getElementById("info");
let money=document.getElementById("money");
let rupee=document.getElementById("amount");
function deposit(){
    let amount=Number(document.getElementById("amount").value);
    if(amount<=0||document.getElementById("amount").value==""){
        info.innerHTML="Please enter valid amount"
    }else{
        total=total+amount;
        money.innerHTML= "₹"+ total;
        info.innerHTML="Amount Deposited Successfully!"
    }
    document.getElementById("amount").value="";
}
function withdraw(){
    let amount=Number(document.getElementById("amount").value);
    if(amount<=0||document.getElementById("amount").value==""){
        info.innerHTML="Please enter valid amount"
    }else if(amount>total){
        info.innerHTML="Insufficient Balance";
    }else{
        total=total-amount;
        money.innerHTML= "₹"+ total;
        info.innerHTML="Amount withdrawn Successfully!"
    }
    rupee.value="";
}
function balance(){
    money.innerHTML= "₹"+ total;
    info.innerHTML="Your Balance is: "+total;
}