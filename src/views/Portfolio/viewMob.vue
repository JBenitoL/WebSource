<template>
  <div class="q-pa-md">
    <section>
      <h4 class="q-mt-xl q-mb-md text-weight-regular text-center">Coronabot</h4>
      <q-img :src="require('./imagenes/Coronabot.png')" style=" max-width: 100%" />

      <p>
        {{ coronabot1 }}
        <a
          style="color:gray; cursor:pointer"
          @click="goToDatadista"
        >{{ coronabotLink }}</a>).
      </p>
      <p v-for="parrafo in coronabot" :key="parrafo">{{ parrafo }}</p>

      <q-img
        :src="require('./imagenes/TelegramLogo.png')"
        style=" max-width: 10%"
        class="q-ml-xl"
        @click="goToTelegram"
      >
        <q-tooltip>Talk with the Bot</q-tooltip>
      </q-img>
      <q-img
        :src="require('./imagenes/GitHubLogo.png')"
        style=" max-width: 10%"
        class="float-right q-mr-xl"
        @click="goToGitHubCorona"
      >
        <q-tooltip>{{ goToRepository }}</q-tooltip>
      </q-img>

      <div />
    </section>

    <q-space class="q-my-xl" />
    <q-space class="q-my-xl" />

    <section>
      <h4 class="q-mt-xl q-mb-md text-weight-regular text-center">My Personal Website</h4>
      <q-img :src="require('./imagenes/Web.png')" style=" max-width: 100%" />

      <p v-for="parrafo in web" :key="parrafo">{{ parrafo }}</p>

      <q-img
        :src="require('./imagenes/GitHubLogo.png')"
        style=" max-width: 10%;  margin-left: auto; margin-right: auto;  display: block;"
        @click="goToGitHubWeb"
      >
        <q-tooltip>{{ goToRepository }}</q-tooltip>
      </q-img>
    </section>

    <q-space class="q-my-xl" />
    <q-space class="q-my-xl" />

    <section>
      <h4 class="q-mt-xl q-mb-md text-weight-regular text-center">Bicimad (In progress)</h4>
      <q-img :src="require('./imagenes/BicimadLogo.png')" style=" max-width: 100%" />

      <p class="q-mt-md" v-for="parrafo in biciMad" :key="parrafo">{{ parrafo }}</p>

      <q-img
        :src="require('./imagenes/GitHubLogo.png')"
        style=" max-width: 10%; margin-left: auto; margin-right: auto;  display: block;"
        class="q-mr-xl"
        @click="goToGitHubBicis"
      >
        <q-tooltip>{{ goToRepository }}</q-tooltip>
      </q-img>
    </section>

    <q-space class="q-my-xl" />
    <q-space class="q-my-xl" />

    <section>
      <h4 class="q-mt-xl q-mb-md text-weight-regular text-center">Scientific software</h4>
      <q-img :src="require('./imagenes/blqProgram.png')" style=" max-width: 100%" />

      <p class="q-mt-md" v-for="parrafo in scientificSW" :key="parrafo">{{ parrafo }}</p>

      <q-img
        :src="require('./imagenes/GitHubLogo.png')"
        style=" max-width: 10%; margin-left: auto; margin-right: auto;  display: block;"
        class="q-mr-xl"
        @click="goToGitHubSW"
      >
        <q-tooltip>{{ goToRepository }}</q-tooltip>
      </q-img>
    </section>
    <div />
  </div>
</template>

<script>
import links from "../links";
import texts from "./texts";

export default {
  name: "research",
  mixins: [links, texts],
  methods: {
    goToDatadista() {
      window.open(this.datadistaLink);
    },
    goToTelegram() {
      window.open(this.gitHubTelegramLink);
    },
    goToGitHubCorona() {
      window.open(this.gitHubCoronaLink);
    },
    goToGitHubWeb() {
      window.open(this.gitHubWebLink);
    },
    goToGitHubBicis() {
      window.open(this.gitHubBicisLink);
    },
    goToGitHubSW() {
      window.open(this.gitHubSWLink);
    },
  },
};
</script>

<style>
</style>