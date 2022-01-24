<template>
  <div>
    <BackNavbar path="/" />
    <div class="container">
      <div class="columns  is-multiline is-centered cont">
        <div
          class="column is-narrow cont"
          v-for="category in categories"
          :key="category.id"
          >
          <Card
            :title="category.title"
            :imgUrl="category.imgUrl"
            :to="{ name: 'activity', params: { category, levelId: $route.query.id } }"
            :complete="category.complete"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Card from './Common/Card'
  import BackNavbar from './Common/BackNavbar'
  import variables from '../variables'
  const { storeID } = variables
  
  export default {
    components: { Card, BackNavbar },
    name: 'level',
    data () {
      return {
        categories: [],
        isLoading: true
      }
    },
    methods: {
      getData () {
        const loading = this.$buefy.loading.open()
        this.$storage.get(storeID, (error, data) => {
          loading.close()
          if (error) this.globalErrorStore(error)
          else {
            const { id } = this.$route.query
            const categories = data.levels.find(level => level.id === Number(id)).categories || []
            this.categories = categories
          }
        })
      }
    },
    mounted () {
      this.getData()
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
