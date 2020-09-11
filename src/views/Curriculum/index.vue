<template>
  <div v-if="this.$q.platform.is.mobile">
    <CvViewMob />
  </div>

  <div v-else>
    <CvView />
  </div>
</template>

<script>
import CvView from "./view.vue";
import CvViewMob from "./viewMob.vue";

export default {
  name: "curriculum",
  components: { CvView, CvViewMob },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>