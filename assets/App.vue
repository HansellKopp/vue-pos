<template>
  <v-app >
    <v-toolbar dark fixed class="toolbar">
      <v-toolbar-side-icon 
        @click.stop="drawer = !drawer" 
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">{{ title }}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat :to="login.to">
          <v-icon left >{{ login.icon }}</v-icon>
          {{ login.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </main>
    <v-navigation-drawer
      class="pb-0"
      temporary
      absolute
      height="100%"
      v-model="drawer" 
    >
      <v-list dense>
       <template v-for="(item, i) in items">             
          <v-divider v-if="item.separator" dark></v-divider>          
          <v-list-tile
            v-else
            :key="item.title"
            :to="item.to"           
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }} 
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>  
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-footer fixed>
      <span>Made with love in Berlin</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    mixins: [Meta],
    data () {
      return {
        drawer: false,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'restaurant_menu', title: 'CategoriesAndProducts', to: '/categories' },
          { icon: 'event_seat', title: 'Tables', to: '/tables' },          
          { icon: 'edit', title: 'Orders', to: '/orders' },
          { icon: 'supervisor_account', title: 'Users', to: '/users' },
          { icon: 'settings_applications', title: 'Settings', to: '/settings' },
          { separator: true },
          { icon: 'person_outline', title: 'Login', to: '/login' }
        ],
        login: { icon: 'person_outline', title: 'Login', to: '/login' },
        title: 'Pesetas Restaurant'
      }
    },
    methods: {
      setDrawer: function () {
        console.log(this.drawer)
        this.drawer = ! this.drawer
      }
    }

  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
