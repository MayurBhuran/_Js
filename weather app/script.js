const button = document.getElementById("search-button")
const input = document.getElementById("city-input")

const cityname = document.getElementById('city-name')
const citytime = document.getElementById('city-time')
const citytemp = document.getElementById('city-temp')


async function getdata(cityname) {
  const Promise = await fetch (
    `http://api.weatherapi.com/v1/current.json?key=9c0ef70347584e218dd180652240608&q=${cityname}&aqi=yes`
  );
  return await Promise.json()
}
button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getdata(value);
  cityname.innerText =`${result.location.name},${result.location.region} - ${result.location.country}`
  citytime.innerText = result.location.localtime;
  citytemp.innerText = result.current.temp_c;
  
})

//http://api.weatherapi.com/v1/forecast.json?key=930971becfa882053344220412&q=London&days=1&aqi=yes&alerts=yes