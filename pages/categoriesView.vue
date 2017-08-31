<template>
  <v-card class="teal lighten-1">
    <v-card-title primary>
      <div class="white--text headline">Categories</div>
      <v-spacer></v-spacer>
      <v-text-field dark
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
        v-bind:headers="headers"
        v-bind:items="items"
        v-bind:search="search"
      >
      <template slot="items" scope="props">
        <td>{{ props.item.description }}</td>
      </template>
      <template slot="pageText" scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        pagination: {},
        headers: [
          {
            text: 'Description',
            align: 'left',
            sortable: true,
            value: 'name'
          }
        ]
      }
    },
    computed: {
       items() {
         return  this.$store.getters.getAllCategories
       }
    },
    created() {
      this.$store.dispatch('loadCategories',this)
    }
  }
</script>