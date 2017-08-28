<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/static/v.png" alt="Vuetify.js" class="mb-5" />
      </div>
      <v-card>
        <v-card-text>
          <p>Welcome to POS Restaurant demo</p>
        </v-card-text>
        <v-card-actions>
          <v-btn primary flat router to="/login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
