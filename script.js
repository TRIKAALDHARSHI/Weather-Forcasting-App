localStorage.setItem('tokyo', 'images/tokyo.jpg')
localStorage.setItem('germany', 'images/germany.jpg')
localStorage.setItem('usa', 'images/USA.jpeg')
localStorage.setItem('mumbai', '	images/mumbai.webp')
localStorage.setItem('paris', 'images/paris.webp')
localStorage.setItem('norway', 'images/norway.jpeg')
localStorage.setItem('poland', 'images/poland.jpg')
var cityname = "germany"
let cityseachbtn = document.getElementById('citysearchbtn')
let temp = document.getElementById('temp')
let city = document.getElementsByClassName('city')[0]
let humid = document.getElementById('humid')
let wind = document.getElementById('wind')
let imgIcon = document.getElementById('img-icon')
let sunrise = document.getElementById('sunrise')
let sunset = document.getElementById('sunset')
let city_pic = document.getElementsByClassName('city-pic')
let city_pic_img = document.getElementsByClassName('city-pic-img')
let disname = document.getElementById('disname')
city_pic[3].style.display = 'none'
city_pic[3].addEventListener('click', () => { checkWhether('tokyo') })
city_pic[2].addEventListener('click', () => { checkWhether('new york') })
city_pic[1].addEventListener('click', () => { checkWhether('paris') })
city_pic[0].addEventListener('click', () => { checkWhether('mumbai') })
let add_city = document.getElementsByClassName('add-city')[0]
add_city.addEventListener('click', () => {
  city_pic[3].style.display = 'flex'
  add_city.style.display = "none"
  city_pic_img[3].style.backgroundImage = `url(${localStorage.getItem(cityname)})`
  disname.innerHTML = cityname
})
cityseachbtn.addEventListener('click', () => {
  cityname = document.getElementById('cityname').value
  checkWhether(cityname)
})
checkWhether("mumbai")
async function checkWhether(x) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=` + x + "&appid=c022df1170e7135160c2c3c77a189a61")
  let data = await response.json()
  temp.innerHTML = data.main.temp
  city.innerHTML = data.name
  wind.innerHTML = data.wind.speed + " km/h "
  humid.innerHTML = data.main.humidity + " %"
  sunrise.innerHTML = setTime(data.sys.sunrise)
  sunset.innerHTML = setTime(data.sys.sunset)
  if (data.weather[0].main === 'Clear') {
    imgIcon.src = "images/clear.png"
  }
  else if (data.weather[0].main === 'Clouds') {
    imgIcon.src = "images/clouds.png"
  }
  else if (data.weather[0].main === 'Rain') {
    imgIcon.src = "images/rain.png"
  }
  else if (data.weather[0].main === 'Drizzle') {
    imgIcon.src = "images/drizzle.png"
  }
  else if (data.weather[0].main === 'Mist') {
    imgIcon.src = "images/mist.png"
  }
  else if (data.weather[0].main === 'Snow') {
    imgIcon.src = "images/snow.png"
  }
  else {
    imgIcon.src = "images/mist.png"
  }
}
function setTime(sec) {
  const timestamp = sec; // The Unix Epoch timestamp you provided
  const date = new Date(timestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const formattedTime = `${hours}:${minutes}`;
  return formattedTime
}


