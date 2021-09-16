<template>
  <div>
    <BackNavbar path="/" />
    <div class="columns  is-mobile is-multiline is-centered cont">
      <div v-for="item in items" :key="item.id" class="column is-narrow cont">
        <router-link :to="{ name: 'activity', params: { id: item.id } }" >
          <Card :title="item.title" :url="item.url"/>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
  import Card from './Common/Card'
  import BackNavbar from './Common/BackNavbar'
  export default {
    components: { Card, BackNavbar },
    name: 'level',
    data () {
      return {
        items: [
          { id: 1, title: 'Categoria 1', url: require('@/assets/images/comida.jpeg') },
          { id: 2, title: 'Categoria 2', url: require('@/assets/images/animales.jpeg') },
          { id: 3, title: 'Categoria 3', url: require('@/assets/images/colores.jpeg') },
          { id: 4, title: 'Categoria 4', url: require('@/assets/images/semana.jpeg') },
          { id: 5, title: 'Categoria 5', url: require('@/assets/images/deportes.jpeg') }
        ]
      }
    }
  }
</script>

<style>
.cont {
  margin-top: 20px;
}
</style>
