import { createStore } from 'vuex';
// do index
import { Comics } from '@/types/Comics';
import { Characters } from '@/types/Characters';

export type State = { comics: Comics; characters: Characters };

export default createStore({
  state: { comics: [], characters: [] },
  mutations: {
    setComics(state: State, payload: Comics) {
      state.comics = payload;
    },
    setCharacters(state: State, payload: Characters) {
      state.characters = payload;
    },
  },
  actions: {
    setComics({ commit }, payload: Comics) {
      commit('setComics', payload);
    },
    setCharacters({ commit }, payload: Characters) {
      commit('setCharacters', payload);
    },
  },
  modules: {},
});
