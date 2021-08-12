<template>
  <p>
    <button @click.prevent="disconect" type="submit" class="btn-disconect">
      <span class="cacher">aaaa</span
      ><i class="deco">
        <v-icon large color="white darken-2">
          mdi-cancel
        </v-icon>
      </i>
    </button>
  </p>
</template>

<script>
export default {
  name: "disconectbtn",
  methods: {
    disconect() {
      localStorage.clear();
      document.location.href = "http://localhost:8080/";
    },
  },
};
</script>

<style scoped>
.btn-disconect {
  padding: 5px;
  font-size: 10px;
  text-decoration: none;
  color: white;
  border: 0px solid;
  border-radius: 20px;
  cursor: pointer;
}
.btn-disconect:hover {
  opacity: 0.8;
  background: linear-gradient(black, teal);
  text-shadow: 2px 2px 2px black;
  box-shadow: 2px 2px 2px black;
  transition-duration: 0.15s;
}
.deco {
  font-size: 15px;
}
.cacher {
  /*je cache le texte du bouton pour WAVE*/
  display: none;
}
</style>