<template>
  <div v-if="this.$q.platform.is.mobile">
    <CVMobView />
  </div>

  <div v-else>
    <CVView />
  </div>
</template>

<script>
import CVView from "./view.vue";
import CVMobView from "./viewMob.vue";
export default {
  name: "curriculum",
  components: { CVView, CVMobView },
};
</script>

<style>
</style>