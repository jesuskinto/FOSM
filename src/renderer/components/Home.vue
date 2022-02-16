<template>
  <div class="App">
    <Navbar />
    <div class="main-router p20">
      <router-link
        v-for="(level, index) in levels"
        :key="level.id"
        :to="{ name: 'level', query: { id: level.id } }"
        class="box level-box"
        tag="div" >
        <span>{{level.title}}</span>
        <figure class="image is-64x64 icon-level">
          <img :src="require(`@/assets/images/level_${index}.jpeg`)">
        </figure>
        </router-link>
    </div>
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
.level-box {
  height: 115px;
  vertical-align: middle;
}

.level-box span{
  vertical-align: middle;
  line-height: 74px;
}

.icon-level {
  border-radius: 15px;
  margin-right: 20px;
  float: left;
}

.App {
  background: hsla(76, 100%, 95%, 1);
  background: linear-gradient(90deg, hsla(76, 100%, 95%, 1) 0%, hsla(155, 73%, 75%, 1) 0%, hsla(160, 73%, 65%, 1) 18%, hsla(164, 95%, 43%, 1) 50%, hsla(187, 73%, 39%, 1) 100%);
  background: -moz-linear-gradient(90deg, hsla(76, 100%, 95%, 1) 0%, hsla(155, 73%, 75%, 1) 0%, hsla(160, 73%, 65%, 1) 18%, hsla(164, 95%, 43%, 1) 50%, hsla(187, 73%, 39%, 1) 100%);
  background: -webkit-linear-gradient(90deg, hsla(76, 100%, 95%, 1) 0%, hsla(155, 73%, 75%, 1) 0%, hsla(160, 73%, 65%, 1) 18%, hsla(164, 95%, 43%, 1) 50%, hsla(187, 73%, 39%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f8ffe5", endColorstr="#92EEC8", GradientType=1 );
  height: 100vh;
}

.p20 {
  margin: 20px;
}

.box {
  cursor: pointer;
  max-width: 500px;
  margin: auto;
}

.main-router {
  height: calc(100vh - 100px);
  overflow-y: scroll;
}
</style>
