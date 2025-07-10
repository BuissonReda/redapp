<template>
  <ion-page id="main-content">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Todos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">My app</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonMenu, IonMenuToggle,  IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const menuType = ref('overlay')

</script>

<style scoped>

</style>
