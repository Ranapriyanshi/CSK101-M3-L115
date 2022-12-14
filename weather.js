//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
function gettingDate(offset){
  const date = new Date();
  var rana = date.getTime()+ date.getTimezoneOffset()*60000;
  var newVar = new Date(rana+3600000*offset)
  return newVar.toDateString();
}
function entireData(){
  var newvar2 = document.getElementById("input-box")
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newvar2.value}&appid=e5f27759d55b4f26b6e1c57d0de12fc5`)
  .then((resp)=>resp.json())
  .then((info)=>{
    let result= document.getElementById("completeCard");
    result.innerHTML= `
    
    <div id="content">
      <h1>${info.name},${info.sys.country}</h1>
      <h4>${gettingDate(info.timezone/3600)}</h4>
      <div id="weather">${Math.floor(info.main.temp-273.15)}°c</div>
      <h2>${info.weather[0].main}</h2>
      <h3>${Math.floor(info.main.temp_min-273.15)}°c / ${Math.floor(info.main.temp_max-273.15)}°c</h3>
  
    </div>
  `
  })
}
entireData();
