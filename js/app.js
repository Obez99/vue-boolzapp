Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Michele",
        image: "img/avatar_1.jpg",
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent"
          },

          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent"
          },

          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto?",
            status: "received"
          }
        ],

      },

      {
        name: "Fabio",
        image: "img/avatar_2.jpg",
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent"
          },

          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received"
          },

          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "received"
          }
        ],
      },

      {
        name: "Samuele",
        image: "img/avatar_3.jpg",
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna?",
            status: "received"
          },

          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent"
          },

          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received"
          }
        ],
      },

      {
        name: "Luisa",
        image: "img/avatar_4.jpg",
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent"
          },

          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received"
          }
        ],
      }
    ],
    activeChat: {},
    writtenMessage: "",
    contactSearch: "",
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
        text: str,
        date: dayjs().format("DD/MM/YYYY HH:mm:ss")
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

    deleteMessage: function (i) {
      this.activeChat.messages.splice(i, 1)
    },

    nameSearch: function () {
      return this.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(this.contactSearch.trim().toLowerCase())
      })
    },

    getLastMessage: function (i) {
      const arrLength = this.contacts[i].messages.length;
      return this.contacts[i].messages[arrLength - 1].text;
    },

    getLastDate: function (i) {
      const arrLength = this.contacts[i].messages.length;
      return this.contacts[i].messages[arrLength - 1].date;
    }
  },
})