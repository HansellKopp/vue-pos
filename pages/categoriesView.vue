<template>
  <div class="pt-4">
    <v-breadcrumbs divider="/" class="pt-4 text-xs-left">
      <v-breadcrumbs-item 
        v-for="item in links" :key="item.text"
        :disabled="item.disabled"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
  <v-card class="teal lighten-1">
    <v-card-title>
      Categories
      <v-spacer></v-spacer>
      <v-text-field
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
    </div>
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
        ],
        links: [
          {
            text: 'Yogurt',
            disabled: false
          },
          {
            text: 'Sandwich',
            disabled: false
          }
        ],
        items: [
          {
            description: 'Yogurt'
          },
          {
            description: 'Sandwich'
          },
          {
            description: 'Eclair'
          },
          {
            description: 'Cupcake'
          },
          {
            description: 'Gingerbread'
          },
          {
            description: 'Jelly bean'
          },
          {
            description: 'Lollipop'
          },
          {
            description: 'Honeycomb'
          },
          {
            description: 'Donut'
          },
          {
            description: 'KitKat'
          }
        ]
      }
    }
  }
</script>