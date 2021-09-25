const dateOfBirth = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#message");

function luckyOrNot(){
    const dob = dateOfBirth.value;
    const lucky = luckyNumber.value;
    if(dob && lucky > 0){
        console.log(dob, lucky)
        const total = sumOfBirth(dob);
        if(total % lucky === 0){
            message.innerText = lucky + " is a Lucky Number!! 🥳🥳🥳"
        }
        else{
            message.innerText = lucky + " is not that lucky!! 😔😔😔"
        }
    }
    else{
        message.innerText = "Please fill both the fields"
    }
}

function sumOfBirth(dob){
    dob = dob.replaceAll('-', '');
    var total = 0;
    for(let i=0; i<dob.length; i++){
        total = total + Number(dob.charAt(i));
    }
    return total;
}

checkBtn.addEventListener("click", luckyOrNot);