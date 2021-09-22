<template>
  <div>
    <BackNavbar path="/level" />
    <div class="box has-text-centered">
      <b-progress :type="getProgressValue === 100 ? 'is-success' : 'is-info'" :value="getProgressValue" />
      <b-carousel
        v-model="slide"
        animated="slide"
        :has-drag="false"
        :autoplay="false"
        :repeat="false"
        :indicator="false"
        :arrow="false"
        pause-info-type="is-primary">
        <b-carousel-item v-for="item in items" :key="item.index">
          <div>
            <h1 class="title">{{item.title}}</h1>
            <figure class="image">
              <img :src="require(`@/assets/images/${item.image}`)" alt="">
            </figure>
            <hr/>
            <p class="title is-6">¿Adivina la Palabra?</p>
            <b-field grouped :type="getValid">
              <b-input v-model="value" @keyup.native.enter="isValid(item.answer)"  placeholder="introduce la palabra" expanded />
              <p class="control">
                <b-button @click="isValid(item.answer)" :type="getValid" class="button is-primary">{{ getButtonMessage }}</b-button>
              </p>
            </b-field>
            <hr/>
            <b-button size="is-small"
              @click="setHelp(item.answer)"
              icon-left="question-circle">
              Pista
            </b-button>
            <h4>{{ help_value }}</h4>
          </div>
        </b-carousel-item>
        <b-carousel-item>
          <div>
            <h1 class="title">¡Felicidades!</h1>
            <figure class="image">
              <img :src="require('@/assets/images/aplauso.jpg')" alt="">
            </figure>
            <p>Completaste esta actividad con exito</p>
            <hr/>
            <b-button
              @click="$router.go(-1)"
              icon-left="arrow-left">
              Volver
            </b-button>
          </div>
        </b-carousel-item>
      </b-carousel>
    </div>
    <b-button size="is-small"
      @click="onSaveProgress"
      icon-left="question-circle">
      onSave
    </b-button>
    <b-button size="is-small"
      @click="onOpenProgress"
      icon-left="question-circle">
      onOpen
    </b-button>
  </div>
</template>


<script>
  import BackNavbar from './Common/BackNavbar'
  export default {
    components: { BackNavbar },
    name: 'level',
    data () {
      return {
        help_value: '',
        value: '',
        slide: 0,
        valid: '',
        items: [
          { index: 0, answer: 'Agua', image: 'agua.jpeg' },
          { index: 1, answer: 'Arepa', image: 'arepa.jpeg' },
          { index: 2, answer: 'Jugo', image: 'jugo.jpeg' },
          { index: 3, answer: 'Leche', image: 'leche.jpeg' },
          { index: 4, answer: 'Pan', image: 'pan.jpeg' }
        ]
      }
    },
    computed: {
      getProgressValue () {
        return this.slide * 100 / this.items.length
      },
      getButtonMessage () {
        if (this.valid) return 'Siguiente'
        return 'Verificar'
      },
      getValid () {
        if (this.valid === true) return 'is-success'
        if (this.valid === false) return 'is-danger'
        return ''
      }
    },
    methods: {
      isValid (answer) {
        if (this.valid) {
          this.nextSlide()
          return
        }
        this.valid = answer.toLowerCase() === this.value.toLowerCase()
      },
      nextSlide () {
        this.slide += 1
        this.clean()
      },
      clean () {
        this.help_value = ''
        this.value = ''
        this.valid = ''
      },
      setHelp (anwser) {
        if (this.help_value.length >= anwser.length) this.help_value = ''
        this.help_value = anwser.slice(0, this.help_value.length + 1)
      }
    }
  }
</script>

<style scoped>
.cont {
  margin-top: 10px;
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

.image img {
  height: 250px;
}

.box {
  margin: 20px auto;
  height: 590px;
  width: 500px;
}
</style>
