<template>
  <div>
    <BackNavbar path="/" />
    <b-button class="reboot-button" type="is-danger" size="is-small" @click="resetProgress">
      Reiniciar Sistema
    </b-button>
    <div class="box">
      <section>
        <b-field label="Nombre">
          <b-input v-model="data.user.first_name"></b-input>
        </b-field>
        <b-field label="Apellido">
          <b-input v-model="data.user.last_name"></b-input>
        </b-field>
        <b-button @click="updateData">Actualizar Perfil</b-button>
      </section>
    </div>
  </div>
</template>


<script>
import initialData from '../initialData.json'
import BackNavbar from './Common/BackNavbar'
import variables from '../variables'
const { storeID } = variables

export default {
  components: { BackNavbar },
  name: 'profile',
  data () {
    return {
      data: initialData
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      const loading = this.$buefy.loading.open()
      this.$storage.get(storeID, (error, data) => {
        loading.close()
        if (error) this.globalErrorStore(error)
        else { this.data = data }
      })
    },
    resetProgress () {
      this.$storage.set(storeID, initialData, error => {
        if (error) this.globalErrorStore(error)
        else this.getData()
      })
    },
    success () {
      this.$buefy.toast.open({
        message: 'Datos actualizados correctamente!',
        type: 'is-success'
      })
      this.$router.go(-1)
    },
    updateData () {
      this.$storage.set(storeID, this.data, error => {
        if (error) this.globalErrorStore(error)
        this.success()
      })
    }
  }
}
</script>

<style scoped>
.box {
  width: 500px;
  margin: 50px auto;
}
</style>
