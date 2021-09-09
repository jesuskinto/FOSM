<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          >
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item href="#">
          Acerca de
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="p20">
      <router-link :to="{ name: 'level', params: { id: 1 } }" class="box" tag="div" >I'm in a box 1</router-link>
      <router-link :to="{ name: 'level', params: { id: 2 } }" class="box" tag="div" >I'm in a box 2</router-link>
      <router-link :to="{ name: 'level', params: { id: 3 } }" class="box" tag="div" >I'm in a box 3</router-link>
      <router-link :to="{ name: 'level', params: { id: 4 } }" class="box" tag="div" >I'm in a box 4</router-link>
      <router-link :to="{ name: 'level', params: { id: 5 } }" class="box" tag="div" >I'm in a box 5</router-link>
      <router-link :to="{ name: 'level', params: { id: 6 } }" class="box" tag="div" >I'm in a box 6</router-link>
    </div>
   </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style>
.p20 {
  margin: 20px;
}

.box {
  cursor: pointer;
  max-width: 500px;
  margin: auto;
}
</style>
