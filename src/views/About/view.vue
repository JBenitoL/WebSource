<template>
  <div>
    <div v-if="this.$q.platform.is.mobile">
      <q-page class="q-pa-md q-pt-xl">
        <q-img :src="require('@/Imagenes/PerfilCV.png')" style=" max-width: 70%" class="center" />

        <p
          class="q-pb-md"
        >Hello! I finished my PhD in physics on January 2020 at the Low Temperatures laboratory of the Universidad Autónoma de Madrid.</p>

        <p
          class="q-pb-md"
        >Right now, I am actively searching for a career change to interesting data science projects.</p>

        <p>Feel free to contact me for any question!</p>
      </q-page>
    </div>
    <div v-else>
      <!-- <q-page class="q-pa-md q-pt-xl"> -->
      <div class="row justify-center">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="row no-wrap q-pt-xl">
            <div class="col-5">
              <q-img
                :src="require('@/Imagenes/PerfilCV.png')"
                style=" max-width: 70%"
                class="center"
              />
            </div>
            <div class="col-1"></div>
            <div class="col-6 self-center q-pl-xs" style="font-size:19px">
              <p
                class="q-pb-md"
              >Hello! I finished my PhD in physics on January 2020 at the Low Temperatures laboratory of the Universidad Autónoma de Madrid.</p>

              <p
                class="q-pb-md"
              >Right now, I am actively searching for a career change to interesting data science projects.</p>

              <p>Feel free to contact me for any question!</p>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
      <!-- </q-page> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
}
.vl {
  border-left: 3px solid red;
  height: 10px;
}
</style>