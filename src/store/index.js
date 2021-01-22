import { createStore } from 'vuex'
import Photos from '@/store/modules/Photos'
import Categories from '@/store/modules/Categories'

export default createStore({
  modules: {
    Photos,
    Categories
  }
})
