<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-col class="mt-9">
  <span >Exprimez-vous</span><br>
    <v-text-field
      v-model="DataMessage.title"
      :counter="30"
      :rules="titleRules"
      label="titre"
       prepend-icon="mdi-pencil"
      required
    ></v-text-field>

    <v-textarea
          class="mx-2"
          label="Message"
          v-model="DataMessage.content"
          rows="1"
          :counter="250"
          prepend-icon="mdi-comment"
        ></v-textarea>

    <v-btn
     
      :loading="loading"
      :disabled="loading"
      color="teal"
      outlined
      class="mr-4"
      @click="validate"
    >
      Validate
      <v-icon
          dark
          right
        >
          mdi-checkbox-marked-circle
        </v-icon>
    </v-btn>

    <v-btn
      color="indigo"
      class="mr-4"
      outlined
      @click="$refs.form.reset()"
    >
      Reset Formulaire

      <v-icon>
          dark
          right
          mdi-reload
      </v-icon>
    </v-btn>

  </v-col>
  </v-form>
</template>

<script>


  export default {
    data: () => ({
      DataMessage: {
        title: null,
        content: null,
      },
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