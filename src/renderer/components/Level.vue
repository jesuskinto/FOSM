<template>
  <div>
    <BackNavbar path="/" />
    <div class="columns  is-mobile is-multiline is-centered cont">
      <div v-for="item in items" :key="item.id" class="column is-narrow cont">
        <router-link :to="{ name: 'activity', params: { id: item.id } }" >
          <Card :title="item.title" />
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
          { id: 1, title: 'title 1' },
          { id: 2, title: 'title 2' },
          { id: 3, title: 'title 3' },
          { id: 4, title: 'title 4' },
          { id: 5, title: 'title 5' },
          { id: 6, title: 'title 6' }
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
