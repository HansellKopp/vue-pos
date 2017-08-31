<template>
  <v-container justify-center align-center xs10 sm6 md6>
      <v-card class="mt-5">
        <v-card-media
          height="400px"
          :src="image"
          alt="Wellcome"
        >
        <div class='title text-center'>Welcome to POS Restaurant</div>
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
        image: `/static/welcome/op${Math.floor(Math.random() * 5 + 1)}.jpeg`
        
      }
    }
  }
</script>


<style scoped>
  .title {
    position: absolute;
    top: 0px;
    padding: 20px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    width: 100%;
    text-align: center; 
   }
</style>
