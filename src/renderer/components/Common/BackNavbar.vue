<template>
  <b-navbar class="header-fixed bd-notification is-primary">
      <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: path }">
            <b-icon
              pack="fas"
              icon="arrow-left"
              size="is-medium">
            </b-icon>
          </b-navbar-item>
      </template>
    </b-navbar>
</template>

<script>
  export default {
    name: 'back-navbar',
    props: ['path']
  }
</script>

<style>
.card {
  min-width: 200px;
}
</style>




