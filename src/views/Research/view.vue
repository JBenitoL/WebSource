<template>
  <div>
    <q-page class="q-pa-md q-pt-xl" style=" text-align: left;">
      <!-- Introduccion -->
      <section>
        <p>{{ intro[0] }}</p>

        <q-img
          :src="require('@/imagenes/Tesis.png')"
          style=" max-width: 30%; cursor:pointer"
          class="center"
          @click="goToTesis"
        >
          <q-tooltip>Download manuscript</q-tooltip>
        </q-img>
        <p class="q-mt-xl">
          {{ intro[1] }}
          <a style="color:gray; cursor:pointer" @click="goToLab">{{ intro[2] }}</a>
          {{ intro[3] }}
        </p>
      </section>

      <!-- Thesis Project -->
      <section>
        <h4 class="q-mt-xl q-mb-md text-center text-weight-regular">Thesis project</h4>
      </section>

      <section>
        <h6 class="q-my-sm text-weight-regular">Introduction to superconductivity</h6>
        <p>{{ tesisIntro1 }}</p>
        <ul>
          <li v-for="item in tesisIntro2" :key="item">
            {{ item }}
            <p />
          </li>
        </ul>
        <p>{{ tesisIntro3 }}</p>
        <div class="row text-center q-pb-md">
          <div class="col-4">{{ tesisIntro4[0] }}</div>
          <div class="col-4">{{ tesisIntro4[1] }}</div>
          <div class="col-4">{{ tesisIntro4[2] }}</div>
        </div>
        <p>{{ tesisIntro5 }}</p>
      </section>

      <section>
        <h6 class="q-my-sm text-weight-regular">Challenges</h6>
        <p>
          <strong class="text-weight-medium">{{ challenges[0] }}</strong>
          {{ challenges[1] }}
          <strong class="text-weight-medium">{{ challenges[2] }}</strong>
        </p>
        <p>
          <strong class="text-weight-medium">{{ challenges[3] }}</strong>
          {{ challenges[4] }}
          <strong class="text-weight-medium">{{ challenges[5] }}</strong>
          {{ challenges[6] }}
        </p>

        <p>
          <strong class="text-weight-medium">{{ challenges[7] }}</strong>
          {{ challenges[8] }}
          <strong class="text-weight-medium">{{ challenges[9] }}</strong>
          {{ challenges[10] }}
        </p>
      </section>

      <div class="q-pa-md">
        <q-carousel
          control-color="black"
          animated
          v-model="slide"
          arrows
          navigation
          :height="alturaCarousel1()"
          infinite
          swipeable
        >
          <q-carousel-slide :name="1" :img-src="require('./Images/Meissner.jpg')">
            <div class="absolute-bottom custom-caption">
              <div class="text-subtitle1 text-center">{{ captions[0] }}</div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="2" :img-src="require('./Images/atoms.jpg')">
            <div class="absolute-bottom custom-caption">
              <div class="text-subtitle1 text-center">{{ captions[1] }}</div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="3" :img-src="require('./Images/STM.jpg')">
            <div class="absolute-bottom custom-caption">
              <div class="text-subtitle1 text-center">{{ captions[2] }}</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>

      <section>
        <h6 class="q-my-sm text-weight-regular">What I did</h6>
        <p>
          {{ whatIDid[0] }}
          <strong class="text-weight-medium">{{ whatIDid[1] }}</strong>
          {{ whatIDid[2] }}
          <strong class="text-weight-medium">{{ whatIDid[3] }}</strong>
          {{ whatIDid[4] }}
        </p>
      </section>

      <section>
        <h6 class="q-my-sm text-weight-regular">How I did it</h6>
        <p>
          {{ howIDidIt[0] }}
          <strong class="text-weight-medium">{{ howIDidIt[1] }}</strong>
          {{ howIDidIt[2] }}
        </p>
        <p>
          <strong class="text-weight-medium">{{ howIDidIt[3] }}</strong>
          {{ howIDidIt[4] }}
        </p>
        <ul>
          <li v-for="item in howList" :key="item">
            {{ item }}
            <p />
          </li>
        </ul>
      </section>

      <div class="q-pa-md">
        <q-carousel
          control-color="black"
          animated
          v-model="slide"
          arrows
          navigation
          :height="alturaCarousel2()"
          infinite
          swipeable
        >
          <q-carousel-slide :name="1" :img-src="require('./Images/ThesisPresentation.jpg')" />
          <q-carousel-slide :name="3" :img-src="require('./Images/PosterPresent.jpg')" />
          <q-carousel-slide :name="4" :img-src="require('./Images/Suffering.jpg')" />
        </q-carousel>
      </div>

      <!-- Publications -->
      <section>
        <h4>Publications</h4>
        <ul class="q-pa-none q-my-none" style="list-style-type:none; text-align: justify;">
          <li v-for="paper in papers" :key="paper.title">
            <p class="text-weight-medium q-mb-none">{{ paper.title }}</p>
            <p class="text-grey-9 text-weight-regular q-mb-none">{{ paper.autores }}</p>
            <p
              class="text-weight-regular text-center"
              :style="styleLinks(paper.link)"
              @click="goToPublications(paper.link)"
            >{{ paper.publication }}</p>
          </li>

          <p class="q-mb-lg" />

          <li>
            <p class="text-weight-medium q-mb-none">
              {{ ultimoPaper.title }} Rh
              <sub>9</sub>In
              <sub>4</sub>S
              <sub>4</sub>
            </p>
            <p class="text-grey-9 text-weight-regular q-mb-none">{{ ultimoPaper.autores }}</p>
            <p
              class="text-weight-regular text-center"
              style="color:gray; cursor:pointer"
              @click="goToPublications(ultimoPaper.link)"
            >{{ ultimoPaper.publication }}</p>
          </li>
        </ul>
        <p class="q-mb-lg" />
      </section>
    </q-page>
  </div>
</template>

<script>
import links from "../links";
import texts from "./texts";

export default {
  name: "personal",
  mixins: [links, texts],
  data() {
    return {
      slide: 1,
    };
  },
  methods: {
    alturaCarousel1() {
      return this.$q.platform.is.mobile ? "140px" : "350px";
    },
    alturaCarousel2() {
      return this.$q.platform.is.mobile ? "250px" : "500px";
    },
    goToTesis() {
      window.open(this.tesisLink);
    },
    goToLab() {
      window.open(this.labLink);
    },
    goToPublications(link) {
      if (link) window.open(link);
    },
    styleLinks(link) {
      if (link) return "color:gray; cursor:pointer";
      else return "color:black";
    },
  },
};
</script>

<style  >
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 50px;
}
</style>