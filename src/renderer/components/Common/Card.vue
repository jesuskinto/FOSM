<template>
  <div class="card">
    <router-link :to="to">
      <div class="card-image">
        <figure
         class="image is-4by3">
          <img :src="require(`@/assets/${imgUrl}`)" alt="category-image">
          <b-progress class="custom-progress" :type="progress === 100 ? 'is-success' : 'is-info'" :value="progress" size="is-small" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media-content">
          <p class="subtitle is-6">{{ title }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['title', 'imgUrl', 'to', 'progress']
  }
</script>

<style scoped>
.card {
  min-width: 200px;
}
.subtitle {
  text-align: center;
}
</style>

<style>
.custom-progress .progress {
  border-radius: 0;
}
</style>




