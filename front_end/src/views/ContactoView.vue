<template>
  <v-app>
    <div class="Contacto" >
      <div class="Informacion">
        <div class="Titulo">
          <h1>Contacto USEI</h1>
        </div>
        <hr>
        <div class="descripcionPrincipal">
          <p>Unidad de Servicios Estudiantiles Integrales Bloque D, Piso 5, Aula D29.</p>
        </div>
        <div class="contacto">
          <div class="subtitulo">
            <h2>Teléfono: </h2>
          </div>
          <div class="descripcion">
            <p>2782222 Interno 2723</p>
          </div>
        </div>
        <div class="contacto">
          <div class="subtitulo">
            <h2>Directo: </h2>
          </div>
          <div class="descripcion">
            <p>2692723</p>
          </div>
        </div>
        <div class="contacto">
          <div class="subtitulo">
            <h2>Celular:</h2>
          </div>
          <div class="descripcion">
            <p>76521445</p>
          </div>
        </div>
        <hr>
        <div class="Redes">
          <h2>Redes Sociales:</h2>
          <button @click="openOverlay">Ver Mas</button>
        </div>
      </div>
      <div class="Mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.1768595846215!2d-68.11197498449624!3d-16.522822071748863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20ee187a3103%3A0x2f2bb2b7df32a24d!2sUniversidad%20Cat%C3%B3lica%20Boliviana%20%22San%20Pablo%22!5e0!3m2!1ses-419!2sbo!4v1683150352209!5m2!1ses-419!2sbo" width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <div v-if="showOverlay" class="overlay">
      <div class="overlay-content">
        <button @click="closeOverlay" class="close-btn">X</button>
        <h1>Redes Sociales: </h1><br>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="social-media-row">
          <img src="@/assets/logoFacebook.png" alt="Logo de Facebook" />
          <p>Usei Facebook</p>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="social-media-row">
          <img src="@/assets/logoWhatsApp.png" alt="Logo de Twitter" />
          <p>Usei WhatsApp</p>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="social-media-row">
          <img src="@/assets/logoInstagram.png" alt="Logo de Instagram" />
          <p>Usei Instagram</p>
        </a>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      showOverlay: false,
    };
  },
  methods: {
    openOverlay() {
      this.showOverlay = true;
    },
    closeOverlay() {
      this.showOverlay = false;
    },
  },
};
</script>

<style>
.Contacto{
  
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
}

.overlay-content {
  background-color: white;
  padding: 20px;
  position: relative; 
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 1; 
}

.social-media-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;
  color: inherit;
}

.social-media-row img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.Contacto {
  display: flex;
  flex-wrap: wrap;
  font-size: 1em;
  justify-content: space-evenly;
  width: 100%;
}

.Informacion {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  gap: 1rem;
  width: 100%; 
  max-width: 600px; 
}

.Mapa {
  display: flex;
  justify-content: center; 
  padding: 1rem;
  max-width: 100%;
  position: relative;
  width: 100%;
  margin-top: 1rem; 
}

.Mapa iframe {
  border: 0;
  max-width: 100%; 
  height: auto; 
}

@media (min-width: 768px) {
  .Informacion {
    width: 50%;
    max-width: 400px; 
  }

  .Mapa {
    margin-top: 0;
    width: 50%;
    max-width: 400px;
  }
}

.Redes button{
  color: aliceblue;
  border: 10px;
  border-color: black;
  background-color: #0d63a5;
  padding: 10px;
}
.Redes button:hover{
  color: rgb(0, 56, 105);
  border: 10px;
  border-color: #ffd717;
  background-color: #ffd717;
  padding: 10px;
}
</style>




