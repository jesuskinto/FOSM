<template>
  <div>
    <BackNavbar path="/" />
    <div class="container">
      <div class="columns  is-multiline is-centered cont">
        <div v-for="item in items" :key="item.id" class="column is-narrow cont">
          <Card
            :title="item.title"
            :url="item.url"
            :to="{ name: 'activity', params: { id: item.id } }"
            :progress="item.progress"
            :isblock="item.isblock"
          />
        </div>
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
          { id: 1, title: 'Categoria 1', url: require('@/assets/images/comida.jpeg'), isblock: false, progress: 100 },
          { id: 2, title: 'Categoria 2', url: require('@/assets/images/animales.jpeg'), isblock: false, progress: 60 },
          { id: 3, title: 'Categoria 3', url: require('@/assets/images/colores.jpeg'), isblock: true, progress: 0 },
          { id: 4, title: 'Categoria 4', url: require('@/assets/images/semana.jpeg'), isblock: true, progress: 0 },
          { id: 5, title: 'Categoria 5', url: require('@/assets/images/deportes.jpeg'), isblock: true, progress: 0 }
        ]
      }
    }
  }
</script>

<style>
.cont {
  margin-top: 20px;
}

.container {
  margin: auto;
  max-width: 200px;
}
</style>
