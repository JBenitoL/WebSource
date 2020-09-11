<template>
  <div>
    <q-page class="q-pa-md q-pt-xl">
      <q-img
        :src="require('@/imagenes/LinkedinLogo.png')"
        :style="this.$q.platform.is.mobile ? 'max-width: 15%' : 'max-width: 5%'"
        class="center"
        @click="goToLinkedin"
      >
        <q-tooltip>My Linkedin</q-tooltip>
      </q-img>
      <q-input
        outlined
        v-model="mail"
        id="email"
        label="Your email"
        class="q-mt-xl"
        :style="this.$q.platform.is.mobile ? 'width:300px' : ''"
        lazy-rules
        :rules="[val => isMailValid()]"
      >
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>
      <q-space />
      <q-input outlined v-model="subject" id="subject" label="Subject" class="q-mt-lg" />
      <q-space />
      <q-input
        class="q-my-md"
        outlined
        v-model="text"
        id="message"
        type="textarea"
        label="Your message"
        style="width:auto"
      />
      <div class="row full-height justify-center">
        <q-btn
          class="justify-center"
          color="black"
          icon-right="send"
          :label="labelButton"
          :disabled="!mail || !subject || !text || disable"
          @click="sendMail"
        />
      </div>
    </q-page>
  </div>
</template>

<script>
import links from "../links";

export default {
  name: "about",
  mixins: [links],
  data() {
    return {
      mail: "",
      text: "",
      subject: "",
      disable: false,
      labelButton: "Send",
    };
  },
  methods: {
    goToLinkedin() {
      window.open(this.linkedinLink);
    },
    isMailValid() {
      const reglasMail = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      if (reglasMail.test(this.mail)) this.disable = false;
      else {
        this.disable = true;
        return "Invalid email";
      }
    },
    sendMail() {
      // Creating a XHR object
      let xhr = new XMLHttpRequest();
      let url =
        "https://frpuocxxql.execute-api.eu-west-3.amazonaws.com/dev/users/create";

      // open a connection
      xhr.open("POST", url, true);

      // Set the request header i.e. which type of content you are sending
      xhr.setRequestHeader("Content-Type", "application/json");

      // Converting JSON data to string
      var data = JSON.stringify({
        message: this.text,
        Subject: this.subject,
        emailTo: this.mail,
      });

      // Sending data with the request
      xhr.send(data);

      this.mail = "";
      this.subject = "";
      this.text = "";
      this.disable = true;
      this.labelButton = "Submitted";
      // alert("Sorry, your email could not be sent");
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
</style>