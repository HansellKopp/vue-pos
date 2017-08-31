const dummyProducts = []
const dummyCategories = [
    {
        description: 'Entradas'
      },
      {
        description: 'Ensaladas'
      },
      {
        description: 'Sopas'
      },
      {
        description: 'Pastas'
      },
      {
        description: 'Pescados'
      },
      {
        description: 'Carnes'
      },
      {
        description: 'Aves'
      },
      {
        description: 'Postres'
      },
      {
        description: 'Bebidas'
      },
      {
        description: 'Bebidas Alcoholicas'
      }
]


module.exports = {
    state: {                
        products: [],
        categories: [],
    },
  
    actions: {
        loadProducts(context) {
            context.commit('setProducts', dummyProducts)
        },
        loadCategories(context) {
            //this.$http.get('/backend/categories/')
            //.then(function(response) {
            //  console.log(response.data)
            //})
            context.commit('setCategories', dummyCategories)                        
        },
    },
  
    mutations: {
        setProducts(state, payload) {
            state.products = payload
        },
        setCategories(state, payload) {            
            state.categories = payload
        }
    },
  
    getters: {        
        getAllProducts(state) { return state.products },
        getAllCategories(state) { return state.categories }
    }
}