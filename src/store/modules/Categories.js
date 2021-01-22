import axios from 'axios'
import { apiUrl } from '@/config'

export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    UPDATE_CATEGORIES (state, data) {
      state.categories = data
    }
  },
  actions: {
    async fetchCategories ({ commit }) {
      const res = await axios.get(`${apiUrl}/categories`)
      commit('UPDATE_CATEGORIES', res.data)
    }
  },
  getters: {
    sortedCategoriesByName (state) {
      return state.categories.sort((a, b) => {
        return (a.name === b.name) ? 0 : ((a.name > b.name) ? 1 : -1)
      })
    },
    categoriesAmount (state) {
      return state.categories.length
    }
  },
  modules: {}
}
