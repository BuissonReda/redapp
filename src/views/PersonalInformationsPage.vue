<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Informations</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Informations</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <form>
          <ion-list>
            <ion-item>
              <ion-input label="Name" name="formDatas.name" type="name" @ionInput="setName" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Birthday</ion-label>
              <ion-datetime-button datetime="datetime"></ion-datetime-button>
              <ion-modal :keep-contents-mounted="true">
                <ion-datetime id="datetime" presentation="date" name="formDatas.birthDate" @ionInput="setBirthDate"></ion-datetime>
              </ion-modal>
            </ion-item>
            <ion-item>
              <ion-input label="City" name="formDatas.city" @ionInput="setCity" required></ion-input>
            </ion-item>
          </ion-list>

          <ion-button shape="round" expand="block" @click="() => goToHome()">Done!</ion-button>
        </form>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const setName = (event) => {
  localStorage.setItem('name', event.target.value)
}

const setBirthDate = (event) => {
  localStorage.setItem('birthDate', event.target.value)
}

const setCity = (event) => {
  localStorage.setItem('city', event.target.value)
}

const goToHome = () => {
  router.push('/home')
}
</script>

<style scoped>
#container {
  text-align: left;
  padding: 3px;
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

.button {
  margin-top: 10px;
}
</style>
