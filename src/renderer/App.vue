<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import initialData from './initialData.json'
  export default {
    name: 'fosm',
    mounted () {
      this.$storage.get('fosm-progress', (error, data) => {
        if (error) this.createStorage()
      })
    },
    methods: {
      successInitialization () {
        this.$buefy.toast.open({
          message: 'Datos inicializados correctamente!',
          type: 'is-success'
        })
      },
      errorInitialization () {
        this.$buefy.toast.open({
          message: 'Hay un problema para inicializar los datos!',
          type: 'is-warning'
        })
      },
      createStorage () {
        this.$storage.set('fosm-progress', initialData, error => {
          if (error) this.errorInitialization()
          else this.successInitialization()
        })
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
