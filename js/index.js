
window.addEventListener("load", () => {
    const buttons = document.querySelectorAll(".btn-rating");
    const btnSubmit = document.getElementById("btn-submit");

    function addClass() {
        buttons.forEach(button => {
            button.classList.remove('active');

            this.classList.add('active');
        });

        rateValue = this.value;
        localStorage.setItem("rate", this.value);
        btnSubmit.disabled = false;
    }

    buttons.forEach(button => button.addEventListener('click', addClass));

    btnSubmit.addEventListener("click", onSubmit);

    function onSubmit() {
        if(btnSubmit){
            window.location.href = "pages/rate.html";
        }
    }
})