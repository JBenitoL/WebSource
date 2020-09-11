<template>
  <div v-if="this.$q.platform.is.mobile">
    <ResearchViewMob />
  </div>

  <div v-else>
    <ResearchView />
  </div>
</template>

<script>
import ResearchView from "./view.vue";
import ResearchViewMob from "./viewMob.vue";

export default {
  name: "portfolio",
  components: { ResearchView, ResearchViewMob },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>