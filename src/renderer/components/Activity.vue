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
          <div class="hero-body has-text-centered">
            <h1 class="title">{{carousel.title}}</h1>
            <b-input :placeholder="carousel.title"></b-input>
            <p>A link that <a href="#arrow">goes to arrow</a></p>
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
        carousels: [
          { title: 'Slide 1' },
          { title: 'Slide 2' },
          { title: 'Slide 3' },
          { title: 'Slide 4' },
          { title: 'Slide 5' },
          { title: 'Slide 6' }
        ]
      }
    }
  }
</script>

<style>
.cont {
  margin-top: 10px;
}
</style>
