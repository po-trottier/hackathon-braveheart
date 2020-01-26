const state = {
  drawer: true,
};

const getters = {
  isOpened: s => s.drawer,
};

const mutations = {
  mutateDrawer: (s, payload) => {
    s.drawer = payload;
  },
};

const actions = {
  setDrawerOpened: (context, payload) => {
    context.commit('mutateDrawer', payload);
  },
  toggleDrawer: (context) => {
    context.commit('mutateDrawer', !context.state.drawer);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
