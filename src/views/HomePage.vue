<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">My app</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
         <ion-card>
          <ion-card-header>
            <ion-card-title>Hello, {{ name }}!</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            The current temperature in {{ city }} is: {{ weatherDatas.bb_pos }}
            Horoscope: {{ horoscopeDatas.body }}
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

import { fetchWeatherApi } from 'openmeteo';

let name, birthDate, city, weatherDatas = {bb_pos: ''}, horoscopeDatas = {}

name = localStorage.getItem('name')
birthDate = localStorage.getItem('birthDate')
city = localStorage.getItem('city')

getHoroscopeDatas('scorpio').then(result => {
  horoscopeDatas = result.body
  console.log(result)
})

getWeatherDatas(city).then(result => {
  weatherDatas = result[0]
})

async function getWeatherDatas(city) {
  const params = {
	"latitude": 43.6043,
	"longitude": 1.4437
  }
  const url = "https://api.open-meteo.com/v1/forecast"

  try {
    return await fetchWeatherApi(url, params)
  } catch (error) {
    console.error(error.message)
  }
}

async function getHoroscopeDatas(sign) {
  const url = 'https://api.api-ninjas.com/v1/horoscope?zodiac=' + sign

  try {
    return await fetch(url)
  } catch (error) {
    console.error(error.message)
  }
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
</style>
