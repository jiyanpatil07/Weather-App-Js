// 3fea97337b0bcfe5999130b96eb2b11b


let weather = {
    "apikey": "3fea97337b0bcfe5999130b96eb2b11b",
    fetchWeather: function (city) {

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)
            .then(response => response.json())
            .then(data => this.displayWeather(data));
    },
    displayWeather: function (data) {
        // console.log(data)

        const { name } = data;
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main;
        const { speed } = data.wind
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp
        document.querySelector(".humadity").innerText = "Humidity " + humidity + "%"
        document.querySelector(".wind").innerText = "wind spedd " + speed + "km/h"
        document.querySelector(".loading").classList.remove("loading")
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-box").value)
    }
}
document.querySelector(".search button").addEventListener("click", function () {
    weather.search()
})


// let weather = {
//     "apikey": "3fea97337b0bcfe5999130b96eb2b11b", 
//      fetchWeather: function () {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=3fea97337b0bcfe5999130b96eb2b11b")
//         .then((response) =>
//             // console.log("jiyab")
//             response.json()
//         ).then((data)=>{
//             console.log(data)

//         })
//     }

// }
