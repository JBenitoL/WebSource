<template>
  <div class="q-pa-md q-pt-xl">
    <div class="q-mb-lg q-mt-md">
      <q-img
        :src="require('@/imagenes/LinkedinLogo.png')"
        style=" max-width: 10%"
        class="center"
        @click="goToLinkedin"
      >
        <q-tooltip>My Linkedin</q-tooltip>
      </q-img>
    </div>

    <div class="row justify-center">
      <q-separator color="grey-9" style="width:100px" />
    </div>

    <section>
      <div class="text-center">
        <q-icon name="person" size="md" class="q-py-md" />
      </div>
      {{ profile }}
      <p />
    </section>

    <q-separator color="grey-9" />

    <section>
      <div class="text-center">
        <q-icon name="work" size="md" class="q-py-xs" />
      </div>
      <h6 class="q-pa-none q-my-sm text-weight-medium">{{ experienceUAMTitleMob }}</h6>
      <ul style=" padding-left: 20px; margin-top: 0">
        <li v-for="item in experienceUAM" :key="item">
          {{ item }}
          <p />
        </li>
      </ul>
    </section>

    <q-separator color="grey-9" />

    <section>
      <div class="text-center">
        <q-icon name="school" size="md" class="q-py-xs" />
      </div>
      <h6 class="q-pa-none q-my-sm">Universidad Autonoma de Madrid</h6>
      <ul style=" padding-left: 20px; margin-top: 0">
        <li v-for="item in education" :key="item.fecha">
          {{ `${item.texto} (${item.fecha})` }}
          <p />
        </li>
      </ul>
    </section>

    <q-separator color="grey-9" />

    <section>
      <div class="text-center">
        <q-icon name="build" size="md" class="q-py-xs" />
      </div>
      <ul class="q-my-sm" style=" padding-left: 20px;">
        <li v-for="item in skillsCol1" :key="item">{{ item }}</li>
        <li v-for="item in skillsCol2" :key="item">{{ item }}</li>
      </ul>
    </section>

    <q-separator color="grey-9" />

    <section>
      <div class="text-center">
        <q-icon name="language" size="md" class="q-py-xs" />
      </div>
      <ul class="q-my-sm" style="padding-left: 20px;">
        <li v-for="item in languages" :key="item">{{ item }}</li>
      </ul>
    </section>

    <q-separator color="grey-9" />

    <section>
      <div class="text-center">
        <q-icon name="edit" size="md" class="q-py-xs" />
      </div>
      <h6 class="q-pa-none q-my-sm text-weight-bold">Machine Learning</h6>
      <ul class="q-my-none" style="padding-left: 20px;">
        <li v-for="item in coursesML" :key="item">{{ item }}</li>
      </ul>
      <p />
      <h6 class="q-pa-none q-my-sm text-weight-bold">Scala</h6>
      <ul class="q-my-none" style="padding-left: 20px;">
        <li v-for="item in coursesScala" :key="item">{{ item }}</li>
      </ul>
      <p />
      <h6 class="q-pa-none q-my-sm text-weight-bold">SQL</h6>
      <ul class="q-my-none" style="padding-left: 20px;">
        <li v-for="item in coursesSQL" :key="item">{{ item }}</li>
      </ul>
      <p />
      <h6 class="q-pa-none q-my-sm text-weight-bold">NLP</h6>
      <ul class="q-my-none" style="padding-left: 20px;">
        <li v-for="item in coursesNLP" :key="item">{{ item }}</li>
      </ul>
      <p />
    </section>

    <q-separator color="grey-9" />

    <section>
      <div class="text-center">
        <q-icon name="hearing" size="md" class="q-py-xs" />
      </div>
      <ul class="q-my-sm" style="padding-left: 20px;">
        <li v-for="item in conferences" :key="item">{{ item }}</li>
      </ul>
    </section>

    <q-space />
    <h1 />
    <q-page-sticky position="bottom-right" :offset="[50, 50]">
      <q-btn fab icon="get_app" color="grey-9" text-color="yellow-14" @click="downlaodPDF">
        <q-tooltip>Download in pdf</q-tooltip>
      </q-btn>
    </q-page-sticky>
  </div>
</template>

<script>
import links from "../links";
import texts from "./texts";

export default {
  name: "about",
  mixins: [links, texts],
  methods: {
    goToLinkedin() {
      window.open(this.linkedinLink);
    },
    downlaodPDF() {
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
  width: 50%;
}
.justificacion {
  text-align: right;
}
</style>