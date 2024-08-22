const button = document.getElementById("get-location-button")

async function getdata(lat,long) {
  const Promise = await fetch (
    `http://api.weatherapi.com/v1/current.json?key=9c0ef70347584e218dd180652240608&q=${lat},${long} &aqi=yes`
  );
  return await Promise.json()
}


async function gotlocation(Position) {
  const result= await getdata(
    Position.coords.latitude,
    Position.coords.longitude
  );
  console.log(result);
}

function failedToGet() {
  console.log("There was some issue");
  
}

button.addEventListener('click',async () => {
  const reuslt = navigator.geolocation.getCurrentPosition(gotlocation, failedToGet ) 

})