const selectedRate = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".rating-submit-button");
const inputContainer = document.querySelector(".input-container");
const thankYouContainer = document.querySelector(".thank-you-state-component");
let rate = 0;
const rateHolder = document.querySelector(".selected-rate");

selectedRate.forEach(button =>{
    button.addEventListener("click", () =>{
        rate = button.textContent;
        button.classList.add("select");
    })
})

submitBtn.addEventListener("click", () =>{
    inputContainer.classList.add("not-show");
    rateHolder.textContent = rate;
    thankYouContainer.classList.add("show");
});