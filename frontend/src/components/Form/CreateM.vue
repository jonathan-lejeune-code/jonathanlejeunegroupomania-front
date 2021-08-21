<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-col class="mt-9">
  <span >Exprimez-vous</span><br>
    <v-text-field
      v-model="title"
      :counter="30"
      :rules="titleRules"
      label="titre"
       prepend-icon="mdi-pencil"
      required
    ></v-text-field>

    <v-textarea
          class="mx-2"
          label="Message"
          rows="1"
          :counter="250"
          prepend-icon="mdi-comment"
        ></v-textarea>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Envoyé
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="$refs.form.reset()"
    >
      clear
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-col>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      Title: '',
       titleRules: [
        v => !!v ,
        v => (v && v.length <= 10) ,
      ],
      
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style lang="scss" scoped>
span { /*titre, contenu... en gras */
  
  font-weight: bold;
  font-size: 30px;
}
</style>