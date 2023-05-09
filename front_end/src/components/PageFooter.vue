<template>
  <v-footer color="#FDD835">
    <v-spacer></v-spacer>
    <div class="footer-text">
      <div class="footer-social">
        <a href="https://www.facebook.com/" target="_blank">
          <v-icon size="50" class="mr-10">mdi-facebook</v-icon>
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <v-icon size="50" class="mr-10">mdi-twitter</v-icon>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <v-icon size="50">mdi-whatsapp</v-icon>
        </a>
      </div>
      <div class="footer-description">Unidad de Servicios Estudiantiles (USEI)</div>
      <div class="footer-date" style="font-size:20px;">© {{ new Date().getFullYear() }}</div>
    </div>
    <v-spacer></v-spacer>
  </v-footer>
</template>

<style>
.footer-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-description {
  font-size: 18px;
  margin-bottom: 16px;
}
.footer-social {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}
.footer-date {
  font-size: 14px;
}
</style>