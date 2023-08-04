const submit = document.querySelector(".button");
const rateDisplay = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const number = document.querySelectorAll(".number")
const numberH2 = document.querySelectorAll(".number-h2")
const thankYou = document.querySelector(".thankyou")

submit.addEventListener('click', () => {
    rateDisplay.classList.add('hidden');
    thankYou.classList.remove('hidden');
    resetNumberClasses();
})

function resetNumberClasses() {
    number.forEach((num) => {
        num.classList.remove("button-active");
        num.querySelector(".number-h2").classList.remove("rated");
    });
}

number.forEach((num, index) => {
    num.addEventListener('click', () => {
        resetNumberClasses();
        num.classList.add("button-active");
        numberH2[index].classList.add("rated");
        const selectedValue = numberH2[index].textContent;

        rateValue.textContent = `${selectedValue}`;
    });
});

