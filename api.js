function getRate() {
    fetch("https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/")
    .then(function(response) {
    console.log(response);
    response.json().then((result)=>{
        console.log(result);

        // Post process the response
        // console.log(result[0].currencies[13]);  

        let allCurrencies = result[0].currencies;

        console.log(allCurrencies);
        let EurCurrency = "";
        console.log(EurCurrency);

        allCurrencies.forEach(currency => {
            if (currency.code == "EUR") 
                EurCurrency = currency;
            if (currency.code == "INR") 
                InrCurrency = currency;
        });
       
        

        document.getElementById('currRate').innerHTML = EurCurrency.rate;
        document.getElementById('currRate2').innerHTML = InrCurrency.rate;
      
      
        document.getElementById('currRate3').innerHTML = 
        document.getElementsByTagName("input")[0].value * EurCurrency.rate * 11.13 * InrCurrency.rate;


    });
})
.catch(function(message){ console.log(message)});

}

