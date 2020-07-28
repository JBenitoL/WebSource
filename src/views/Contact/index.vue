<template>
  <div v-if="this.$q.platform.is.mobile">
    <ContactView />
  </div>

  <div v-else>
    <div class="row justify-center">
      <div class="col-3"></div>
      <div class="col-6">
        <ContactView />
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import ContactView from "./view.vue";

export default {
  name: "contact",
  components: { ContactView },
};
</script>

<style>
</style>