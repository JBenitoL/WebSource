<template>
  <div>
    <q-page class="q-pa-md q-pt-xl">
      <q-input outlined v-model="mail" label="Write your email" />
      <q-space />
      <q-input class="q-my-xl" outlined v-model="text" type="textarea" label="Your message" />

      <q-btn
        class="text-right"
        color="black"
        icon-right="send"
        label="Send"
        @click="sendMail; return false"
      />
    </q-page>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      mail: "",
      text: "",
    };
  },
  methods: {
    sendMail() {
      // var link =
      //   "mailto:jbenitollorens@gmail.com" +
      //   "?cc=jbenitollorens@gmail.com" +
      //   "&subject=" +
      //   escape("This is my subject") +
      //   "&body=" +
      //   escape(this.text);
      // window.location.href = link;

      // var link2 =
      //   "https://mail.google.com/mail/?view=cm&fs=1&to=jbenitollorens@gmail.com" +
      //   "&su=" +
      //   escape("This is my subject") +
      //   "&body=" +
      //   escape(this.text) +
      //   "&bcc=jbenitollorens@gmail.com";
      // window.location.href = link2;
      var link3 =
        "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jbenitollorens@gmail.com&su=prueba&body=Esto+es+una+prueba";
      window.location.href = link3;
    },
  },
};
</script>

<style>
</style>