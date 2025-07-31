<template>
  <ion-page id="main-content">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-label>Connect to your account</ion-label>
        <ion-list>
          <ion-item>
            <ion-input label-placement="stacked" label="Email" type="email" @ionInput="validateEmail" required>
              <ion-icon slot="start" :icon="mailOutline" aria-hidden="true"></ion-icon>
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-input label-placement="stacked" label="Password" type="password" @ionInput="validatePassword" required>
              <ion-icon slot="start" :icon="lockClosedOutline" aria-hidden="true"></ion-icon>
            </ion-input>
          </ion-item>
        </ion-list>

        <ion-button @click="authenticateUser">Connect</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { lockClosedOutline, mailOutline } from 'ionicons/icons'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

let email = ''
let password = ''

const auth = getAuth()

const authenticateUser = () => {
  console.log('authenticate user...')
  console.log(email)

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
}

const validateEmail = (event) => {
  const value = event.target.value
  email = value
  console.log(value)

  /* this.$refs.input.$el.classList.remove('ion-valid')
  this.$refs.input.$el.classList.remove('ion-invalid') */

  if (value === '') return

  /* this.validateEmail(value)
    ? this.$refs.input.$el.classList.add('ion-valid')
    : this.$refs.input.$el.classList.add('ion-invalid') */
}

const validatePassword = (event) => {
  const value = event.target.value
  password = value
}

</script>

<style scoped>
#container {
margin-top: 10vh;
  text-align: center;
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

ion-menu::part(backdrop) {
  background-color: rgba(0, 0, 0, 0.266);
}

ion-menu::part(container) {
  border-radius: 0 20px 20px 0;

  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);
}
</style>