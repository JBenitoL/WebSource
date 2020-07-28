<template>

  <div v-if = this.$q.platform.is.mobile>
  <ResearchView />
  </div>

  <div v-else>
       <div class="row justify-center">
          
          <div class="col-3"></div>
          <div class="col-6" no-wrap>
            <ResearchView />
          </div>
          <div class="col-3"></div>
            
          
        </div>
    
  </div>


</template>

<script>

import ResearchView from './view.vue'
export default {
    name: "research",
    components: { ResearchView }

}
</script>

<style>

</style>