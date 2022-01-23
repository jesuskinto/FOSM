<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img class="logo" :src="require(`@/assets/images/logo.png`)" alt="logo" />
        FOSM
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="router-link" :to="{ path: '/profile' }">
        Perfil
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
.navbar {
  position: sticky;
  top: 0;
}

.logo {
  margin-right: 10px;
}
</style>
