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
            <b-input :placeholder="carousel.title" id="input" v-model="message"></b-input>
            <p>Escribe la Palabra</p>
            <br>
            <p>El mensaje es: {{ message }}</p>
            <br>
            <p><a href="#arrow">Ayuda</a></p>
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
        carousels: [
          { title: 'Actividad 1', url: require('@/assets/images/agua.jpeg') },
          { title: 'Actividad 2', url: require('@/assets/images/arepa.jpeg') },
          { title: 'Actividad 3', url: require('@/assets/images/jugo.jpeg') },
          { title: 'Actividad 4', url: require('@/assets/images/leche.jpeg') },
          { title: 'Actividad 5', url: require('@/assets/images/pan.jpeg') }
        ]
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
  margin-bottom: 20px;
}
</style>
