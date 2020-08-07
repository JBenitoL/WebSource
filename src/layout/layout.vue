<template>
  <div v-if="this.$q.platform.is.mobile">
    <q-layout view="hHh Lpr lFf">
      <q-header reveal elevated style="font-family: RailWay">
        <div class="nameHeader text-h4" style="height:80px">
          <div class="q-pt-md text-center">Jose Benito Llorens</div>
        </div>

        <q-separator color="white" />
      </q-header>
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-black text-white"
        style="font-size:17px; font-family: RailWay; font-weight:700"
      >
        <q-scroll-area class="fit">
          <q-list v-for="(item, index) in optionTabs" :key="index">
            <q-item v-bind="item" clickable v-ripple @click="goTo(item.value)">
              <q-item-section>{{ item.label }}</q-item-section>
            </q-item>

            <q-separator />
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container
        class="text-justified"
        style=" margin-top:2.5%; font-size:17px; font-family: RailWay; font-weight:350"
      >
        <q-space />
        <div class="row justify-center">
          <router-view />
        </div>
      </q-page-container>
      <q-page-sticky expand position="top">
        <q-toolbar class="bg-black text-white">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <div
            class="q-mr-xl absolute-right q-my-md text-center"
            style="font-size:17px; font-family: RailWay; font-weight:700"
          >{{ $router.currentRoute.name.charAt(0).toUpperCase() + $router.currentRoute.name.slice(1) }}</div>
        </q-toolbar>
      </q-page-sticky>
    </q-layout>
  </div>

  <div v-else>
    <q-layout view="HHh Lpr lFf">
      <q-header reveal elevated style="font-family: RailWay">
        <div class="nameHeader text-h3" style="height:80px">
          <div class="q-pt-md q-pr-xl text-right">Jose Benito Llorens</div>
        </div>

        <q-separator color="white" />
      </q-header>
      <div style="font-weight:100;">
        <q-page-container
          class="text-justified"
          style=" margin-top:2.5%; font-size:17px; font-family: RailWay; font-weight:350 "
        >
          <q-space />

          <router-view />
        </q-page-container>
      </div>
      <q-page-sticky expand position="top">
        <q-toolbar class="bg-black text-white text-weight-bolder">
          <q-btn-toggle
            flat
            v-model="tabs"
            toggle-color="yellow-14"
            :options="optionTabs"
            @input="goTo"
            class="text-weight-bold"
          />
        </q-toolbar>
      </q-page-sticky>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",

  data() {
    return {
      tabs: this.$router.currentRoute.name,
      optionTabs: [
        { label: "About", value: "about" },
        { label: "Curriculum", value: "curriculum" },
        { label: "Portfolio", value: "portfolio" },
        { label: "Research", value: "research" },
        { label: "Contact", value: "contact" },
      ],
      drawer: false,
    };
  },
  methods: {
    goTo(tab) {
      if (tab !== this.$router.currentRoute.name)
        this.$router.push({ name: tab });
    },
  },
};
</script>



<style>
.nameHeader {
  color: #ffd600;
  background-color: black;
  text-align: right;
  /* font-family: RailWay; */
  /* padding-right: 20%; */
  font-weight: 200;
  /* font-size: 300%; */
}
.menu {
  border-top: 1px solid white;
}

@font-face {
  font-family: "RailWay";
  src: url("../Fonts/Heebo-VariableFont_wght.ttf");
  /* src: url("../Fonts/Heebo-ExtraLight.ttf"); */
  font-weight: 100 900;
}
</style>