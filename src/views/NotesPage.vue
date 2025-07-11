<template>
  <ion-page id="main-content">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Notes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">My app</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-textarea
          id="notes"
          :value="value"
          class="notes"
          placeholder="Type something here"
          :auto-grow="true"
        >
        </ion-textarea>
          <ion-grid>
            <ion-row>
              <ion-col><ion-button shape="round" @click="saveNotes">Save</ion-button></ion-col>
              <ion-col><ion-button shape="round" @click="eraseNotes">Erase all</ion-button></ion-col>
            </ion-row>
          </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonCol, IonContent, IonHeader, IonGrid, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/vue'

let value = localStorage.getItem('notes')

const saveNotes = () => {
  localStorage.setItem('notes', document.getElementById('notes').value)
}

const eraseNotes = () => {
  document.getElementById('notes').value = ''
  localStorage.setItem('notes', '')
}

</script>

<style scoped>
.notes {
  padding: 10px;
}
</style>
