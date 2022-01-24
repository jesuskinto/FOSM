<template>
  <div>
    <BackNavbar />
    <div class="box has-text-centered">
      <b-progress
        :type="getProgressValue === 100 ? 'is-success' : 'is-info'"
        :value="getProgressValue"
      />
      <b-carousel
        v-model="slide"
        animated="slide"
        :has-drag="false"
        :autoplay="false"
        :repeat="false"
        :indicator="false"
        :arrow="false"
        pause-info-type="is-primary">
        <b-carousel-item v-for="activity in activities" :key="activity.id">
          <div>
            <h1 class="title">{{activity.title}}</h1>
            <figure class="image">
              <img :src="require(`@/assets/images/${activity.imgUrl}`)" alt="">
            </figure>
            <hr/>
            <p class="title is-6">¿Adivina la Palabra?</p>
            <b-field grouped :type="getValid">
              <b-input
                v-model="value"
                @keyup.native.enter="isValid(activity)"
                placeholder="introduce la palabra"
                expanded
              />
              <p class="control">
                <b-button
                  class="button is-primary"
                  :type="getValid"
                  @click="isValid(activity)"
                >
                  {{ getButtonMessage }}
                </b-button>
              </p>
            </b-field>
            <hr/>
            <b-button
              size="is-small"
              icon-left="question-circle"
              @click="setHelp(activity.answers[0])">
              Pista
            </b-button>
            <h4 class="tip">{{ help_value }}</h4>
          </div>
        </b-carousel-item>
        <b-carousel-item>
          <div>
            <h1 class="title">¡Felicidades!</h1>
            <figure class="image">
              <img :src="require('@/assets/images/clap.jpg')" alt="clap image">
            </figure>
            <p>Completaste esta actividad con éxito</p>
            <hr/>
            <b-button
              @click="goBack()"
              icon-left="arrow-left">
              Volver
            </b-button>
          </div>
        </b-carousel-item>
      </b-carousel>
    </div>
  </div>
</template>


<script>
  import BackNavbar from './Common/BackNavbar'
  import variables from '../variables'
  const { storeID } = variables

  export default {
    components: { BackNavbar },
    name: 'level',
    data () {
      return {
        help_value: '',
        value: '',
        slide: 0,
        valid: '',
        activities: this.$route.params.category.activities || []
      }
    },
    computed: {
      getProgressValue () {
        return this.slide * 100 / this.activities.length
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
      saveProgress () {
        const loading = this.$buefy.loading.open()
        this.$storage.get(storeID, (error, data) => {
          loading.close()
          if (error) this.globalErrorStore(error)
          else {
            const { levelId } = this.$route.params
            const { id: categoryId } = this.$route.params.category
            const categories = data.levels.find(level => level.id === Number(levelId)).categories || []
            const category = categories.find(category => category.id === Number(categoryId))
            category.complete = true
            this.updateData(data)
          }
        })
      },
      updateData (data) {
        this.$storage.set(storeID, data, error => {
          if (error) this.globalErrorStore(error)
          this.$router.go(-1)
        })
      },
      goBack () {
        this.saveProgress()
      },
      isValid (activity) {
        const { answers } = activity
        if (this.valid) {
          this.nextSlide()
          return
        }

        for (const answer of answers) {
          this.valid = answer.toLowerCase() === this.value.toLowerCase()
          if (this.valid) return
        }
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

.tip {
  margin-top: 5px;
}
</style>
