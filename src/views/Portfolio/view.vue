<template>
  <div class="q-pa-md">
    <section>
      <div class="row justify-center">
        <div class="col-5">
          <h4 class="q-mt-xl q-mb-md text-weight-regular text-center">Coronabot</h4>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-4">
          <q-img :src="require('./imagenes/Coronabot.png')" style=" max-width: 100%" />
        </div>
        <div class="col-1"></div>
        <div class="col-5 self-center">
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
        </div>
      </div>
      <div />
    </section>

    <q-space class="q-my-xl" />
    <q-space class="q-my-xl" />

    <section>
      <div class="row justify-center">
        <div class="col-5">
          <h4 class="q-mt-xl q-mb-md text-weight-regular text-center">My Personal Website</h4>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-5 self-center">
          <p v-for="parrafo in web" :key="parrafo">{{ parrafo }}</p>

          <q-img
            :src="require('./imagenes/GitHubLogo.png')"
            style=" max-width: 10%"
            class="float-left q-ml-xl"
            @click="goToGitHubWeb"
          >
            <q-tooltip>{{ goToRepository }}</q-tooltip>
          </q-img>
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <q-img :src="require('./imagenes/Web.png')" style=" max-width: 80%" />
        </div>
      </div>
    </section>

    <q-space class="q-my-xl" />
    <q-space class="q-my-xl" />

    <section>
      <div class="row justify-center">
        <div class="col-5">
          <h4 class="q-mt-xl q-mb-md text-weight-regular text-center">BiciMad (In progress)</h4>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-4">
          <q-img :src="require('./imagenes/BicimadLogo.png')" style=" max-width: 80%" />
        </div>
        <div class="col-1"></div>
        <div class="col-5 self-center">
          <p v-for="parrafo in biciMad" :key="parrafo">{{ parrafo }}</p>

          <q-img
            :src="require('./imagenes/GitHubLogo.png')"
            style=" max-width: 10%"
            class="float-right q-mr-xl"
            @click="goToGitHubBicis"
          >
            <q-tooltip>{{ goToRepository }}</q-tooltip>
          </q-img>
        </div>
      </div>
    </section>

    <q-space class="q-my-xl" />
    <q-space class="q-my-xl" />

    <section>
      <div class="row justify-center">
        <div class="col-5">
          <h4 class="q-mt-xl q-mb-md text-weight-regular text-center">Scientific software</h4>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-5 self-center">
          <p v-for="parrafo in scientificSW" :key="parrafo">{{ parrafo }}</p>

          <q-img
            :src="require('./imagenes/GitHubLogo.png')"
            style=" max-width: 10%"
            class="float-left q-ml-xl"
            @click="goToGitHubSW"
          >
            <q-tooltip>{{ goToRepository }}</q-tooltip>
          </q-img>
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <q-img :src="require('./imagenes/blqProgram.png')" style=" max-width: 80%" />
        </div>
      </div>
    </section>

    <q-space class="q-my-xl" />
    <q-space class="q-my-xl" />
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