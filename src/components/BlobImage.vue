<template>
  <img :src="dataUrl" />
</template>




<script>
export default {
  props: { blob: null },
  data: () => {
    return { dataUrl: null };
  },
  mounted() {
    this.dataUrl = this.blob.reduce(
      (acc, cur) => acc + String.fromCharCode(cur),
      ""
    );
  },
};
</script>