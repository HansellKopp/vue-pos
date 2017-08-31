<template>
  <v-container xs10 sm4 md4 offset-xs1 offset-sm4>
    <v-card class="form_bg elevation-1">
      <v-card-title>USER LOGIN</v-card-title>
      <v-card-text>
          <v-flex xs6>
            <v-text-field
              name="iemail"
              label="email"
              id="email"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              name="password"
              label="password"
              id="password"
            ></v-text-field>
          </v-flex>
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn primary router to="/">Send</v-btn>
        </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>