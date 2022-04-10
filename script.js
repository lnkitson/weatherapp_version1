let weather =
{
    apikey:" b54fe63ba93d200bc4d26e08aa57b85d",
    FetchWaether:function(city)
    {

        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&unit=metric&appid= "
        + this.apikey)
        .then((Response) => Response.json())
        .then((data) => this.displayweather(data) );
    },
    displayweather:function(data)
    {
        const{ name } = data;
        const{ icon, description} = data.weather[0];
        const{temp, humidity} = data.main;
        const{speed} = data.wind;
        document.querySelector(".city").innertext =" Weather in "+name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wm"+ icon + "@2x.png";
        document.querySelector(".description").innertext = description ;
        document.querySelector(".temp").innertext = temp + "°C" ;
        document.querySelector(".humidity").innertext = " Humidity"+humidity+"%" ;
        document.querySelector(".wind").innertext = "Wind Speed:" + wind + "km"  ;



    }
    
}