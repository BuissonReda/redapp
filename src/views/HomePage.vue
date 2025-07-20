<template>
  <ion-page id="main-content">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
         <ion-card>
          <ion-card-header>
            <ion-card-title>Hello, {{ name }}!</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <p class="temperature">The current temperature in {{ city }} is: {{ parseInt(currentTemperature) }}°</p>
            <p class="horoscope">Horoscope du {{ todayDate }}: {{ horoscope }}</p>
            <p class="text">Have a good day! 🌞</p>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { fetchWeatherApi } from 'openmeteo'

let name, birthDate, city, horoscope = ''
let weatherDatas = {}
let currentTemperature = ''
let todayDate = ''

let date = new Date()
let month = date.getMonth() + 1
todayDate += date.getDate() + '/' + month + '/' + date.getFullYear()
name = localStorage.getItem('name')
birthDate = localStorage.getItem('birthDate')
city = localStorage.getItem('city')
let zodiacSign = getSignFromBirthDate(birthDate)

getHoroscopeDatas(zodiacSign).then(result => {
  horoscope = result.horoscope
})

getWeatherDatas(city).then(result => {
  const currentHour = new Date().getHours()
  currentTemperature = weatherDatas.hourly.temperature2m[currentHour]
})

async function getWeatherDatas(city) {
  const params = {
    "latitude": 43.6043,
    "longitude": 1.4437,
    "hourly": "temperature_2m"
  }

  const url = "https://api.open-meteo.com/v1/forecast"
  const responses = await fetchWeatherApi(url, params)

  const response = responses[0]

  const utcOffsetSeconds = response.utcOffsetSeconds()
  const hourly = response.hourly()!

  weatherDatas = {
    hourly: {
      time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
        (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
      ),
      temperature2m: hourly.variables(0)!.valuesArray()!,
    },
  }

  try {
    return await fetchWeatherApi(url, params)
  } catch (error) {
    console.error(error.message)
  }
}

async function getHoroscopeDatas(zodiacSign) {
  const url = 'https://api.api-ninjas.com/v1/horoscope?zodiac=' + zodiacSign

  try {
    return (await fetch(url)).json()
  } catch (error) {
    console.error(error.message)
  }
}

function getSignFromBirthDate(birthDate) {
  let date = new Date(birthDate)
  const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22]
  const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"]
  let month = date.getMonth()
  let day = date.getDate()

  if(month == 0 && day <= 20) {
    month = 11
  } else if(day < days[month]) {
    month--
  }

  return signs[month]
}

</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

.temperature {
  padding-bottom: 16px;
}

.horoscope {
  padding-bottom: 16px;
}

ion-menu::part(backdrop) {
  background-color: rgba(0, 0, 0, 0.266);
}

ion-menu::part(container) {
  border-radius: 0 20px 20px 0;

  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);
}
</style>