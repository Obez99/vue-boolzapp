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
            messageDate: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent"
          },

          {
            messageDate: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent"
          },

          {
            messageDate: "10/01/2020 16:15:22",
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
            messageDate: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent"
          },

          {
            messageDate: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received"
          },

          {
            messageDate: "20/03/2020 16:35:00",
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
            messageDate: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna?",
            status: "received"
          },

          {
            messageDate: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent"
          },

          {
            messageDate: "28/03/2020 16:15:22",
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
            messageDate: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent"
          },

          {
            messageDate: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received"
          }
        ],
      }
    ],
    activeChat: {},
    writtenMessage: "",
    contactSearch: "",
    filteredContacts: []
  },
  methods: {
    setActiveChat: function (obj) {
      this.activeChat = obj
    },

    sendMessage: function (str) {
      str = str.trim()
      if (str === "")
        return

      const newMessage = {
        status: "sent",
        text: str
      }

      this.activeChat.messages.push(newMessage);
      this.writtenMessage = "";

      setTimeout(function () {
        const newResponse =
        {
          status: "received",
          text: "ok"
        }

        app.activeChat.messages.push(newResponse)
      }, 1000)
    },

    nameSearch: function () {
      this.filteredContacts = this.contacts.filter(function (obj) {
        if (obj.name.includes(app.contactSearch))
          return obj
      })
    }
  },
})