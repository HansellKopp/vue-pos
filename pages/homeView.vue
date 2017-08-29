<template>
  <v-container justify-center align-center  xs12 sm8 md6>
      <v-card class="mt-5">
        <v-card-media
          height="400px"
          :src="image"
          alt="Wellcome"
        >
        </v-card-media>
        <v-card-actions>
          <v-spacer></v-spacer><v-btn primary flat router to="/login">Login</v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        image: `/static/wellcome/op${Math.floor(Math.random() * 4 + 1)}.jpeg`
        
      }
    }
  }
</script>
