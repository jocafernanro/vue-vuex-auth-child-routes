<template>
  <b-nav tabs>
    <b-nav-item to="/secret" exact-active-class="active">Pagina secreta</b-nav-item>
    <b-nav-item to="/secret/notes" exact-active-class="active">Notas secretas</b-nav-item>
    <b-nav-item @click="_logout">Cerrar sesión</b-nav-item>
  </b-nav>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations('auth', ['logout']),
    _logout() {
      this.logout;
      this.$router.push('/login')
    }
  }
};
</script>

<style>
</style>