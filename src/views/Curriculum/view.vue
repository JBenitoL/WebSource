<template>
  <div>
    <q-page class="q-pa-xl q-pt-xl">
      <div class="q-mb-md">
        <q-img
          :src="require('@/imagenes/LinkedinLogo.png')"
          style=" max-width: 3%"
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
        <div class="row q-mt-lg">
          <div class="col-3 q-pr-xl text-right">
            <h5 class="q-pa-none q-my-none text-weight-regular">Profile</h5>
          </div>
          <div class="col-1"></div>
          <div class="col-4">{{ profile }}</div>
        </div>
        <p />
      </section>

      <q-separator color="grey-9" />

      <section>
        <div class="row">
          <div class="col-3 q-pr-xl text-right">
            <h5 class="q-pa-none q-my-sm text-weight-regular">Experience</h5>
          </div>
          <div class="col-1"></div>
          <div class="col-4">
            <h5 class="q-pa-none q-my-sm text-weight-regular">{{ experienceUAMTitle }}</h5>
          </div>
        </div>

        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right">2015 - 2019</div>
          <div class="col-1"></div>
          <div class="col-4">
            <ul style=" padding-left: 20px; margin-top: 0">
              <li v-for="item in experienceUAM" :key="item">
                {{ item }}
                <p />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <q-separator color="grey-9" />

      <section>
        <div class="row">
          <div class="col-3 q-pr-xl text-right">
            <h5 class="q-pa-none q-my-sm text-weight-regular">Education</h5>
          </div>
          <div class="col-1"></div>
          <div class="col-4">
            <h5 class="q-pa-none q-my-sm text-weight-regular">Universidad Autonoma de Madrid</h5>
          </div>
        </div>
        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right">{{ education[0].fecha }}</div>
          <div class="col-1"></div>
          <div class="col-4">{{ education[0].texto }}</div>
        </div>
        <p />
        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right">{{ education[1].fecha }}</div>
          <div class="col-1"></div>
          <div class="col-4">{{ education[1].texto }}</div>
        </div>
        <p />
        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right">{{ education[2].fecha }}</div>
          <div class="col-1"></div>
          <div class="col-4">{{ education[2].texto }}</div>
        </div>
        <p />
      </section>

      <q-separator color="grey-9" />

      <section>
        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right">
            <h5 class="q-pa-none q-my-sm text-weight-regular">Skills</h5>
          </div>
          <div class="col-1"></div>
          <div class="col-3">
            <div class="row justify-center">
              <div class="col-5">
                <ul class="q-my-sm" style=" padding-left: 20px;">
                  <li v-for="item in skillsCol1" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div class="col"></div>
              <ul class="q-my-sm" style="padding-left: 20px;">
                <li v-for="item in skillsCol2" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <q-separator color="grey-9" />

      <section>
        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right">
            <h5 class="q-pa-none q-my-sm text-weight-regular">Languages</h5>
          </div>
          <div class="col-1"></div>
          <div class="col-3">
            <ul class="q-my-sm" style="padding-left: 20px;">
              <li v-for="item in languages" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <q-separator color="grey-9" />

      <section>
        <div class="row">
          <div class="col-3 q-pr-xl text-right">
            <h5 class="q-pa-none q-my-sm text-weight-regular">Courses</h5>
          </div>
          <div class="col-1"></div>
          <div class="col-4"></div>
        </div>

        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right text-weight-regular">Machine Learning</div>
          <div class="col-1"></div>
          <div class="col-4">
            <ul class="q-my-none" style="padding-left: 20px;">
              <li v-for="item in coursesML" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <p />

        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right text-weight-regular">Scala</div>
          <div class="col-1"></div>
          <div class="col-4">
            <ul class="q-my-none" style="padding-left: 20px;">
              <li v-for="item in coursesScala" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <p />

        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right text-weight-regular">SQL</div>
          <div class="col-1"></div>
          <div class="col-4">
            <ul class="q-my-none" style="padding-left: 20px;">
              <li v-for="item in coursesSQL" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <p />

        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right text-weight-regular">NLP</div>
          <div class="col-1"></div>
          <div class="col-4">
            <ul class="q-my-none" style="padding-left: 20px;">
              <li v-for="item in coursesNLP" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <p />
      </section>

      <q-separator color="grey-9" />

      <section>
        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right">
            <h5 class="q-pa-none q-my-sm text-weight-regular">Conferences</h5>
          </div>
          <div class="col-1"></div>
          <div class="col-3">
            <ul class="q-my-sm" style="padding-left: 20px;">
              <li v-for="item in conferences" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <q-space />
      <h1 />
      <q-page-sticky position="bottom-right" :offset="[50, 50]">
        <q-btn fab icon="get_app" color="grey-9" text-color="yellow-14" @click="downloadPDF">
          <q-tooltip>Download in pdf</q-tooltip>
        </q-btn>
      </q-page-sticky>
    </q-page>
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
    downloadPDF() {
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