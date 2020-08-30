<template>
  <div v-if="render">
    <q-page class="q-pa-xl q-pt-xl">
      <div class="q-mb-md">
        <a href="https://www.linkedin.com/in/jbenitollorens/">
          <q-img
            :src="require('@/Imagenes/LinkedinLogo.png')"
            style=" max-width: 3%"
            class="center"
          />
          <q-tooltip>My Linkedin</q-tooltip>
        </a>
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
          <div class="col-4">
            As an experimental PhD in Physics, one of the most important aspects was data analysis. I really enjoyed how we can
            obtain results and conclusions from raw data. I am open to learn new things concerning coding, statistics or math.
          </div>
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
            <h5
              class="q-pa-none q-my-sm text-weight-regular"
            >Researcher at Universidad Autonoma de Madrid</h5>
          </div>
        </div>

        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right">2015 - 2019</div>
          <div class="col-1"></div>
          <div class="col-4">
            <ul style=" padding-left: 20px; margin-top: 0">
              <li>Design and built a device from scratch. Mechanics, electronics and computer communications</li>
              <p />
              <li>Development of a full software to manage, clean and analyze raw experimental data</li>
              <p />
              <li>Presentation of results at international conferences and high impact scientific journals</li>
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
          <div class="col-3 q-pr-xl text-right">2015 - 2019</div>
          <div class="col-1"></div>
          <div class="col-4">
            PhD cum laude in Condensed Matter Physics and Nanotechnology:
            Vortex Lattices under Stress.
          </div>
        </div>
        <p></p>
        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right">2014 - 2015</div>
          <div class="col-1"></div>
          <div class="col-4">Master’s degree in Condensed Matter Physics and Nanotechnology.</div>
        </div>
        <p></p>
        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right">2008 - 2013</div>
          <div class="col-1"></div>
          <div class="col-4">5 year degree in Physics.</div>
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
                  <li>Python</li>
                  <li>Matlab</li>
                  <li>SQL</li>
                  <li>HTML, CSS, Javascript</li>
                </ul>
              </div>
              <div class="col"></div>
              <ul class="q-my-sm" style="padding-left: 20px;">
                <li>Git, Github</li>
                <li>AWS</li>
                <li>Spark (scala)</li>
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
              <li>Spanish: Native</li>
              <li>English: C1</li>
              <li>German: A1</li>
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
              <li>Intermediate Machine Learning - Kaggle</li>
              <li>Feature Engineering - Kaggle</li>
              <li>Machine Learning: Data Science en Python - Udemy</li>
              <li>Machine Learning - Coursera</li>
            </ul>
          </div>
        </div>
        <p></p>
        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right text-weight-regular">Scala</div>
          <div class="col-1"></div>
          <div class="col-4">
            <ul class="q-my-none" style="padding-left: 20px;">
              <li>Functional Programming Principles in Scala - Coursera</li>
              <li>Big Data Analysis with Scala and Spark - Coursera</li>
            </ul>
          </div>
        </div>
        <p />

        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right text-weight-regular">SQL</div>
          <div class="col-1"></div>
          <div class="col-4">
            <ul class="q-my-none" style="padding-left: 20px;">
              <li>Intro to SQL - Kaggle</li>
            </ul>
          </div>
        </div>
        <p />

        <div class="row justify-start">
          <div class="col-3 q-pr-xl text-right text-weight-regular">NLP</div>
          <div class="col-1"></div>
          <div class="col-4">
            <ul class="q-my-none" style="padding-left: 20px;">
              <li>Natural Language Processing - Kaggle</li>
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
              <li>¿Quieres ser un data scientist? organized by IMMUNE. 2nd prize inits DATATHON</li>
              <li>AWS Summit Online</li>
            </ul>
          </div>
        </div>
      </section>

      <q-space />
      <h1></h1>
      <q-page-sticky position="bottom-right" :offset="[50, 50]">
        <q-btn fab icon="get_app" color="grey-9" text-color="yellow-14" @click="downloadPDF">
          <q-tooltip>Download in pdf</q-tooltip>
        </q-btn>
      </q-page-sticky>
    </q-page>
    <!-- <q-img :src="require('@/Imagenes/cover5.png')" style=" max-width: 50%" class="center" /> -->
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      render: false,
    };
  },
  mounted() {
    this.render = true;
  },
  methods: {
    downloadPDF() {
      // console.log(2);
      //var link = document.createElement('a');
      //window.location.href = "Curriculum.pdf"
      //window.open('https://www.eldiario.es/');
      window.open(
        "https://web-jbll.s3.eu-west-3.amazonaws.com/Curriculum_JBLL.pdf"
      );
      //link.download = './Curriculum_JBLL.pdf';
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