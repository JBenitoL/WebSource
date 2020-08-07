<template>
  <div v-if="this.$q.platform.is.mobile">
    <AboutView />
  </div>

  <div v-else>
    <!-- <div class="row justify-center">
      <div class="col-2"></div>
      <div class="col-8">
        <AboutView />
      </div>
      <div class="col-2"></div>
    </div>-->
    <AboutView />
  </div>
</template>

<script>
import AboutView from "./view.vue";
export default {
  name: "about",
  components: { AboutView },
};
</script>

<style>
</style>