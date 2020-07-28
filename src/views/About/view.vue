<template>
  <div>
    <q-page class="q-pa-md q-pt-xl">
      <p>
        Hello! My name is Jose. I finished my PhD in physics on January 2020 at the Low Temperatures laboratory of the
        Universidad Autonoma de Madrid.
      </p>

      <p>Right now, I am actively searching for a career change to interesting data science projects.</p>

      <p>
        In my spare time I enjoy learning new things on programming and developing personal projects.
        Also, I love playing guitar. Alone or with my group
        (
        <a
          href="https://www.instagram.com/meloncottons/"
          style="text-decoration: none"
          class="text-grey"
        >Meloncottons</a>!).
      </p>
      <p>Here, I will present some of my profesional activities, the research I have done, and some personal projects. Welcome!</p>

      <q-img :src="require('@/Imagenes/PerfilCV.png')" style=" max-width: 50%" class="center" />
    </q-page>
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
  width: 50%;
}
</style>