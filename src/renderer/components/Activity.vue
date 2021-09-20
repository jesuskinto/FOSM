<template>
  <div>
    <BackNavbar path="/level" />
    <b-carousel
      v-model="carousel"
      :animated="animated"
      :has-drag="drag"
      :autoplay="autoPlay"
      :pause-hover="pauseHover"
      :pause-info="pauseInfo"
      :pause-info-type="pauseType"
      :interval="interval"
      :repeat="repeat"
      @change="info($event)">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section class="hero is-medium is-bold">
          <div class="hero-body has-text-centered" style="padding-top: 50px;">
            <h1 class="title">{{carousel.title}}</h1>
            <figure class="image">
              <img id="slider" v-bind:src="carousel.url" class="is-rounded" alt="">
            </figure>
            <b-field label="¿Adivina la Palabra?" id="input" :type="valor">
            <!-- 
              is-success, is-danger, 
            -->
            <b-input :placeholder="carousel.title" maxlength="10" v-model="message"></b-input>
            </b-field >
            <p>El mensaje es: {{ database() }}</p>
            <br>
            <button @click="help" class="button is-danger">Ayuda</button>
            <figure class="image">
              <img id="pista" v-bind:src="pista" class="" alt="">
            </figure>
          </div>


        </section>
      </b-carousel-item>
  </b-carousel>
  </div>
</template>


<script>
  import BackNavbar from './Common/BackNavbar'
  export default {
    components: { BackNavbar },
    name: 'level',
    data () {
      return {
        carousel: 0,
        animated: 'slide',
        drag: false,
        autoPlay: false,
        pauseHover: false,
        pauseInfo: false,
        repeat: false,
        pauseType: 'is-primary',
        interval: 3000,
        message: '',
        valor: '',
        resultado: '',
        slider: 0,
        pista: '',
        json: [
          { grado: 0, Categoria: 1, Actividad: 1, Palabra: 'Agua', ayuda: require('@/assets/images/A.png') },
          { grado: 0, Categoria: 1, Actividad: 2, Palabra: 'Arepa', ayuda: require('@/assets/images/arepa.jpeg') },
          { grado: 0, Categoria: 1, Actividad: 3, Palabra: 'Jugo', ayuda: require('@/assets/images/jugo.jpeg') },
          { grado: 0, Categoria: 1, Actividad: 4, Palabra: 'Leche', ayuda: require('@/assets/images/leche.jpeg') },
          { grado: 0, Categoria: 1, Actividad: 5, Palabra: 'Pan', ayuda: require('@/assets/images/pan.jpeg') }
        ],
        carousels: [
          { title: 'Actividad 1', url: require('@/assets/images/agua.jpeg') },
          { title: 'Actividad 2', url: require('@/assets/images/arepa.jpeg') },
          { title: 'Actividad 3', url: require('@/assets/images/jugo.jpeg') },
          { title: 'Actividad 4', url: require('@/assets/images/leche.jpeg') },
          { title: 'Actividad 5', url: require('@/assets/images/pan.jpeg') }
        ]
      }
    },
    methods: {
      info (value) {
        this.slider = value
        this.message = ''
        this.pista = ''
      },
      database (message) {
        console.log('slider', this.slider)
        if (this.message === '') {
          this.resultado = ''
          this.valor = ''
        } else if (this.message === this.json[this.slider].Palabra) {
          this.resultado = 'Correcto'
          this.valor = 'is-success'
        } else {
          this.resultado = 'Incorrecto'
          this.valor = 'is-danger'
        }
        return this.resultado
      },
      help () {
        console.log('Ayuda')
        this.pista = this.json[this.slider].ayuda
      }
    }
  }
</script>

<style>
.cont {
  margin-top: 10px;
}

.image {
  height: 256px;
  max-width: 256px;
  margin: auto;
}

#slider {
  min-height: 256px;
}
#input {
  margin-top: 50px;
  margin-bottom: 0px;
}
#pista {
  margin-top: 20px;
}
</style>
