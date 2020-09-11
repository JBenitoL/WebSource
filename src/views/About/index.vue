<template>
  <div>
    <AboutView />
  </div>
</template>

<script>
import AboutView from "./view.vue";

export default {
  name: "about",
  components: { AboutView },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>