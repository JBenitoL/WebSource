<template>
  <div class="q-pa-xl" >
    <!-- <q-layout view="hhh Lpr lff"> -->
    <!-- <q-drawer v-model="drawer" side="right" class="drawer" :width="200" :breakpoint="500">
    <q-scroll-area class="fit">-->
       <!-- <q-drawer
       transparent
        v-model="drawerLeft"
        show-if-above
        :width="200"
        :breakpoint="700"
       
        content-class="bg-transparent"
        
      >
        
          <div >
            <div v-for="n in 4" :key="n">Drawer {{ n }} / 50</div>
          </div>
        
      </q-drawer> -->
    
    
    
    
    
    <div class="row">
      <!-- </q-scroll-area>
      </q-drawer>-->

      <div class="col">
        <q-page-container>
          <q-page padding>
            <p>
              <a id="Inicio"></a>
            Inicio ---- Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?</p>
            <p
              ref="P1"
            >P1 ---- Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?</p>
            <p
              name="P2"
            >P2 ---- Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?</p>
            <p
              ref="P3"
            >P3 ---- Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?</p>
          </q-page>
        </q-page-container>
      </div>
       <q-page-sticky  position="left">
      <div class="col-2 ">
        <q-list  class="menu-list">
          <q-item clickable>
            <q-item-section>Inicio</q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section>P1</q-item-section>
          </q-item>

          <q-item clickable to="#P1">
            <q-item-section>P2</q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section>P3</q-item-section>
          </q-item>
        </q-list>
      </div>
      </q-page-sticky>
    </div>
    <!-- </q-layout> -->
  </div>
</template>

<script>
export default {
  name: "research",
  data() {
    return {
    
    };
  }
};
</script>

<style>
.drawer {
  top: 1000px;
}


</style>