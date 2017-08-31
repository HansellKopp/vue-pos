export default  {
    state: {                
        users: []
    },
  
    actions: { 
        loadUsers(context, app) {
            return new Promise((resolve) => {
            app.$http.get('/backend/users/').then((response) => {
                context.commit('setUsers', response.data)
                resolve()
            })
            })
        }
    },
  
    mutations: {
        setUsers(state, payload) {
            state.users = payload
        },
    },
  
    getters: {        
        getAllUsers(state) { return state.users },
    }
}