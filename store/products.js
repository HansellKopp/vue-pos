export default {
    state: {                
        products: [],
        categories: [],
    },
  
    actions: { 
        loadCategories(context, app) {
            return new Promise((resolve) => {
              app.$http.get('/backend/categories/').then((response) => {
                context.commit('setCategories', response.data)
                resolve()
              })
            })
        },
        loadProducts(context, app) {
            return new Promise((resolve) => {
              app.$http.get('/backend/products/').then((response) => {
                context.commit('setProducts', response.data)
                resolve()
              })
            })
        }
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