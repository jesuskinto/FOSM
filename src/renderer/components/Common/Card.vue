<template>
  <div class="card">
    <router-link :to="to">
      <div class="card-image">
        <figure
         class="image is-4by3">
          <img :src="require(`@/assets/images/${imgUrl}`)" alt="category-image">
          <b-progress class="custom-progress" :type="complete ? 'is-success' : 'is-info'" :value="complete ? 100 : 0" size="is-small" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media-content">
          <p class="subtitle is-6" :title="title">{{ title }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['title', 'imgUrl', 'to', 'complete']
  }
</script>

<style scoped>
.card {
  min-width: 200px;
}
.subtitle {
  text-align: left  ;
  max-width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

<style>
.custom-progress .progress {
  border-radius: 0;
}
</style>




