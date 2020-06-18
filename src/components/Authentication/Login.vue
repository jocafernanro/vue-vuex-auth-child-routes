<template>
  <b-form @submit.prevent="$emit('login')">
    <ValidationProvider rules="required|email" name="email" v-slot="{ valid, errors }">
      <b-form-group label="Email" description="Los datos son privados">
        <b-form-input
          type="email"
          autocomplete="off"
          v-model="user.email"
          name="email"
          placeholder="Introduce el email admin@vue.com"
          :state="errors[0] ? false : (valid ? true : null)"
        ></b-form-input>
        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
      </b-form-group>
    </ValidationProvider>

    <ValidationProvider rules="required|min:6" name="password" v-slot="{ valid, errors }">
      <b-form-group label="Password">
        <b-form-input
          type="password"
          autocomplete="off"
          v-model="user.password"
          name="password"
          placeholder="Introduce el password @Password1"
          :state="errors[0] ? false : (valid ? true : null)"
        ></b-form-input>
        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
      </b-form-group>
    </ValidationProvider>

    <b-button variant="primary" type="submit"
     :disabled="errors[0] || ! user.password">Iniciar sesión</b-button>
  </b-form>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import validateMixin from "@/mixins/validation";

export default {
  mixins: [validateMixin],
  components: {
    ValidationProvider
  },
  props: {
    user: {
      type: Object,
      required: true,
      validator: user => {
        if (!user.hasOwnProperty("email") || !user.hasOwnProperty("password")) {
          console.warn("Usuario no válido");
          return false;
        } else {
          return true;
        }
      }
    }
  }
};
</script>

<style>
</style>