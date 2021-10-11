import { createStore } from 'vuex';
import { Comics } from '@/types/Comics';

export type State = { comics: Comics };

// const state: State = { comics: [] };

export default createStore({
  state: { comics: [] },
  mutations: {
    setComics(state: State, payload: Comics) {
      state.comics = payload;
    },
  },
  actions: {
    setComics({ commit }) {
      commit('setComics');
    },
  },
  modules: {},
});
