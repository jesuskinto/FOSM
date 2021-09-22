<template>
  <div>
    <Navbar />
    <div class="p20">
      <router-link :to="{ name: 'level', params: { id: 1 } }" class="box" tag="div" >Prescolar</router-link>
      <router-link :to="{ name: 'level', params: { id: 2 } }" class="box" tag="div" >Primer Grado</router-link>
      <router-link :to="{ name: 'level', params: { id: 3 } }" class="box" tag="div" >Segundo Grado</router-link>
      <router-link :to="{ name: 'level', params: { id: 4 } }" class="box" tag="div" >Tercer Grado</router-link>
      <router-link :to="{ name: 'level', params: { id: 5 } }" class="box" tag="div" >Cuarto Grado</router-link>
      <router-link :to="{ name: 'level', params: { id: 6 } }" class="box" tag="div" >Quinto Grado</router-link>
      <router-link :to="{ name: 'level', params: { id: 7 } }" class="box" tag="div" >Sexto Grado</router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from './Common/Footer'
  import Navbar from './Common/Navbar'
  export default {
    components: { Footer, Navbar },
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
