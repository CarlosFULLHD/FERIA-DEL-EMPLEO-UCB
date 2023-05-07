<template>
   <v-app id="inspire">
    <div class="wrapper">
      <nav class="navChat">
        <ul>
          <li v-for="(chat, index) in chats" :key="index">
            <a href="#" @click="selectChat(index)">
              {{ chat.name }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="main">
        <div class="chat-container">
          <div class="head">
            <h2>{{ selectedChat.name }}</h2>
          </div>
          <div class="messages">
            <div v-for="(message, index) in selectedChat.messages" :key="index">
              <div :class="['message', message.type]">{{ message.text }}</div>
            </div>
          </div>
          <div class="input">
            <input type="text" v-model="newMessage" @keyup.enter="sendMessage" v-on:input="validateNumber" placeholder="Escribe tu mensaje...">
            <button class="send" @click="sendMessage">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chats: [
          {
            name: "Chatbot 1",
            messages: [
              { text: "Bienvenido!", type: "bot" },
              { text: "Este es el link?", type: "bot" }
            ]
          },
          {
            name: "Chatbot 2",
            messages: [
              { text: "Hola!", type: "bot" },
              { text: "Este es el link?", type: "bot" }
            ]
          }
        ],
        selectedChatIndex: 0,
        newMessage: ""
      };
    },
    computed: {
      selectedChat() {
        return this.chats[this.selectedChatIndex];
      }
    },
    methods: {
      selectChat(index) {
        this.selectedChatIndex = index;
      },
      sendMessage() {
        const message = { text: this.newMessage, type: "user" };
        this.selectedChat.messages.push(message);
        this.newMessage = "";
        setTimeout(() => {
          if (this.newMessage === '1') {
            const reply = { text: "Que tal este es mi link", type: "bot" };
            this.selectedChat.messages.push(reply);
          }
          else if (this.newMessage == '2') {
            const reply = { text: "Que tal esta es mi informacion de contacto 777XXXXX ", type: "bot" };
            this.selectedChat.messages.push(reply);
          }
          else{
            const reply = { text: "Lo siento, porfavor ingresa solo numeros", type: "bot" };
            this.selectedChat.messages.push(reply);
          }
        }, 1000);
      },
      validateNumber: function () {
        if (this.selectedNumber !== '1' && this.selectedNumber !== '2') {
          this.selectedNumber = '';
        }
      }
      
    }
  };
  </script>
  
  <style>
  .head{
    background-color: #2e3748;
    opacity: 0.9;
    width: 100%;
    height: fit-content;
  }
  .head h2{
    color: white;
  }
  .send {
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
  .wrapper {
    display: flex;
    height: 100vh;
  }
  
  .navChat {
    background-color: #ffd717;
    opacity: 0.9;
    color: black;
    padding: 20px;
    width: 200px;
  }
  
  .navChat ul {
    list-style: none;
    padding: 0;
  }
  
  .navChat li {
    margin-bottom: 10px;
  }
  
  .navChat a {
    color: black;
    text-decoration: none;
  }
  
  .main {
    height: 100%;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .chat-container {
    height: 100%;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
  }
  
  .messages {
  margin-bottom: 10px;
  margin-top: 10px;
  display: inline-block;
}
.message {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
  
  .user {
    background-color: #71a1f4;
  }
  
  .bot {
    background-color: #f1f1f1;
  }
  
  .input {
    display: flex;
  }
  
  .input input {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
   
  }
  </style> 
  <!--
  <template>
    <div class="wrapper">
      <nav class="navChat">
        <ul>
          <li v-for="(chat, index) in chats" :key="index">
            <a href="#" @click="selectChat(index)">
              {{ chatbot.name }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="main">
        <div class="chat-container">
          <h2>{{ chatbot.name }}</h2>
          <p>{{ chatbot.description }}</p>
          <div class="messages">
            <div v-for="(message, index) in selectedChat.messages" :key="index">
              <div :class="['message', message.type]">{{ message.text }}</div>
            </div>
          </div>
          <div class="input">
            <input type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message...">
            <button @click="sendMessage">Send</button>
          </div>
        </div>
      </div>
    </div>
    
  </template>
  
<script>
import axios from 'axios'
export default {
    data() {
      return {
        chats: [
        axios.get('/chats_empresas')
        .then(response => {
          this.chatbots = response.data;
        })
        .catch(error => {
          console.error(error);
        })
        ],
        selectedChatIndex: 0,
        newMessage: ""
      };
    },
    computed: {
      selectedChat() {
        return this.chats[this.selectedChatIndex];
      }
    },
    methods: {
      selectChat(index) {
        this.selectedChatIndex = index;
      },
      sendMessage() {
        const message = { text: this.newMessage, type: "user" };
        this.selectedChat.messages.push(message);
        this.newMessage = "";
        setTimeout(() => {
          axios.get('/chats_empresas')
          .then(response => {
            this.chatbots = response.data;
          })
          .catch(error => {
            console.error(error);
          });
          this.selectedChat.messages.push(reply);
        }, 1000);
      }
    }
  };
  
</script>
<style>
  /* Estilos por defecto */
.chatbot {
  width: 300px;
  height: 500px;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
/* Estilos para pantallas pequeñas */
@media screen and (max-width: 767px) {
  .chatbot {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    right: 0;
  }
  
  .chatbot .toggle-button {
    display: none;
  }
  
  .chatbot .messages {
    display: none;
  }
  
  .chatbot .input {
    width: 100%;
  }
}
.wrapper {
    display: flex;
    height: 100vh;
  }
  
  .navChat {
    background-color: #333;
    color: #fff;
    padding: 20px;
    width: 200px;
  }
  
  .navChat ul {
    list-style: none;
    padding: 0;
  }
  
  .navChat li {
    margin-bottom: 10px;
  }
  
  .navChat a {
    color: #fff;
    text-decoration: none;
  }
  
  .main {
    flex: 1;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .chat-container {
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
  }
  
  .messages {
    margin-bottom: 20px;
  }
  
  .message {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  
  .user {
    background-color: #eee;
  }
  
  .bot {
    background-color: #f1f1f1;
  }
  
  .input {
    display: flex;
  }
  
  .input input {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
   
  }
</style>
 -->