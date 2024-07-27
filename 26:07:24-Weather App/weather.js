const API_KEY = "168771779c71f3d64106d8a88376808a"

const userTab =  document.querySelector("[data-userWeather]")
const searchTab =  document.querySelector("[data-searchWeather]")
const userContainer = document.querySelector(".weather-container")
const searchForm = document.querySelector("[data-searchForm]")
const grantAccessContainer = document.querySelector(
    ".grant-location-container"
);
const loadingContainer = document.querySelector('.loadingContainer')
const userInfoContainer = document.querySelector(".userInfoContainer")
const notFound = document.querySelector('.errorContainer')
const errorBtn = document.querySelector('[data-errorButton]')
const errorText = document.querySelector('[data-errorText]')
const errorImage = document.querySelector('[data-errorImg]')

let currentTab = userTab;

currentTab.classList.add("currentTab")
//ek kam baki he


userTab.addEventListener('click', () => {
    switchTab(userTab);
});

searchTab.addEventListener('click', () => {
    switchTab(searchTab);
});

function switchTab(newTab) {
    
    //check if clickedTab is already selected
    if(currentTab != newTab){
        currentTab.classList.remove("currentTab");
        currentTab=newTab
        currentTab.classList.add("currentTab")

        // If Search Form not contains active class then add  [Search Weather]
        if(!searchForm.classList.contains("active")){
            searchForm.classList.add("active");
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
        }
        else {
            //ab muje yourweather visible karna he 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }        
    }
}

function getFromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("userCoordinates")

    // Local Coordinates Not present - Grant Access Container
    if (!localCoordinates) {
        grantAccessContainer.classList.add('active');
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchWeatherInfo(coordinates);
    }
}

async function fetchWeatherInfo(coordinates){
    const{ lat, lon } = coordinates

    // Remove Active Class from the Grant access Container
    grantAccessContainer.classList.remove('active')

    //loading
    loadingContainer.classList.add('active')

    //try-catch
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        if (!data.sys) {
            throw data;
        }
        
        loadingContainer.classList.remove('active');
        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);
    } 
    catch (error) {
        loadingContainer.classList.remove('active');
        //hw

        loadingContainer.classList.remove('active');
        userInfoContainer.classList.remove('active');
        notFound.classList.add('active');
        errorText.innerText = `${err?.message}`;
        errorBtn.style.display = "none";
    }
}

function renderWeatherInfo(weatherInfo){
    const cityName = document.querySelector('[data-cityName]');
    const countryFlag = document.querySelector('[data-countryFlag]');
    const description = document.querySelector('[data-weatherDesc]');
    const weatherIcon = document.querySelector('[data-weatherIcon]');
    const temp = document.querySelector('[data-temp]');
    const windspeed = document.querySelector('[data-windspeed]');
    const humidity = document.querySelector('[data-humidity]');
    const clouds = document.querySelector('[data-clouds]');

    cityName.innerText = weatherInfo?.name;
    countryFlag.src= `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    description.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp.toFixed(2)} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed.toFixed(2)} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity.toFixed(2)} %`;
    clouds.innerText = `${weatherInfo?.clouds?.all.toFixed(2)} %`;

}

const grantAccessButton = document.querySelector('[data-grantAccess]');

grantAccessButton.addEventListener('click', getLocation);

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        grantAccessButton.style.display = 'none';
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };
    sessionStorage.setItem("userCoordinates", JSON.stringify(userCoordinates));
    fetchWeatherInfo(userCoordinates);
}

// Search for weather

const searchInput = document.querySelector('[data-searchInput]')

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    if (searchInput.value === "") {
        return;
    }
    fetchSearchWeatherInfo(searchInput.value);
    searchInput.value = "";
})

async function fetchSearchWeatherInfo(city) {
    loadingContainer.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    notFound.classList.remove("active");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        if (!data.sys) {
            throw data;
        }
        loadingContainer.classList.remove("active");
        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);
    } catch (err) {
        loadingContainer.classList.remove('active');
        userInfoContainer.classList.remove('active');
        notFound.classList.add('active');
        errorText.innerText = `${err?.message}`;
        errorBtn.style.display = "none";
    }
}