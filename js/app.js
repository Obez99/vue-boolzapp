Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Michele",
        image: "img/avatar_1.jpg",
        date: "10/01/2020 16:15:22",
        messages: [
          {
            text: "Hai portato a spasso il cane?",
            status: "sent"
          },

          {
            text: "Ricordati di dargli da mangiare",
            status: "sent"
          },

          {
            text: "Tutto fatto?",
            status: "received"
          }
        ],

      },

      {
        name: "Fabio",
        image: "img/avatar_2.jpg",
        date: "10/01/2020 16:15:22",
        messages: [
          {
            text: "Ciao come stai?",
            status: "sent"
          },

          {
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received"
          },

          {
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "received"
          }
        ],
      },

      {
        name: "Samuele",
        image: "img/avatar_3.jpg",
        date: "10/01/2020 16:15:22",
        messages: [
          {
            text: "La Marianna va in campagna?",
            status: "received"
          },

          {
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent"
          },

          {
            text: "Ah scusa!",
            status: "received"
          }
        ],
      },

      {
        name: "Luisa",
        image: "img/avatar_4.jpg",
        date: "10/01/2020 16:15:22",
        messages: [
          {
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent"
          },

          {
            text: "Si, ma preferirei andare al cinema",
            status: "received"
          }
        ],
      }
    ],
    activeChat: {},
    writtenMessage: ""
  },
  methods: {
    setActiveChat: function (obj) {
      this.activeChat = obj
    },
    sendMessage: function (str) {
      const newMessage = {
        status: "sent",
        text: str
      }
      this.activeChat.messages.push(newMessage);
      this.writtenMessage = "";
    }
  }
})