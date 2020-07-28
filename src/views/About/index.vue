<template>

  <div v-if = this.$q.platform.is.mobile>
  <AboutView />
  </div>

  <div v-else>
       <div class="row justify-center">
          
          <div class="col-3"></div>
          <div class="col-6" no-wrap>
            <AboutView />
          </div>
          <div class="col-3"></div>
            
          
        </div>
    
  </div>


</template>

<script>

import AboutView from './view.vue'
export default {
    name: "about",
    components: { AboutView }

}
</script>

<style>

</style>