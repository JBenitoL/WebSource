<template>
  <div>
    <div v-if="this.$q.platform.is.mobile">
      <q-page class="q-pa-md q-pt-xl">
        <q-img :src="require('@/imagenes/PerfilCV.png')" style="width: 70%" class="center" />
        <p v-for="parrafo in parrafos" :key="parrafo" class="q-pb-md">{{ parrafo }}</p>

        <q-space class="q-my-xl" />
        <q-space class="q-my-xl" />

        <div class="row justify-center">
          <div class="col-9">
            <q-separator color="grey-9" />
          </div>
        </div>

        <q-space class="q-my-lg" />

        <div class="row justify-center">
          <div class="col-3">
            <q-img
              :src="require('@/imagenes/LinkedinLogo.png')"
              style=" max-width: 50%"
              class="center"
              @click="goToLinkedin"
            >
              <q-tooltip>My Linkedin</q-tooltip>
            </q-img>
          </div>
          <div class="col-3">
            <q-img
              :src="require('@/imagenes/GitHubLogo.png')"
              style=" max-width: 50%"
              class="center"
              @click="goToGitHub"
            >
              <q-tooltip>My GitHub</q-tooltip>
            </q-img>
          </div>
          <div class="col-3">
            <q-img
              :src="require('@/imagenes/CVLogo.png')"
              style=" max-width: 50%"
              class="center"
              @click="goToCV"
            >
              <q-tooltip>My CV</q-tooltip>
            </q-img>
          </div>
        </div>
      </q-page>
    </div>

    <div v-else>
      <div class="row justify-center">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="row no-wrap q-pt-xl">
            <div class="col-5">
              <q-img :src="require('@/imagenes/PerfilCV.png')" style="width: 70%" class="center" />
            </div>
            <div class="col-1"></div>
            <div class="col-6 self-center q-pl-xs" style="font-size:19px">
              <p v-for="parrafo in parrafos" :key="parrafo" class="q-pb-md">{{ parrafo }}</p>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>

      <q-space class="q-my-xl" />
      <q-space class="q-my-xl" />

      <div class="row justify-center">
        <div class="col-3">
          <q-separator color="grey-9" />
        </div>
      </div>

      <q-space class="q-my-lg" />

      <div class="row justify-center">
        <div class="col-1">
          <q-img
            :src="require('@/imagenes/LinkedinLogo.png')"
            style=" max-width: 40%"
            class="center"
            @click="goToLinkedin"
          >
            <q-tooltip>My Linkedin</q-tooltip>
          </q-img>
        </div>
        <div class="col-1">
          <q-img
            :src="require('@/imagenes/GitHubLogo.png')"
            style=" max-width: 40%"
            class="center"
            @click="goToGitHub"
          >
            <q-tooltip>My GitHub</q-tooltip>
          </q-img>
        </div>
        <div class="col-1">
          <q-img
            :src="require('@/imagenes/CVLogo.png')"
            style=" max-width: 40%"
            class="center"
            @click="goToCV"
          >
            <q-tooltip>My CV</q-tooltip>
          </q-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import links from "../links";
export default {
  name: "about",
  mixins: [links],
  data() {
    return {
      parrafos: [
        "Hello! I finished my PhD in physics on January 2020 at the Low Temperatures Laboratory of the Universidad Autónoma de Madrid.",
        "Right now, I am actively searching for a career change to interesting data science projects.",
        "Feel free to contact me for any question!",
      ],
    };
  },
  methods: {
    goToLinkedin() {
      window.open(this.linkedinLink);
    },
    goToGitHub() {
      window.open(this.gitHubLink);
    },
    goToCV() {
      window.open(this.cvLink);
    },
  },
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>