
const buttons = document.querySelectorAll(".btn-rating");
const btnSubmit = document.getElementById("btn-submit");

const wrapperRating = document.getElementById("wrapper-rating");
const wrapperSelectedRate = document.getElementById("wrapper-selected-rate");

let rateValue = 0;

buttons.forEach((button) => {
    button.addEventListener("click", element => {
        rateValue = element?.target.value;
        localStorage.setItem("rate", rateValue);
        btnSubmit.disabled = false;
    })
})

btnSubmit.addEventListener("click", onSubmit);

function onSubmit() {
    if(Number(btnSubmit) !== 0){
        window.location.href = "pages/rate.html";
    }
}
