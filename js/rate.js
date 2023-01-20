window.addEventListener("load", () => {

    const rateSelected = document.getElementById("rate-selected");
    rateSelected.innerText = localStorage.getItem("rate");
});
