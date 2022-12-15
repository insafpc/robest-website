let url = 'https://api.robest.in/graphql';

export const state = () => ({
  navigation: []
});

export const actions = {
  async nuxtServerInit({commit}) {
    let {data} = await this.$axios.$post(url, {
      "query": `
        {
          stores(where:{show_in_main_nav: true}){ id, title, seo, technology{Title, Logo{url}}}
        }
      `,
      headers: {"Content-Type": "application/json"}
    });

    commit('SET_STORE_NAVIGATION', data);
  }
};

export const mutations = {
  SET_STORE_NAVIGATION(state, value) {
    state.navigation = value;
  }
};

export const getters = {
  GET_NAVIGATION(state) {
    return state.navigation;
  }
};
