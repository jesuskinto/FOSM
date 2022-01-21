<template>
  <div>
    <Navbar />
    <div class="main-router p20">
      <router-link
        v-for="level in levels"
        :key="level.id"
        :to="{ name: 'level', query: { id: level.id } }"
        class="box"
        tag="div" >
          {{level.title}}
        </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from './Common/Footer'
  import Navbar from './Common/Navbar'
  import variables from '../variables'
  const { storeID } = variables

  export default {
    components: { Footer, Navbar },
    name: 'home',
    data () {
      return {
        levels: []
      }
    },
    methods: {
      getData () {
        const loading = this.$buefy.loading.open()
        this.$storage.get(storeID, (error, data) => {
          loading.close()
          if (error) this.error(error)
          else { this.levels = data.levels }
        })
      }
    },
    mounted () {
      this.getData()
    }
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

.main-router {
  margin-bottom: 200px;
}
</style>
