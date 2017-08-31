export default {
    state: {                
        tables: []
    },
  
    actions: { 
        loadTables(context, app) {
            return new Promise((resolve) => {
              app.$http.get('/backend/tables/').then((response) => {
                context.commit('setTables', response.data)
                resolve()
              })
            })
        }
    },
  
    mutations: {
        setTables(state, payload) {
            state.tables = payload
        },
    },
  
    getters: {        
        getAllTables(state) { return state.tables },
    }
}