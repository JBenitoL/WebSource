<template>
  <div>
      <q-page class="q-pa-xl"  >
          <p>
            I am PhD student in physics at the Universidad Autónoma de Madrid. I work in the low temperatures laboratory with a home made scanning tunneling microscopy able to observe atoms. My main research is studying superconductors at high magnetic fields
          </p><p>
          In my spare time I enjoy learning new things in programming, playing guitar and hiking on the mountains.
          </p><p>
          Here I will present some of my research and profesional activities and personal hobbies. Welcome!
          </p>
       

          <q-img :src="require('@/Imagenes/cover5.png')" style=" max-width: 50%"  class="center" />

            </q-page>
            
      
  </div>
</template>

<script>
export default {
name: 'home'
}
</script>

<style>
.center {

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%; 
 
}
</style>