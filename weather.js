let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let headz = document.querySelector('#headz');
let clrbtn = document.querySelector('#btn');
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

let API_key = "6d83156e4e40ca97d0c6924b832fe00c";


const data = async function (search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);
    error1.innerHTML = "";
    error2.innerHTML = "";

    if (jsonData.cod == 400) {
        error1.innerHTML = "Enter Location";
        image.src = "oops.png";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
    }
    if (jsonData.cod == 404) {
        error2.innerHTML = "Enter Right Location";
        image.src = "oops.png";
        city.innerHTML = search;
        temp.innerHTML = "";
        type.innerHTML = "";
    }

    headz.innerHTML = "";

    city.innerHTML = search;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    type.innerHTML = jsonData.weather[0].main;

    if (type.innerHTML == "Clouds") {
        image.src = "/Clouds.png"
    } else if (type.innerHTML == "Clear") {
        image.src = "/clear.png"
    } else if (type.innerHTML == "Rain") {
        image.src = "/rain.png"
    } else if (type.innerHTML == "Snow") {
        image.src = "/rain.png"
    } else if (type.innerHTML == "Haze") {
        image.src = "/haze.png"
    } else if (type.innerHTML == "Strom") {
        image.src = "/strom.png"
    } else if (type.innerHTML == "Mist") {
        image.src = "/mist.png"
    }
    input.value = ""
}

function myFun() {
    search = input.value;
    data(search)
}
