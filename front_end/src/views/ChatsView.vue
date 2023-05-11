  <template>
    <v-app id="inspire">
      <div class="wrapper">
        <nav class="navChat">
          <p>Total de chats: {{ chatsLength }}</p>
          <ul>
            <li v-for="chatbot in chatbots" :key="chatbot.id">
              <a  @click="selectChatbot(chatbot.id)">
                {{ chatbot.nombre || 'Cargando...' }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="main">
          <div class="chat-container">
            <div v-if="selectedChatbot">
              <div class="head">
                <h2>Aqui el nombre del chat seleccionado: {{ selectedChatbot.nombre }}</h2>
              </div>
              <div class="message" v-for="message in selectedChatbot.messages" :key="message.id" :class="{ 'bot-message': message.isBot, 'user-message': !message.isBot }">
                {{ message.content }}
              </div>
              <div class="input">
                <input type="text" v-model="newMessage" @keyup.enter="sendMessage"  placeholder="Escribe tu mensaje...">
                <button class="send" @click="sendMessage" style="background-color: #71a1f4;color: black;pa">Enviar</button>
              </div>
            </div>
            <div v-else>
              Seleccione un chatbot
            </div>
          </div>
        </div>
      </div>
    </v-app>
  </template>
  
  <script>
  import Chat from '@/services/Chat';
  import Instituciones from '@/services/Instituciones';
  
  export default {
    name: 'ChatsView',
    data() {
      return {
        selectedChat: {
          nombre: '',
          messages: []
        },
        newMessage: '',
        selectedChatbotId: null,
        chatbots: []
      };
    },
    mounted() {
      this.loadChats();
    },
    created() {
      this.initialize();
    },
    computed: {
      chatsLength() {
        return Object.keys(this.chatbots).length;
      },
      selectedChatbot() {
        return this.chatbots.find(chatbot => chatbot.id === this.selectedChatbotId);
      }
    },
    methods: {
      async initialize() {
        Chat.listarIns().then((result) => {
          this.chatbots = result.data
        }).catch((error) => {
          console.log(error);
        });
      },
      async selectChat(id) {
      let xd = await Instituciones.listarIns(id);
      this.infoId = xd.data.instituciones_id;
      this.infoNombre = xd.data.nombre;
      if (this.infoNombre === this.selectedChat.nombre) {
        this.selectedChatbotId = this.infoId;
      }
    },

    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.selectedChat.messages.push({
          id: 'user-message-' + Date.now(),
          content: this.newMessage.trim(),
          isBot: false
        });
        this.newMessage = '';
      }
    },
    selectChatbot(chatbotId) {
      this.selectedChatbotId = chatbotId;
      this.fetchChatbotData(chatbotId);
    },
    fetchChatbotData(chatbotId) {
      const promises = [
        this.getNombreDeEmpresa(chatbotId),
        this.getDatosCompletos(chatbotId)
      ];

      Promise.all(promises)
        .then(([nombreEmpresa, datosCompletos]) => {
          const chatbotData = {
            id: chatbotId,
            name: nombreEmpresa.data.nombre,
            messages: [
              {
                id: 'nombre',
                content: `Nombre de la institución: ${nombreEmpresa.data.nombre}`,
                isBot: true
              },
              {
                id: 'url',
                content: `URL: ${datosCompletos.data.url}`,
                isBot: true
              },
              {
                id: 'nombrecharla',
                content: `Nombre de la charla: ${datosCompletos.data.nombrecharla}`,
                isBot: true
              },
              {
                id: 'fechaInicio',
                content: `Fecha de inicio: ${datosCompletos.data.fechaInicio}`,
                isBot: true
              },
              {
                id: 'fechaFina',
                content: `Fecha de fin: ${datosCompletos.data.fechaFina}`,
                isBot: true
              },
              {
                id: 'cupos_disponibles',
                content: `Cupos disponibles: ${datosCompletos.data.Cupos_disponibles}`,
                isBot: true
              }
            ]
          };

          this.chatbots.push(chatbotData);
        })
        .catch(error => {
          console.error(error);
        });
    },
    getNombreDeEmpresa(chatbotId) {
        return Chat.listarIns()
          .then(response => {
            return response.data.find(item => item.id === chatbotId);
          })
          .catch(error => {
            console.error(error);
            throw error;
          });
    },

    getDatosCompletos(chatbotId) {
        return Chat.chatDatos(chatbotId)
          .then(response => {
            return response.data;
          })
          .catch(error => {
            console.error(error);
            throw error;
          });
    }


  }
};

</script>

  
  <!--<script>
  import Chat from '@/services/Chat'
  import Instituciones from '@/services/Instituciones'
  
  export default {
    name: 'ChatsView',
    data: () => ({
      chatsObject: {},
      selectedChat: {
        nombre: '',
        messages: []
      },
      newMessage: '',
      selectedChatbotId: null
    }),
    mounted() {
      this.loadChats()
    },
    created() {
      this.initialize();
    },
    computed: {
      // CHATS LENGTH
      chatsLength() {
        return Object.keys(this.chatsObject).length
      },
      selectedChatbot() {
        return this.chatbots.find(chatbot => chatbot.id === this.selectedChat);
      }
    },
    methods: {
      async initialize() {
        Chat.listarIns().then((result) => {
          this.chatsObject = result.data
        }).catch((error) => {
          console.log(error)
        });
      },
      async selectChat(id) {
        let xd = await Instituciones.listarIns(id)
        this.infoId = xd.data.instituciones_id
        this.infoNombre = xd.data.nombre
        if(this.infoNombre==this.chatsObject){
          this.selectedChat = this.infoId
        }
      },
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.selectedChat.messages.push({
            text: this.newMessage.trim(),
            type: 'outgoing'
          })
          this.newMessage = ''
        }
      },
      
    }
  }
  </script>-->
  
  
  

  
  
  
  <style scoped>
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
    background-color: #71a1f4;
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
    background-color: #ffd717;
    opacity: 0.9;
  }
  
  .input input {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.bot-message {
  background-color: #3399ff;
  color: #ffffff;
  align-self: flex-start;
}

.user-message {
  background-color: rgba(255, 255, 0, 0.9);
  color: #000000;
  align-self: flex-end;
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