<template>
  <div>
    <q-page class="q-pa-md q-pt-xl" style=" text-align: left;">
      <!-- Introduccion -->
      <section>
        <p>
          After almost 5 years of research, I defended my thesis on January 2020. The title of the manuscript is
          "Vortex Lattices under stress: Visualizing the superconducting vortex lattice
          in presence of disorder and magnetism" supervised by H. Suderow and I. Guillamón at the low temperatures
          laboratory of the Universidad Autonoma de Madrid.
        </p>

        <p>
          Here, I will make a brief resume of my project and a list of the publications during my research time. If you are
          interested on the whole manuscript, click the cover image to download a copy
        </p>

        <a href="http://webs.fmc.uam.es/lbtuam.group/TesisJBLLOficial.pdf">
          <q-img :src="require('@/Imagenes/Tesis.png')" style=" max-width: 30%" class="center" />
          <q-tooltip>Download manuscript</q-tooltip>
        </a>
      </section>

      <section>
        <h4 class="q-mt-xl q-mb-md text-center text-weight-regular">Thesis project</h4>
      </section>

      <section>
        <h6 class="q-my-sm text-weight-regular">Introduction to superconductivity</h6>
        <p>
          After more than 100 years of its discovery, superconductivity is still a very promising and current phenomena. Superconductors
          materials have two main properties:
        </p>
        <ul>
          <li>Electric current flows through the material with zero electric resistance.</li>
          <p />
          <li>
            In most of the superconductors (type-II), the magnetic field penetrates the material as quantized magnetic
            fluxes called vortices. Inside the core of the vortex the material is in normal state. Usually, vortices form a
            triangular lattice because they repeal each other. Depending on the internal defects of the material, the lattice
            can be more or less distorted.
          </li>
        </ul>

        <p>Furthermore, superconducting state is only possible under some conditions of:</p>

        <div class="row text-center q-pb-md">
          <div class="col-4">Temperature</div>
          <div class="col-4">Magnetic field</div>
          <div class="col-4">Electrical current</div>
        </div>

        <p>
          If any of these quantities are above of a critical value, superconducting state dissapears and the material goes
          to normal state.
        </p>
      </section>

      <section>
        <h6 class="q-my-sm text-weight-regular">Challenges</h6>
        <p>
          <strong class="text-weight-medium">There are already numerous applications</strong> as NMR machines
          in hospitals, the levitating train of Japan, or a superconducting cable joining two high voltage stations in Essen (Germany).
          But,
          <strong
            class="text-weight-medium"
          >
            to take fully advantage of superconductivity, increasing critical
            temperature and electrical current is indispensable.
          </strong>
        </p>
        <p>
          <strong
            class="text-weight-medium"
          >To enhance critical temperature, is crucial to understand the origin of superconductivity.</strong> In conventional
          superconductors, the origin is well understood using BCS theory but, usually, these materials have very low critical temperatures. On
          the other hand,
          <strong
            class="text-weight-medium"
          >
            in high critical temperature superconductors (HCTS) the origin
            remains unknown.
          </strong> What we do know, is that as opposed
          of conventional superconductors, superconductivity and magnetism are very related. Comprehending this relation is
          fundamental to understand the origin of the superconductivity in HCTS.
        </p>

        <p>
          <strong
            class="text-weight-medium"
          >The problem of increasing critical current is related with the superconducting vortices</strong>.
          When an electrical current is applied, vortices move along the sample dissipating heat and this, eventually
          destroys superconductivity. Hence,
          <strong
            class="text-weight-medium"
          >
            to increase critical current is important to understand how the vortex
            lattice is arranged
          </strong> inside the material and to mantained them
          as fixed as possible when the electric current flows.
        </p>
      </section>

      <div class="q-pa-md">
        <div v-if="this.$q.platform.is.mobile">
          <q-carousel
            control-color="black"
            animated
            v-model="slide"
            arrows
            navigation
            height="140px"
            swipeable
          >
            <q-carousel-slide :name="1" :img-src="require('./Images/Meissner.jpg')">
              <div class="absolute-bottom custom-caption">
                <div
                  class="text-subtitle1 text-center"
                >Superconducting levitation due to the repulsion of magnetic field</div>
              </div>
            </q-carousel-slide>

            <q-carousel-slide :name="2" :img-src="require('./Images/atoms.jpg')">
              <div class="absolute-bottom custom-caption">
                <div class="text-subtitle1 text-center">
                  Atomic resolution image at left and superconducting
                  vortices (yellow) at the right.
                </div>
              </div>
            </q-carousel-slide>

            <q-carousel-slide :name="3" :img-src="require('./Images/STM.jpg')">
              <div class="absolute-bottom custom-caption">
                <div
                  class="text-subtitle1 text-center"
                >A picture of the scanning tunneling microscope I buildt.</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>

        <div v-else>
          <q-carousel
            control-color="black"
            animated
            v-model="slide"
            arrows
            navigation
            height="350px"
          >
            <q-carousel-slide :name="1" :img-src="require('./Images/Meissner.jpg')">
              <div class="absolute-bottom custom-caption">
                <div
                  class="text-subtitle1 text-center"
                >Superconducting levitation due to the repulsion of magnetic field</div>
              </div>
            </q-carousel-slide>

            <q-carousel-slide :name="2" :img-src="require('./Images/atoms.jpg')">
              <div class="absolute-bottom custom-caption">
                <div class="text-subtitle1 text-center">
                  Atomic resolution image at left and superconducting
                  vortices (yellow) at the right.
                </div>
              </div>
            </q-carousel-slide>

            <q-carousel-slide :name="3" :img-src="require('./Images/STM.jpg')">
              <div class="absolute-bottom custom-caption">
                <div
                  class="text-subtitle1 text-center"
                >A picture of the scanning tunneling microscope I buildt.</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>

      <section>
        <h6 class="q-my-sm text-weight-regular">What I did</h6>
        <p>
          During my thesis I focused on both problems.
          <strong class="text-weight-medium">
            I analyzed images of superconducting vortices of different materials
            finding new lattice arrangements.
          </strong> This findings could help to a better understanding of how vortices interact among them
          and its media at differents magnetic fields.
          <strong
            class="text-weight-medium"
          >
            Futhermore, I measured a HCTS that was discovered
            only two years ago.
          </strong>
          The most
          important result that I found is how internal magnetism and superconductivity coexist with each other.
        </p>
      </section>

      <section>
        <h6 class="q-my-sm text-weight-regular">How I did it</h6>
        <p>
          In order to obtain my results,
          <strong class="text-weight-medium">
            I developed a scanning tunneling microscope from scratch to perform at low temperatures
            (~150 mK) and high magnetic
            fields (~15 T)
          </strong>. This microscope was invented in 1981 and allows us to obtain topographic images at the atomic level and
          also, the
          electronical properties of the material we are measuring. For example, we can obtain vortex images by measuring the electronic
          properties locally. I designed and built the microscope and also help in the development of
          the mechanical apparatus, electronics and computer comunications required to perform the experiments.
        </p>
        <p>
          <strong
            class="text-weight-medium"
          >Another very important part in my thesis is the data analysis.</strong>
          With the microscope I obtained files of several Gb per
          measurement. So, in order to do faster analysis, I developed a software in Matlab. We
          are able to open, manage and clean raw data from the microscope in seconds/minutes.
          Most of the funcionalities are for image analysis. Some of them are:
        </p>
        <ul>
          <li>2D-Fast fourier transformations and filterings.</li>
          <p />
          <li>Automatic vortex detection in images.</li>
          <p />
          <li>Analysis of vortex movement in movies.</li>
          <p />
          <li>Fractal analysis.</li>
          <p />
          <li>Hyperuniform detection in real and reciprocal space.</li>
          <p />
        </ul>
      </section>

      <div class="q-pa-md">
        <div v-if="this.$q.platform.is.mobile">
          <q-carousel
            control-color="black"
            animated
            v-model="slide"
            arrows
            navigation
            height="250px"
            swipeable
          >
            <q-carousel-slide :name="1" :img-src="require('./Images/ThesisPresentation.jpg')" />

            <q-carousel-slide :name="3" :img-src="require('./Images/PosterPresent.jpg')" />
            <q-carousel-slide :name="4" :img-src="require('./Images/Suffering.jpg')" />
          </q-carousel>
        </div>
        <div v-else>
          <q-carousel
            control-color="black"
            animated
            v-model="slide"
            arrows
            navigation
            height="500px"
          >
            <q-carousel-slide :name="1" :img-src="require('./Images/ThesisPresentation.jpg')" />

            <q-carousel-slide :name="3" :img-src="require('./Images/PosterPresent.jpg')" />
            <q-carousel-slide :name="4" :img-src="require('./Images/Suffering.jpg')" />
          </q-carousel>
        </div>
      </div>
      <section>
        <h4>Publications</h4>
        <ul class="q-pa-none q-my-none" style="list-style-type:none; text-align: justify;">
          <li>
            <p
              class="text-weight-medium text-center q-mb-none"
            >Superconducting density of states and vortex lattice in the spin-vortex state of Ni-doped</p>
            <p class="text-grey-9 text-weight-regular q-mb-none">
              J. Benito-Llorens
              , E.Herrera, V.Barrena, H.Suderow,
              I.Guillamón, W.R. Meier, S. Bud’ko, P.C. Canfield, V Borisov and R.Valentí
            </p>
            <p class="text-weight-regular text-center">In preparation, (2020)</p>
          </li>
          <li>
            <p
              class="text-weight-medium text-center q-mb-none"
            >Superconductivity in a disordered metal with Coulomb interactions</p>
            <p class="text-grey-9 text-weight-regular q-mb-none">
              Svetlana V. Postolova,1 Alexey Yu. Mironov, Víctor Barrena,
              Jose Benito-Llorens,Jose Gabriel Rodrigo, Hermann Suderow, Mikhail R. Baklanov, Tatyana I. Baturina, and Valerii M. Vinokur
            </p>
            <p class="text-weight-regular text-center">Accepted in Phys. Rev. Research, (2020)</p>
          </li>
          <p class="q-mb-lg" />
          <li>
            <p
              class="text-weight-medium text-center q-mb-none"
            >Disordered hyperuniformity in superconducting vortex lattices</p>
            <p class="text-grey-9 text-weight-regular q-mb-none">
              J. Benito-Llorens
              , R. Córdoba, J.M. De Teresa, R. Ibarra, S. Vieira, I.
              Guillamón, M. Ortuño, and H. Suderow
            </p>
            <p class="text-weight-regular text-center">Phys. Rev. Research 2, 013329, (2020)</p>
          </li>
          <p class="q-mb-lg" />
          <li>
            <p
              class="text-weight-medium text-center q-mb-none"
            >Observation of a gel of quantum vortices in a superconductor at very low magnetic fields</p>
            <p class="text-grey-9 text-weight-regular q-mb-none">
              J. Benito-Llorens
              , Lior Embon, Alexandre Correa, Jesés David González,
              Edwin Herrera, Isabel Guillamón, Roberto F. Luccas, Jon Azpeitia, Federico
              J. Mompeán, Mar García-Hernández, Carmen Munuera, Jazmín Aragón
              Sánchez, Yanina Fasano, Milorad V. Milosevic, Hermann Suderow, Yonathan
              Anahory
            </p>
            <p class="text-weight-regular text-center">Phys. Rev. Research 2, 013329, (2020)</p>
          </li>
          <p class="q-mb-lg" />
          <li>
            <p
              class="text-weight-medium text-center q-mb-none"
            >Thermal creep induced by cooling a superconducting vortex lattice</p>
            <p class="text-grey-9 text-weight-regular q-mb-none">
              R. Willa and J.A. Galvis,
              J. Benito-Llorens, E. Herrera, I. Guillamon
              and H. Suderow
            </p>
            <p class="text-weight-regular text-center">Phys. Rev. Research 2, 013125 (2020)</p>
          </li>
          <p class="q-mb-lg" />

          <li>
            <p class="text-weight-medium text-center q-mb-none">
              Vortex creep at very low temperatures in single crystals of the extreme type-II superconductor
              Rh
              <sub>9</sub>In
              <sub>4</sub>S
              <sub>4</sub>
            </p>
            <p class="text-grey-9 text-weight-regular q-mb-none">
              E. Herrera-Vasco,
              J. Benito-Llorens, Udhara S. Kaluarachchi, S.L.
              Bud’ko, P. C. Canfield, I. Guillamón, H. Suderow
            </p>
            <p class="text-weight-regular text-center">Phys. Rev. B 95, 134505 (2017)</p>
          </li>
        </ul>
        <p class="q-mb-lg" />
      </section>
    </q-page>
  </div>
</template>

<script>
export default {
  name: "personal",
  data() {
    return {
      slide: 1,
    };
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