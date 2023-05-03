//Getting Elements
const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl= document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");

const worthSecondEl= document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");


//Creating a function that will be called when an event is triggered
updateRate()

// Adding the api link
function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/10dc9b9ced52c075cd26aaae/latest/${currencyFirstEl.value}`)
    .then((res) =>res.json())
    .then((data) => {
        const rate =data.conversion_rates [currencySecondEl.value];
        console.log(rate);
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${ rate + " " 
        + currencySecondEl.value}`

        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
    })

}

//Adding event listeners
currencyFirstEl.addEventListener("change" , updateRate)

currencySecondEl.addEventListener("change" ,updateRate)

worthFirstEl.addEventListener("input" ,updateRate)


