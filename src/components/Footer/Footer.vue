<template>
  <v-card class="mt-10" height="auto">
    <v-footer v-bind="localAttrs" :padless="padless" fixed>
      <v-card flat tile width="100%" class="indigo  text-center">
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Grouposcord</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    padless: true,
    variant: "default"
  })
};
</script>

<style scoped lang="scss"></style>
