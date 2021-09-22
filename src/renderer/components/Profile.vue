<template>
  <div>
    <BackNavbar path="/" />
    <div class="box">
      <section>
        <b-field label="Nombre">
          <b-input v-model="user.first_name"></b-input>
        </b-field>
        <b-field label="Apellido">
          <b-input v-model="user.last_name"></b-input>
        </b-field>
        <b-button @click="saveUser">Actualizar Perfil</b-button>
      </section>
    </div>
  </div>
</template>


<script>
import BackNavbar from './Common/BackNavbar'
export default {
  components: { BackNavbar },
  name: 'profile',
  data () {
    return {
      user: {
        first_name: '',
        last_name: '',
        date: ''
      }
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      this.$storage.get('fosm-progress', (error, data) => {
        if (!error && data.user) this.user = data.user
      })
    },
    success () {
      this.$buefy.toast.open({
        message: 'Datos actualizados correctamente!',
        type: 'is-success'
      })
      this.$router.go(-1)
    },
    createUser () {
      this.$storage.set('fosm-progress', { user: this.user }, error => {
        if (error) throw error
        this.success()
      })
    },
    updateUser (data) {
      data.user = this.user
      this.$storage.set('fosm-progress', data, error => {
        if (error) throw error
        this.success()
      })
    },
    saveUser () {
      this.$storage.get('fosm-progress', (error, data) => {
        if (error) this.createUser()
        else this.updateUser(data)
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
