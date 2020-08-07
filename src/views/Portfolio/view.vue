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
          <q-img :src="require('./Imagenes/Coronabot.png')" style=" max-width: 100%" />
        </div>
        <div class="col-1"></div>
        <div class="col-5 self-center">
          <p>
            This is my first project post-PhD. Quarantine started and I decided to make a telegram bot to
            visualize Coronavirus data in Spain from a reliable source (Instituto Carlos III provided by
            <a
              href="https://github.com/datadista/datasets/tree/master/COVID%2019"
            >Datadista</a>).
          </p>

          <p>
            With keywords by the user, a graph is returned with data from Spain. We can compare different regions of Spain
            using accumulated/daily, total/per million for infected/deceased cases. Furthermore, we can obtain the
            top 10 best/worst regions for the different scenarios.
          </p>
          <p>
            My function is uploaded to AWS and redirects to telegram API. I use different python libraries as: Pandas,
            Matplotlib or requests. I also use S3 to save some info for analytics.
          </p>
          <a href="https://web.telegram.org/#/im?p=@DataCorona_bot">
            <q-img
              :src="require('./Imagenes/telegramLogo.png')"
              style=" max-width: 10%"
              class="q-ml-xl"
            />
            <q-tooltip>Talk with the Bot</q-tooltip>
          </a>
          <a href="https://github.com/JBenitoL/Covid19BotAWS">
            <q-img
              :src="require('./Imagenes/GitHubLogo.png')"
              style=" max-width: 10%"
              class="float-right q-mr-xl"
            />
            <q-tooltip>Go to repository</q-tooltip>
          </a>
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
          <p>
            By applying to different jobs I realized that a personal webpage can show my skills and projects. Furthermore, it is
            a good project itself!
          </p>
          <p>
            My goals were to develop a clean and simple website, but also with all my profesional info. It was also very important,
            to make a very responsive site for different browsers and screens.
          </p>
          <p>It is developed using vue and quasar and it helped me to increase my knowledge in html/javascript/css.</p>

          <a href="https://github.com/JBenitoL/WebSource">
            <q-img
              :src="require('./Imagenes/GitHubLogo.png')"
              style=" max-width: 10%"
              class="float-left q-ml-xl"
            />
            <q-tooltip>Go to repository</q-tooltip>
          </a>
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <q-img :src="require('./Imagenes/Web.png')" style=" max-width: 80%" />
        </div>
      </div>
    </section>
    <q-space class="q-my-xl" />
    <q-space class="q-my-xl" />
    <section>
      <div class="row justify-center">
        <div class="col-5">
          <h4 class="q-mt-xl q-mb-md text-weight-regular text-center">Bicimad (In progress)</h4>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-4">
          <q-img :src="require('./Imagenes/logoBicimad.png')" style=" max-width: 80%" />
        </div>
        <div class="col-1"></div>
        <div class="col-5 self-center">
          <p>
            I live in Madrid and I really enjoy moving around by bike. Bicimad is a public company of electric bicycle sharing system.
            As the data is also public a friend and I decided to analyze it.
          </p>

          <p>
            Most used routes, bikes distribution throughout the stations with
            a comparation at different days or hours are some of the ideas we are working on
          </p>
          <p>At the time, from the json file, we are able to clean and transform to a pandas dataframe to make the first analytics.</p>

          <a href="https://github.com/JBenitoL/JBicisPro">
            <q-img
              :src="require('./Imagenes/GitHubLogo.png')"
              style=" max-width: 10%"
              class="float-right q-mr-xl"
            />
            <q-tooltip>Go to repository</q-tooltip>
          </a>
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
          <p>
            This was a very important part of my thesis. It is a colaborative project, that is still growing. We needed a fast
            and eficient way to open and analyze data from the microscope in order to improve the experiment's next steps.
            Using this software we are able to make a fast visualization and analysis of images.
          </p>
          <p>
            Written in MATLAB, is designed as a modular program with interchangeable functions.
            Using as input, binary files from the microscope, we transform them into images of different energies.
            There are several parameters that can be changed to get the most optimized results.
          </p>
          <p>With images we can perform: fast-fourier transformations, filters, averages of regions, pattern recognition and more.</p>

          <a href="https://github.com/LowTemperaturesUAM/AppBLQ">
            <q-img
              :src="require('./Imagenes/GitHubLogo.png')"
              style=" max-width: 10%"
              class="float-left q-ml-xl"
            />
            <q-tooltip>Go to repository</q-tooltip>
          </a>
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <q-img :src="require('./Imagenes/blqProgram.png')" style=" max-width: 80%" />
        </div>
      </div>
    </section>
    <q-space class="q-my-xl" />
    <q-space class="q-my-xl" />
    <div />

    <!-- <h6 class="q-mt-xl q-mb-md text-weight-regular">Coronabot</h6>
    <h4 class="q-mt-xl q-mb-md text-center text-weight-regular">Music</h4>
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/774531279&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ></iframe>
    <div
      style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
    >
      <a
        href="https://soundcloud.com/becoon"
        title="BeCoon"
        target="_blank"
        style="color: #cccccc; text-decoration: none;"
      >BeCoon</a> ·
      <a
        href="https://soundcloud.com/becoon/sets/one-shot"
        title="One Shot"
        target="_blank"
        style="color: #cccccc; text-decoration: none;"
      >One Shot</a>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "research",
  data() {
    return {};
  },
};
</script>

<style>
.drawer {
  top: 1000px;
}
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>