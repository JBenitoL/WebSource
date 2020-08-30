<template>
  <div>
    <q-page class="q-pa-md q-pt-xl">
      <a href="https://www.linkedin.com/in/jbenitollorens/">
        <q-img :src="require('@/Imagenes/LinkedinLogo.png')" style=" max-width: 5%" class="center" />
        <q-tooltip>My Linkedin</q-tooltip>
      </a>
      <q-input outlined v-model="mail" id="email" label="Your email" class="q-mt-xl">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>
      <q-space />
      <q-input outlined v-model="subject" id="subject" label="Subject" class="q-mt-xl" />
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
export default {
  name: "about",
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
    sendMail() {
      let subject = this.subject;
      let message = this.text;
      let email = this.mail;
      if (subject.length === 0 || message.length === 0 || email.length === 0) {
        alert("Please, fill all the fields");
        return;
      }
      // Creating a XHR object
      let xhr = new XMLHttpRequest();
      let url =
        "https://frpuocxxql.execute-api.eu-west-3.amazonaws.com/dev/users/create";

      // open a connection

      xhr.open("POST", url, true);
      // Set the request header i.e. which type of content you are sending
      xhr.setRequestHeader("Content-Type", "application/json");

      // Create a state change callback
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Print received data from server
        }
      };
      // Converting JSON data to string
      var data = JSON.stringify({
        message: message,
        Subject: subject,
        emailTo: email,
      });

      console.log(`message=${message}&Subject=${subject}&emailTo=${email}`);

      this.mail = "";

      // Sending data with the request

      xhr.send(data);

      this.mail = "";
      this.subject = "";
      this.text = "";

      this.disable = true;
      this.labelButton = "Submitted";
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