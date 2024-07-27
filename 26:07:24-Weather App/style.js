const API_KEY = "e862a1fa33084e8f0a466e54462daa3d";

function renderWeatherInfo(data){
        let newPara = document.createElement('p')
        newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
        document.body.appendChild(newPara)
}

async function fetchWeatherDetails(){
    let latitude = 15.3333;
    let longitude = 74.0833;

    try{
        let city = "surat ";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        
        const data = await response.json();
        console.log("Weather data:-> ", data);
    
        // let newPara = document.createElement('p')
        // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
        // document.body.appendChild(newPara)

        renderWeatherInfo(data);
    }

    catch(err){
        //handle error
    }

    
}

async function getCustomWeather(){
   try{
    let latitude = 21.1667;
    let longitude = 72.8333;
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        
        const data = await result.json();
        console.log("Weather data:-> ", data);
   }
   catch(err){
    console.log("ERROR AYA HE...", err)
   }
}


