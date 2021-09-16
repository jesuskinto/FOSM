<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img v-bind:src="url" alt="">
      </figure>
    </div>
    <div class="card-content">
      <div class="media-content">
        <p class="subtitle is-6">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['title', 'url']
  }
</script>

<style>
.card {
  min-width: 200px;
}
.subtitle {
  text-align: center;
}
</style>




