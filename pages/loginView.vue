<template>
  <div class="mt-3 pt-5">
    <v-card class="form-bg elevation-1">
      <v-card-text>
          <v-flex xs4>
              <v-header>USER LOGIN</v-header>
          </v-flex>
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
    </div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>