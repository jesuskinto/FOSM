<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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
    props: ['title']
  }
</script>

<style>
.card {
  min-width: 200px;
}
</style>




