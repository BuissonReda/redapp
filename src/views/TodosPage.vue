<template>
  <ion-page id="main-content">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Todos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-modal ref="modal" trigger="open-modal">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()">Cancel</ion-button>
            </ion-buttons>
            <ion-title>Todo creation</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true" @click="createTodo" color="primary">Create</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-item>
            <ion-input
              label="Todo"
              label-placement="stacked"
              ref="input"
              type="text"
              placeholder="Write what you have to do here"
            ></ion-input>
          </ion-item>
        </ion-content>
      </ion-modal>

      <div id="container">
        <ion-list>
          <ion-item v-for="todo in todosAsList">
            <ion-label>{{ todo }}</ion-label>
            <ion-button @click="removeTodo(todo)">
              <ion-icon slot="icon-only" :icon="closeCircle" class="closeIcon"></ion-icon>
            </ion-button>
          </ion-item>
        </ion-list>
        <ion-button shape="round" id="open-modal" class="addTodo">Add todo</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { closeCircle } from 'ionicons/icons'
import { ref } from 'vue'

let todosInStorage = localStorage.getItem('todos') || null
let todosAsList = []
const modal = ref()
const input = ref()

const cancel = () => modal.value.$el.dismiss(null, 'cancel')

const createTodo = () => {
  const todo = input.value.$el.value
  let todosInStorage = localStorage.getItem('todos') || ''
  todosInStorage += todo + ';'
  localStorage.setItem('todos', todosInStorage)
  todosAsList.push(todo)
  console.log(todo)
  modal.value.$el.dismiss(name, 'confirm')
}

const removeTodo = (todo) => {
  let todosInStorage = localStorage.getItem('todos')?.split(';')
  console.log(todosInStorage)
}

todosAsList = todosInStorage ? todosInStorage.split(';') : []

</script>

<style scoped>
.addTodo {
  margin-top: 16px;
}

.closeIcon {
  font-size: 25px;
}
</style>
