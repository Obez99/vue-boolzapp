Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Michele",
        image: "img/avatar_1.jpg"
      },

      {
        name: "Fabio",
        image: "img/avatar_2.jpg"
      },

      {
        name: "Samuele",
        image: "img/avatar_3.jpg"
      },

      {
        name: "Luisa",
        image: "img/avatar_4.jpg"
      },
    ]
  }
})