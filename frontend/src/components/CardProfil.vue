<template>
  <v-card class="" max-width="200" tile > 
    <v-img
      height="100%"
      src="../assets/black.jpg"
    >
      <v-row align="end" class="fill-height" >
        <v-col align-self="start" class="pa-0 mt-6 ml-6" cols="12" >
          <v-avatar class="profile" color="grey" size="80%" tile>
            <v-img
              src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Lejeune jonathan
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="my-3"></v-divider>
          <v-btn depressed rounded text @click.prevent="createMessage" color="white"> Crée Message </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn depressed rounded text @click.prevent="disconect" color="white" class="mb-10">
            déconnection
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    
  }),
  methods: {
    createMessage(){
      localStorage.clear();
      document.location.href = "http://localhost:8080/createMessage";
    },
    disconect() {
      localStorage.clear();
      document.location.href = "http://localhost:8080/";
    },
  },
};
</script>