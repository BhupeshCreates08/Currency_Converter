
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let select of dropdown){
  for(let currencycode in countryList){
    let OptiionNew = document.createElement("option");
    OptiionNew.innerHTML = currencycode;
    OptiionNew.value = currencycode;
    if(select.name === "from" && currencycode === "USD"){
      OptiionNew.selected = "selected";
    }
    else if(select.name === "to" && currencycode === "INR"){
      OptiionNew.selected = "selected";
    }
     select.append(OptiionNew);
  }
  select.addEventListener("change",(evt) => {
    updatedFlag(evt.target);
  });
}

const updatedFlag = (element) => {
  let currencycode = element.value;
  let countrycode = countryList[currencycode];
  let srcNew = `https://flagsapi.com/${countrycode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = srcNew;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amt = document.querySelector(".amount input");
  let amtVal = amt.value;
  if(amtVal === "" || amtVal < 1){
    amtVal = 1;
    amt.value = "1";
  } 
  
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  
  let response = await fetch(URL);
  let data = await response.json();
  
  let fromCurrencyKey = fromCurr.value.toLowerCase();
  let toCurrencyKey = toCurr.value.toLowerCase();
  let rate = data[fromCurrencyKey][toCurrencyKey];
  
  let FinalAmt = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${FinalAmt} ${toCurr.value}`;
});