import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

interface State {
  count: number;
}

export const store = new Vuex.Store<State>({
  state: {
    count: 0,
  },
  actions: {
    countUp(context) {
      context.commit("countUp");
    },
  },
  getters: {
    count(state) {
      return state.count;
    },
  },
  mutations: {
    countUp(state) {
      state.count += 1;
    },
  },
});