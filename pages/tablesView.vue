<template>
  <v-card class="teal lighten-1">
    <v-card-title primary-title>
      <div class="white--text headline">Tables</div>
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
        :headers="headers"
        :items="items"
        :search="search"
      >
      <template slot="items" scope="props">
        <td>{{ props.item.place }}</td>
        <td>{{ props.item.number }}</td>
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
            text: 'Place',
            align: 'left',
            sortable: true,
            value: 'place'
          },
          {
            text: 'Number',
            align: 'left',
            sortable: true,
            value: 'number'
          }
        ],
        items: [
          {
            place: 'Terrace',
            number: '001',
          },
          {
            place: 'Terrace',
            number: '002',
          },
          {
            place: 'Terrace',
            number: '003',
          },
          {
            place: 'Salon',
            number: '004',
          },
          {
            place: 'Salon',
            number: '005',
          },
          {
            place: 'Salon',
            number: '006',
          },
          {
            place: 'Salon',
            number: '007',
          }
      ]
      }
    }
  }
</script>