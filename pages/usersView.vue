<template>
  <v-card class="teal lighten-1">
    <v-card-title primary>
      <div class="white--text headline">Users</div>
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
        <td>{{ props.item.username }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.userType }}</td>
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
            text: 'Username',
            align: 'left',
            sortable: true,
            value: 'username'
          },
          {
            text: 'Email',
            align: 'left',
            sortable: true,
            value: 'email'
          },
          {
            text: 'Type',
            align: 'left',
            sortable: true,
            value: 'userType'
          }
        ]
      }
    },
    computed: {
       items() {
         return  this.$store.getters.getAllUsers
       }
    },
    created() {
      this.$store.dispatch('loadUsers',this)
    }
  }
</script>